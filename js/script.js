/*
Consegna:
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

/*
- Creo la lista di email consentite
- Chiedo l'email all'utente

- Ripeti tante volte quante la lunghezza della lista

  °? SE il valore dell'email inserita è uguale a uno dei valori della lista
    - cambio il valore della variabile emailTrovata in 1
  °? SE il valore della variabile emailTrovata è 0
    - Stampo "Non puoi entrare"
  : ALTRIMENTI
    - Stampo "Puoi entrare"
*/



let allowList = ["pippo@gmail.com", "pluto@gmail.com", "franco@gmail.com", "martina@gmail.com", "lucrezia@gmail.com", "giovanni@gmail.com"];
console.log(allowList);

let userMailEl = document.getElementById("userMail");
let checkMailEl = document.getElementById("checkMail");
let checkResultEl = document.getElementById("checkResult");

checkMailEl.addEventListener('click', function(){

  let emailTrovata = 0;

  for (let i = 0; i < allowList.length; i++) {
    

    if (userMailEl.value == allowList[i]) {

      emailTrovata = 1;

    }
  }

  let newElement = document.createElement('div');
  checkResultEl.append(newElement);

  if (emailTrovata == 0) {
   
    newElement.innerText = "Non puoi entrare :(";
    console.log(userMailEl.value);

  } else {
   
    newElement.innerText = "Puoi entrare :)";
    console.log(userMailEl.value);

  }
})




/*
- Genero un numero casuale per l'utente
- Genero un numero casuale per il computer
  °? SE il numero dell'utente è > di quello del computer
    - scrivo "hai vinto"
  :? ALTRIMENTI SE il numero dell'utente è < di quello del computer 
    - scrivo "hai perso"
  :? ALTRIMENTI SE il numero dell'utente è = a quello del computer
    - scrivo "hai pareggiato"
*/


let rollDiceEl = document.getElementById("rollDice");


rollDiceEl.addEventListener('click', function(){

  let userNumber = Math.floor(Math.random() * 6 + 1);
  let computerNumber = Math.floor(Math.random() * 6 + 1);

  let userNumberEl = document.getElementById("userNumber");
  let computerNumberEl = document.getElementById("computerNumber");
  let resultEl = document.getElementById("result");


  console.log("user number: " + userNumber);
  console.log("computer number: " + computerNumber);

  if (userNumber > computerNumber) {
  
    console.log("Hai vinto");
  
    userNumberEl.innerText = "Il tuo numero è " + userNumber;
    computerNumberEl.innerText = "Il numero del computer è " + computerNumber;
    resultEl.innerHTML = "<strong>Hai vinto</strong>";
  
  } else if (userNumber < computerNumber) {
  
    console.log("Hai perso");
  
    userNumberEl.innerText = "Il tuo numero è " + userNumber;
    computerNumberEl.innerText = "Il numero del computer è " + computerNumber;
    resultEl.innerHTML = "<strong>Hai perso</strong>";
  
  } else if (userNumber == computerNumber) {
  
    console.log("Hai pareggiato")
  
    userNumberEl.innerText = "Il tuo numero è " + userNumber;
    computerNumberEl.innerText = "Il numero del computer è " + computerNumber;
    resultEl.innerHTML = "<strong>Hai pareggiato</strong>";
  }

})
