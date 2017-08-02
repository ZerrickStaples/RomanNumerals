export const RomanNumeral = (inputNumber) => {

    //Created array of objects. Key: Value relationship
    var numeral = [
        { input: 1000, output: "M" },
        { input: 900, output: "DM" },
        { input: 500, output: "D" },
        { input: 400, output: "CD" },
        { input: 100, output: "C" },
        { input: 50, output: "L" },
        { input: 40, output: "XL" },
        { input: 10, output: "X" },
        { input: 5, output: "V" },
        { input: 4, output: "IV" },
        { input: 1, output: "I" }
    ]

    /*  var numeral = [
        { input: number, output: str },
        { input: 1, output: 'I' },
        { input: 2, output: 'II' },
        { input: 3, output: 'III' },
        { input: 4, output: 'IV' },
        { input: 5, output: 'V' },
        { input: 10, output: 'X' },
        { input: 50, output: 'L' },
        { input: 100, output: 'C' },
        { input: 500, output: 'D' },
        { input: 1000, output: 'M' }

        /*    var outputNumber;
    var inputNumeral;
    var outputNumeral;

    if (inputNumber === 1) {
        outputNumeral = 'I';
    } else if (inputNumber === 2) {
        outputNumeral = 'II';
    } else if (inputNumber === 3) {
        outputNumeral = 'III';
    } else if (inputNumber === 4) {
        outputNumeral = 'IV';
    } else if (inputNumber === 5) {
        outputNumeral = 'V';
    } else if (inputNumber === 9) {
        outputNumeral = 'IX';
    } else if (inputNumber === 10) {
        outputNumeral = 'X';
    } else if (inputNumber === 50) {
        outputNumeral = 'L';
    } else if (inputNumber === 100) {
        outputNumeral = 'C';
    } else if (inputNumber === 500) {
        outputNumeral = 'D';
    } else if (inputNumber === 1000) {
        outputNumeral = 'M';
    }
    return outputNumeral;

]*/
}