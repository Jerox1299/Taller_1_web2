// Calcular IMC 
function bmi(peso, altura) {

    var imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        return "Bajo de peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// Pruebas
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"
