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

        var number = [
                { input: 'M', output: 1000 },
                { input: 'D', output: 500 },
                { input: 'CD', output: 400 },
                { input: 'C', output: 100 },
                { input: 'L', output: 50 },
                { input: 'XL', output: 40 },
                { input: 'X', output: 10 },
                { input: 'V', output: 5 },
                { input: 'IV', output: 4 },
                { input: 'I', output: 1 }
            ]
            /*
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

            ] * /
            /* export const ArabicNumbers = (inputNumeral) => {

                var number = [
                    { input: 'M', output: 1000 },
                    { input: 'D', output: 500 },
                    { input: 'CD', output: 400 },
                    { input: 'C', output: 100 },
                    { input: 'L', output: 50 },
                    { input: 'XL', output: 40 },
                    { input: 'X', output: 10 },
                    { input: 'V', output: 5 },
                    { input: 'IV', output: 4 },
                    { input: 'I', output: 1 }
                ]

                //Setting outputNumber to blank string to define.
                var outputNumeral;
                //For each object in the numeral array.
                numeral.forEach(function(object) {
                    //While the inputNumber is >= the input
                    while (inputNumeral >= object.input) {
                        /*The outputNumber is adding the output 
                        roman numeral to itself.
                        outputNumeral += object.output;
                        The inputNumber subtracts the object input from itself.
                        inputNumeral -= object.input;
                    }
                });
                return outputNumeral;

            } */