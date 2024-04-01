// Piramide centrada
const size = 5;

for (let i = 1; i <= size; i++) {
    let row = '';
    let spaces = size - i;
    for (let j = 1; j <= spaces; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row); 
}
