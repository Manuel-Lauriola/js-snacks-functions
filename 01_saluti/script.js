/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

const greetings = (name) => `Ciao`+" "+ name
//bonus
// function greetings(name) {`Ciao`+" "+ name}

// Invoca la funzione qui e stampa il risultato in console

greetings (userName)
console.log(greetings (userName))

//Risultato atteso se si passa 'Mario': // ciao Mario
