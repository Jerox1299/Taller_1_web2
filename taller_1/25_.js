function terminanConS(arreglo) {
    let palabrasConS = arreglo.filter(palabra => palabra.toLowerCase().endsWith('s'));
    return palabrasConS;
}

// Pruebas
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []
