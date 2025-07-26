// Desafío 1: Mensaje de bienvenida
console.log("¡Bienvenido/a a la práctica de JavaScript!");

// Desafío 2: Saludo con nombre en consola
let nombre = "Lautaro";
console.log("¡Hola, " + nombre + "!");

// Desafío 3: Saludo con nombre en alert
alert("¡Hola, " + nombre + "!");

// Desafío 4: Preguntar lenguaje favorito con prompt
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje favorito es: " + lenguajeFavorito);

// Desafío 5: Suma de dos valores
let valor1 = 10;
let valor2 = 5;
let resultadoSuma = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultadoSuma + ".");

// Desafío 6: Resta de dos valores
let resultadoResta = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultadoResta + ".");

// Desafío 7: Verificar si es mayor o menor de edad
let edad = parseInt(prompt("¿Cuántos años tenés?"));
if (edad >= 18) {
  console.log("Sos mayor de edad.");
} else {
  console.log("Sos menor de edad.");
}

// Desafío 8: Verificar si número es positivo, negativo o cero
let numero = parseInt(prompt("Ingresá un número:"));
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// Desafío 9: Bucle while del 1 al 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Desafío 10: Verificar si una nota aprueba
let nota = 7;
if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// Desafío 11: Math.random número aleatorio (decimal)
let aleatorioDecimal = Math.random();
console.log("Número aleatorio (decimal): " + aleatorioDecimal);

// Desafío 12: Math.random número entre 1 y 10
let aleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10: " + aleatorio1a10);

// Desafío 13: Math.random número entre 1 y 1000
let aleatorio1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entre 1 y 1000: " + aleatorio1a1000);
