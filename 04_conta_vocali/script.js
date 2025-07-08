/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let array = [];
const vocals = ["a","e","i","o","u"];
let vocalsCount = [];

vocalsIn = (text) => {
  array = text.split("");
  for (i=0; i<array.length; i++) {
    if ( vocals.indexOf(array[i]) !== -1) {
      vocalsCount.push(array[i])
    }
  }
  return vocalsCount
}

// Invoca la funzione qui e stampa il risultato in console

let vocalsCountWord = vocalsIn (word)
console.log(vocalsCountWord)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)