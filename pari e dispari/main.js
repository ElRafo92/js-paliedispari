"use strict"

/* Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//console.log(userNum);


 
 
 function EvenOrOdd(risultato) {
     if (risultato % 2 === 0) {
         return console.log('la somma è pari')
     } else {
         return console.log('la somma è dispari');
     }
 };

let userNum = Number(prompt('inserisci un numero da 1 a 5:'));
console.log(userNum);

if (userNum > 5 || isNaN(userNum)) {
    alert('inserisci un numero da 1 a 5');
    location.reload(window)
}

function randomNumber(num1,) {
    return Math.floor(Math.random() * num1 + 1);
 };

let pcNum = randomNumber(5);
console.log(pcNum);

function EvenOrOdd(risultato) {
    if (risultato % 2 === 0) {
        return console.log('la somma è pari')
    } else {
        return console.log('la somma è dispari');
    }
};

let sum = pcNum + userNum;
console.log(sum);

let pariOdispari = EvenOrOdd(sum);
    console.log(pariOdispari);


