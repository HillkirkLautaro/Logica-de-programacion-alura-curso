// desafio 1: Día de la semana
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// desafio 2: Número positivo o negativo
let numero = prompt("Ingresa un número:");
if (numero >= 0) {
    alert("El número es positivo.");
} else {
    alert("El número es negativo.");
}

// desafio 3: Sistema de puntuación
let puntuacion = prompt("Ingresa tu puntuación en el juego:");
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}

// desafio 4: Mensaje de saldo con template string
let saldo = prompt("Ingresa el saldo de tu cuenta:");
alert(`Tu saldo actual es de $${saldo}`);

// desafio 5: Bienvenida con nombre
let nombreUsuario = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido/a, ${nombreUsuario}!`);