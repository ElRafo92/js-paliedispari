/* Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let parolaInput = prompt('inserisci una parola: ');
console.log(parolaInput);


function palindromoDetector(element) {

let straight = [];
     for (let index = 0; index < element.length; index ++) {
        console.log(element[index]);
        straight.push(element[index]);
    };
    

let contr = [];
    for (let index = element.length - 1; index >= 0; index --) {
        console.log(element[index]);
        contr.push(element[index]);
    };
    
let bool = true;

for (i = 0; i < element.length; i ++) {

    if (contr[i] == straight[i]) {

    bool = true;
    }
    else {
    bool = false;
    }
};

if (bool == true) {
   return alert('palindromo');
} 
else {
   return alert('try another word');
};
}

console.log(palindromoDetector(parolaInput));