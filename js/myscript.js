// § creiamo una pagina index.html !
// § creiamo un file javascript myscript.js !
// § linkiamo il nostro file js nell'html al termine del body !

// § decidiamo se la variabile dovrà essere modificata oppure no
// § SE VOLESSI MODIFICARLA IN FUTURO:
// §    - Allora utilizzo let per dichiararla
// § ALTRIMENTI
// §    - Utilizzo const per dichiararla

// § dichiarare la variabile nel modo scelto, per inserire il nome che sarà digitato
// § usiamo un prompt() per chiedere all'utente il suo nome
// § -  assegnamo alla variabile il valore del prompt

// § invochiamo la funzione console.log(), inserendo come argomento:
// § - la variabile popolata dall'utente

// § inserisco la mia variabile come contenuto nell'elemento che ha come id "answer-container"


// // const userName = prompt('Insert your name');
// console.log(2);

// // document.getElementById('answer-container').innerHTML = 'Your name is: ' + userName;

// Chiedo l'età all'utente(ssa) e gli dico l'anno in cui è natoa

// ? - creazione file index.html
// ? - creazione file myscript.js
// ? - inserisco il riferimento allo script creato al termine del body


// ? - dichiaro la variabile che ospiterà il prompt dell'utente (CONST)
    // § - dilemma let&const per la questa variabile => CONST => userAge
// ? - chiedere con il prompt all'utente(ssa) quanti anni abbia e inserirla come valore della varibile appena creata e lo trasformiamo direttamente in un numero intero attraverso la funzione parseInt()


// ? - creo un'altra variabile che contenga l'anno attuale
     // § - dilemma let&const per la questa variabile => CONST => currentYear

// ? - creo un'altra variabile che contenga l'anno di nascita
     // § - dilemma let&const per la questa variabile => LET => yearOfBirth

// ? - faccio una sottrazione tra l'anno attuale e l'età inserita dall'utente (userAge) e la assegno alla variabile appena creata, chiamata yearOfBirth

// METODO A
// ? - alert(yearIfBirth)

// METODO B
// ? - creare un elemento nell'html con un id dato
// ? - recuperare l'elemento scelto nell'html attraverso il metodo document.getElementById(#id)
// ? - sovrascriverlo con il valore di yearOfBirth
// METODO Console
// ? - console.log(yearOfBirth)


// salvo l'età dell'utente in una variabile sotto forma di intero
const userAge = parseInt(prompt('Insert your age'));

const currentYear = parseInt(prompt('Insert current year'));

const yearOfBirth = currentYear - userAge;

// alert(yearOfBirth)

document.getElementById('birth-year-content').innerHTML = yearOfBirth;

console.log(yearOfBirth);

