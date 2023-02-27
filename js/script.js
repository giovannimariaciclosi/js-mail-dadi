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
  °? SE il valore dell'email inserita è uguale a uno dei valori della lista
    - scrivo "puoi entrare"
  :? ALTRIMENTI 
    - scrivo "non puoi entrare"
*/


let allowList = ["pippo@gmail.com", "pluto@gmail.com", "franco@gmail.com", "martina@gmail.com", "lucrezia@gmail.com", "giovanni@gmail.com"];
console.log(allowList);

let userMailEl = document.getElementById("userMail");
let checkMailEl = document.getElementById("checkMail");
let checkResultEl = document.getElementById("checkResult");

checkMailEl.addEventListener('click', function(){
    console.log(userMailEl.value);
})

for (let i = 0; 1 < allowList.length; i++) {
  
  if (userMailEl.value == allowList[i]) {
    console.log("puoi entrare");
  } else {
    console.log("non puoi entrare");
  }
}