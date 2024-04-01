function numerosAPalabras(numeros) {
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    
    const palabrasConvertidas = numeros.map(numero => palabras[numero]);

    return palabrasConvertidas;
}

// Pruebas
console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]
