
//Encontrar número maximo
function max(arreglo) {
    if (arreglo.length === 0) {
        return undefined;
    }

    let maximo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }

    return maximo;
}

// Pruebas
console.log(max([3, 9, 6]));
