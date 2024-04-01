function pares(arreglo) {
    let paresArray = arreglo.filter(numero => numero % 2 === 0);
    return paresArray;
}

// Pruebas
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []
