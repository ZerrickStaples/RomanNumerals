export const RomanNumeral = (inputNumber) => {

    /* var obj = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
    }

    for (var key in obj) {
        if (i >= 1, i <= 3, i++) {
            return key;
        }
    }
    */

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
    }
}