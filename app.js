// Selección del rango
let rango = parseInt(prompt("Selecciona el rango:\n1 - de 1 a 10\n2 - de 1 a 100\n3 - de 1 a 1000"));
let limiteSuperior;

if (rango === 1) {
    limiteSuperior = 10;
} else if (rango === 2) {
    limiteSuperior = 100;
} else if (rango === 3) {
    limiteSuperior = 1000;
} else {
    alert("Selección inválida. Se usará el rango por defecto de 1 a 10.");
    limiteSuperior = 10;
}

// Variables del juego
let numeroSecreto = Math.floor(Math.random() * limiteSuperior) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Adivina el número secreto entre 1 y ${limiteSuperior}:`));

    console.log(`Intento ${intentos}: el usuario ingresó ${numeroUsuario}`);

    if (numeroUsuario === numeroSecreto) {
        alert(`¡Acertaste! El número era ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        break;
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }
    }

    intentos++;

    if (intentos > maximosIntentos) {
        alert(`Agotaste los ${maximosIntentos} intentos. El número era ${numeroSecreto}.`);
        break;
    }
}

// app.js - Juego de Adivinanza de Números
// Este script permite al usuario adivinar un número secreto dentro de un rango seleccionado.