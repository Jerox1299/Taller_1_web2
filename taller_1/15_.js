//Transcribir Cadena ADN
function transcribir(cadenaADN) {
    let complementoARN = '';
    for (let i = 0; i < cadenaADN.length; i++) {
        switch (cadenaADN[i]) {
            case 'G':
                complementoARN += 'C';
                break;
            case 'C':
                complementoARN += 'G';
                break;
            case 'T':
                complementoARN += 'A';
                break;
            case 'A':
                complementoARN += 'U';
                break;
            default:
                break;
        }
    }
    return complementoARN;
}

// Pruebas
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
