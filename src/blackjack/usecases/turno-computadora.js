    import {acumularPuntos, crearCarta, mensaje} from '../index';
    import { pedirCarta,  } from "./pedir-carta";



    /**
     *  Genera los movimientos de la computadora
     * @param {Number} puntosMin 
     * @param {array<string>} deck 
     * @param {Number} puntosJugadores 
     */
  export const turnoComputadora = ( puntosMin, deck, puntosJugadores) =>{
      let puntosComputadora=0;
      do{
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
      crearCarta(carta,puntosJugadores.length-1);
      } while ( (puntosComputadora< puntosMin) && (puntosMin<=21) );
      setTimeout(() => {
      alert(mensaje());
      }, 100);
  }