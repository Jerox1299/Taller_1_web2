// diamante
const size = 5;

for (let i = 1; i <= size; i++) {
    let row = '';
    let stars = 2 * i - 1;
    
    let spaces = size - i;
    
    for (let j = 1; j <= spaces; j++) {
        row += " ";
    }
    
    for (let k = 1; k <= stars; k++) {
        row += "*";
    }
    console.log(row); 
}

for (let i = size - 1; i >= 1; i--) {
    let row = '';
    let stars = 2 * i - 1;
    let spaces = size - i;
    for (let j = 1; j <= spaces; j++) {
        row += " ";
    }
    for (let k = 1; k <= stars; k++) {
        row += "*";
    }
    console.log(row); 
}
