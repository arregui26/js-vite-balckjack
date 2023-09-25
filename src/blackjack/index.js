import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, turnoComputadora} from './usecases'


/*
*   C = TREBOLES
    D = DIAMANTES
    H = CORAZONES
    S = ESPADAS
*/


  let deck         = [];
      
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores=[];

  //referencias del html
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        puntosHTML = document.querySelectorAll('small'),
        divcartasJugadores = document.querySelectorAll('.divCartas');
        
  

  const iniciarJuego =( numJugadores=2)=>{
      deck = crearDeck(tipos,especiales);
      puntosJugadores=[];
      for ( let i =0; i<numJugadores;i++){puntosJugadores.push(0);}
      puntosHTML.forEach(ele => ele.innerText=0);
      divcartasJugadores.forEach(elem => elem.innerHTML ='');
      btnPedir.disabled= false;
      btnDetener.disabled= false;
      }        


  //Turno: 0 = primer jugador y el último será la computadora
  export const acumularPuntos=( carta, turno )=>{
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }

  export const crearCarta =(carta, turno) => {
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`; 
      imgCarta.classList.add('carta');
      divcartasJugadores[turno].append(imgCarta);
  }

  export const mensaje = () => {
      const [puntosMin, puntosC] = puntosJugadores;
      if (puntosMin>21){ return 'Perdiste'}
      else if (puntosC>21){ return 'Ganaste'}
      else if (puntosMin === puntosC) { return 'Empate'}
      else {return 'Perdiste'}
  };


  //eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0);
      crearCarta(carta,0);
      if (puntosJugador > 21 || puntosJugador===21) {
          btnPedir.disabled = true;
          btnDetener.disabled =true;
          turnoComputadora(puntosJugador, deck, puntosJugadores);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled =true;
      btnDetener.disabled =true;
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores);
  });

  btnNuevo.addEventListener('click', () => {
      iniciarJuego();
  });







