/**
 * Esta función extrae una carta del deck
 * @param {array<string>} deck 
 * @returns {string} - Devuelve una carta del deck
 */

export const pedirCarta = (deck) => {
    
    if ( !deck ||  deck.length ===0){
        throw 'No hay cartas en el deck'
    }
    return deck.pop();
};