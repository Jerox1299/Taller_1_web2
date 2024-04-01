// Capitalizar


function capitalizar(str) {
    if (str === '') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Pruebas
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""
