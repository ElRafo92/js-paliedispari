/* Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let parolaInput = prompt('inserisci una parola: ');
console.log(parolaInput);

let straight = [];
     for (let index = 0; index < parolaInput.length; index ++) {
        console.log(parolaInput[index]);
        straight.push(parolaInput[index]);
    }
    

let contr = [];
    for (let index = parolaInput.length - 1; index >= 0; index --) {
        console.log(parolaInput[index]);
        contr.push(parolaInput[index]);
    }
    
let bool = true;

for (i = 0; i < parolaInput.length; i ++) {

if (contr[i] == straight[i]) {

    bool = true;
}
else {
    bool = false;
}}

if (bool == true) {
    alert('palindromo');
} 
else {
    alert('cccc');
}

