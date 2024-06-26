//Numero de likes
function likes(numero) {
    if (numero < 1000) {
        return numero.toString(); 
    } else if (numero < 1000000) {
        return (numero / 1000).toFixed(0) + "K"; 
    } else {
        return (numero / 1000000).toFixed(0) + "M"; 
    }
}

// Pruebas
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"
