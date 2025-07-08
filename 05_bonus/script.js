/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

//creo la variabile hour che mi servirà nella funzione
const now = new Date ();
const hour = now.getHours();
console.log(hour)

// Dichiara la funzione qui.

const greetings = (user) => {
  if (hour < 13) {
    return `Buongiorno ${user}`
  }
    else if (hour < 17) {
      return `Buon pomeriggio ${user}`
    }
    else {return `Buonasera ${user}`}
}

//bonus

// function greetings (user) {
//   if (hour < 13) {
//     return `Buongiorno ${user}`
//   }
//     else if (hour < 17) {
//       return `Buon pomeriggio ${user}`
//     }
//     else {return `Buonasera ${user}`}
// }

// Invoca la funzione qui e stampa il risultato in console

const greetingsName = greetings(name)
console.log(greetingsName)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.