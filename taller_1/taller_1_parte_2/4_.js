// Cuadrado hueco

const size = 5;

for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            row += "*"; 
        } else if (i > 0 && i < size - 1 && (j > 0 && j < size - 1)) {
            row += " "; 
        } else {
            row += "*"; 
        }
    }
    console.log(row); 
}
