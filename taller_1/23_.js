function duplicar(arreglo) {
    let arregloDuplicado = arreglo.map(numero => numero * 2);
    return arregloDuplicado;
}

// Pruebas
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []
