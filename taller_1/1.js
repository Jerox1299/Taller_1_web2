//Contrasena Valida
//https://github.com/makeitrealcamp/ejercicios-javascript/blob/main/README.md
function contrasenaValida(password) {
    if (password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9") {
        return true;
    } else {
        return false;
    }
}

// Pruebas
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("")); // false
