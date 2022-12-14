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
9. Stampare in DOM;
*/


// 1. Prendere l'elemento dal DOM:
const finalPrice = document.getElementById('price');
const km = document.getElementById('km');
const age = document.getElementById('age');
// 2. Preparare variabile del prezzo per km:
const priceKm = 0.21;

// 3. Chiedere all'utente il numero di km che vuole percorrere:
const nKm = parseInt(prompt('Digita il numero di chilometri da percorrere', '200'));

// 4. Chiedere all'utente l'età del passeggero:
const userAge = parseInt(prompt('Quanti anni hai?', '20'));

// 5. Calcolare prezzo totale del viaggio:
let ticketPrice = nKm * priceKm;

// CONTROLLO
let isValid= true;


if (isNaN (userAge && nKm)){
    isValid=false;
    alert('Inserisci valore numerico')
}

if (isValid){
    // 6. Applicare sconto 20% per minorenni (< 18 anni):
    // 7. Applicare sconto 40% per over 65 (>= 65 anni):
    if (userAge < 18){
        const sconto = ticketPrice * 20 / 100;
        ticketPrice = ticketPrice - sconto;
    }
    else if (userAge >= 65){
        const sconto = ticketPrice * 40 / 100;
        ticketPrice = ticketPrice - sconto;
    }
    // 9. Stampa in DOM:
    finalPrice.innerText = ticketPrice.toFixed(2) + '\u20AC';
    km.innerText = nKm + 'km';
    age.innerText = userAge;
}



