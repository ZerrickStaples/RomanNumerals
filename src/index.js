export const RomanNumeral = (inputNumber) => {
    if (inputNumber === 1) {
        return 'I';
    } else if (inputNumber === 2) {
        return 'II';
    } else if (inputNumber === 3) {
        return 'III';
    } else if (inputNumber === 4) {
        return 'IV';
    } else if (inputNumber === 5) {
        return 'V';
    } else if (inputNumber === 10) {
        return 'X';
    } else if (inputNumber === 50) {
        return 'L';
    } else if (inputNumber === 100) {
        return 'C';
    } else if (inputNumber === 500) {
        return 'D';
    } else if (inputNumber === 1000) {
        return 'M';
    }
}