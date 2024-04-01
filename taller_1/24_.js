function empiezanConA(arreglo) {
    let palabrasConA = arreglo.filter(palabra => palabra.toLowerCase().startsWith('a'));
    return palabrasConA;
}

// Pruebas
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []
