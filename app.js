// desafio 1 - Imprimir números de 1 a 10
let contador = 1;

while (contador <= 10) {
  console.log(contador);
  contador++;
}

// desafio 2 - Imprimir números de 10 a 1
let contador1 = 10;

while (contador1 >= 0) {
  console.log(contador1);
  contador1--;
}

// desafio 3 - Contador de 0 a numeroUsuario

// Solicitar al usuario un número para la cuenta regresiva
let numero = parseInt(prompt("Ingrese un número para la cuenta regresiva:"));

// Validar que el valor ingresado sea un número válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor ingrese un número válido mayor o igual a 0");
} else {
    console.log(`Iniciando cuenta regresiva desde ${numero}:`);
    
    // Bucle while para la cuenta regresiva
    while (numero >= 0) {
        console.log(numero);
        numero--; // Decrementar el número en cada iteración
        
        // Pequeña pausa para mejor visualización (opcional)
        // Esto simula un retraso de 1 segundo entre cada número
        const fechaInicio = Date.now();
        while (Date.now() - fechaInicio < 1000) {
            // Esperar 1 segundo
        }
    }
    
    console.log("¡Cuenta regresiva finalizada!");
}

// desafio 4 - Contador de numeroUsuario a 0
// Solicitar al usuario un número para contar hacia arriba
let numeroUsuario = parseInt(prompt("Ingrese un número para contar hacia arriba:"));

// Validar que el valor ingresado sea un número válido
if (isNaN(numeroUsuario) || numeroUsuario < 0) {
    console.log("Por favor ingrese un número válido mayor o igual a 0");
}
else {
    console.log(`Iniciando cuenta ascendente desde 0 hasta ${numeroUsuario}:`);
    
    // Bucle while para contar hacia arriba
    let contadorAscendente = 0;
    while (contadorAscendente <= numeroUsuario) {
        console.log(contadorAscendente);
        contadorAscendente++; // Incrementar el contador en cada iteración
        
        // Pequeña pausa para mejor visualización (opcional)
        // Esto simula un retraso de 1 segundo entre cada número
        const fechaInicio = Date.now();
        while (Date.now() - fechaInicio < 1000) {
            // Esperar 1 segundo
        }
    }
    
    console.log("¡Cuenta ascendente finalizada!");
}
