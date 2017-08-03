export const RomanNumeral = (inputNumber) => {

    //Created array of objects. Key: Value relationship
    var numeral = [
        { input: 1000, output: "M" },
        { input: 900, output: "DM" },
        { input: 500, output: "D" },
        { input: 400, output: "CD" },
        { input: 100, output: "C" },
        { input: 100, output: "LC" },
        { input: 50, output: "L" },
        { input: 40, output: "XL" },
        { input: 10, output: "X" },
        { input: 5, output: "V" },
        { input: 4, output: "IV" },
        { input: 1, output: "I" }
    ]

    //Setting outputNumber to blank string to define.
    var outputNumeral = "";
    //For each object in the numeral array.
    numeral.forEach(function(object) {
        //While the inputNumber is >= the input
        while (inputNumber >= object.input) {
            /*The outputNumber is adding the output 
            roman numeral to itself.*/
            outputNumeral += object.output;
            //The inputNumber subtracts the object input from itself.
            inputNumber -= object.input;
        }
    });
    return outputNumeral;
}