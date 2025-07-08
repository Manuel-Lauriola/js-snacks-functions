/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const everyFirstLetter = (array) => {
  let capitalArray = [];
  for (i = 0; i<array.length; i++) {
    let firstLetter = array[i].slice(0,1)
    capitalArray.push(firstLetter)
  }
  return capitalArray
}


// Invoca la funzione qui e stampa il risultato in console
const newArray = everyFirstLetter(names)
console.log(newArray)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]