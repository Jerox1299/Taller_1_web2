// Piramide invertida
const size = 5;

for (let i = size; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row); 
}
