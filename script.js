console.log('JS OK');

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
1. Prendere l'elemento dal DOM;
2. Preparare variabile del prezzo per km;
3. Chiedere all'utente il numero di km che vuole percorrere;
4. Chiedere all'utente l'età del passeggero;
5. Calcolare prezzo totale del viaggio;
6. Applicare sconto 20% per minorenni (< 18 anni);
7. Applicare sconto 40% per over 65 (>= 65 anni);
8. Calcolare prezzo finale in forma umana;
*/

// 1. Prendere l'elemento dal DOM:
const finalPrice = document.getElementById('price');
// console.log(finalPrice);

// 2. Preparare variabile del prezzo per km:
const priceKm = 0.21;
const discountMinors = 20;
const discountOver = 40;

// 3. Chiedere all'utente il numero di km che vuole percorrere:
const nKm = parseInt(prompt('Digita il numero di chilometri da percorrere', '200'));
// console.log(nKm);

// 4. Chiedere all'utente l'età del passeggero:
const userAge = parseInt(prompt('Quanti anni hai?', '20'));
// console.log(userAge);

// 5. Calcolare prezzo totale del viaggio:
let ticketPrice = nKm * priceKm;
// console.log(ticketPrice);

// 6. Applicare sconto 20% per minorenni (< 18 anni):
if (userAge < 18){
    ticketPrice = ticketPrice - discountMinors ;
}
else{
    ticketPrice = nKm * priceKm; 
}
console.log(ticketPrice);
