export const RomanNumeral = (inputNumber) => {

    var outputNumber;

    if (inputNumber === 1) {
        outputNumber = 'I';
    } else if (inputNumber === 2) {
        outputNumber = 'II';
    } else if (inputNumber === 3) {
        outputNumber = 'III';
    } else if (inputNumber === 4) {
        outputNumber = 'IV';
    } else if (inputNumber === 5) {
        outputNumber = 'V';
    } else if (inputNumber === 10) {
        outputNumber = 'X';
    } else if (inputNumber === 50) {
        outputNumber = 'L';
    } else if (inputNumber === 100) {
        outputNumber = 'C';
    } else if (inputNumber === 500) {
        outputNumber = 'D';
    } else if (inputNumber === 1000) {
        outputNumber = 'M';
    }

    return outputNumber;
}