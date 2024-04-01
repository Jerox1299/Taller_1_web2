// Capitalizar cada palabra
function capitalizar(str) {
    if (str === '') {
        return '';
    }

    let palabras = str.split(' ');

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(' ');
}

// Pruebas
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""
