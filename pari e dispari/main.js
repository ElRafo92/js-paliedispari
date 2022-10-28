"use strict"

/* Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//console.log(userNum);

let userNum = Number(prompt('inserisci un numero da 1 a 5:'));

function randomNumber(num1, num2,) {
   return Math.floor(Math.random() * num2 + num1);
}

let pcNum = randomNumber(1, 5);
console.log(pcNum);

let sum = pcNum + userNum;
console.log(sum);