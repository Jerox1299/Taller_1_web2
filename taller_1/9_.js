//Numero de letras A

function numeroDeAes(str) {
    // Inicializar contador de "a"
    let contadorA = 0;

    // Iterar sobre cada carácter del string
    for (let i = 0; i < str.length; i++) {
        // Si el carácter actual es "a", incrementar el contador
        if (str[i] === 'a') {
            contadorA++;
        }
    }

    // Retornar el número de "a" encontradas
    return contadorA;
}

// Pruebas
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0
