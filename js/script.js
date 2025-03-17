let distance = prompt("quanti chilometri devi percorrere?");
let age = prompt("quanti anni hai?");
let price = distance * 0.21;

if (age > 65) {
    price = price * 0.6;
}

if (age < 18) {
    price = price * 0.8;
}

price = price.toFixed(2);
console.log("il prezzo totale è di " + price + "€");
