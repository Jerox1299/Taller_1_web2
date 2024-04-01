// 8. SumarRango

function sumarRango(numInicial, numFinal) {
    let suma = 0;
    for (let i = numInicial; i <= numFinal; i++) {
        suma += i;
    }
    return suma;
}

// Pruebas
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 5
