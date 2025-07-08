/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
let result = [];
const namesStartingWith = (array, letter) => {
  for (i=0; i<array.length; i++) {
    let firstLetter = array[i].slice(0,1);
    if (firstLetter === letter) {
      result.push(array[i])
    }
  }
  return result
}


// Invoca la funzione qui e stampa il risultato in console

let namesStartingWithA = namesStartingWith(names, `A`)
console.log(namesStartingWithA)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]