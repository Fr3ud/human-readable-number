module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const convertDigits = (number) => {
        let result;

        switch (number) {
            case 1:
                result = 'one';
                break;
            case 2:
                result = 'two';
                break;
            case 3:
                result = 'three';
                break;
            case 4:
                result = 'four';
                break;
            case 5:
                result = 'five';
                break;
            case 6:
                result = 'six';
                break;
            case 7:
                result = 'seven';
                break;
            case 8:
                result = 'eight';
                break;
            case 9:
                result = 'nine';
                break;
            default:
                result = '';
        }

        return result;
    };

    const convertTensHelper = (number) => {
        let result;

        switch (number) {
            case 10:
                result = 'ten';
                break;
            case 11:
                result = 'eleven';
                break;
            case 12:
                result = 'twelve';
                break;
            case 13:
                result = 'thirteen';
                break;
            case 14:
                result = 'fourteen';
                break;
            case 15:
                result = 'fifteen';
                break;
            case 16:
                result = 'sixteen';
                break;
            case 17:
                result = 'seventeen';
                break;
            case 18:
                result = 'eighteen';
                break;
            case 19:
                result = 'nineteen';
                break;
            default:
                result = '';
        }

        return result;
    };

    const convertTens = (number) => {
        let result;
        let convertedTens;
        const tens = Math.floor(number / 10);
        const digit = convertDigits(number % 10);

        switch (tens) {
            case 1:
                convertedTens = convertTensHelper(number);
                break;
            case 2:
                convertedTens = 'twenty';
                break;
            case 3:
                convertedTens = 'thirty';
                break;
            case 4:
                convertedTens = 'forty';
                break;
            case 5:
                convertedTens = 'fifty';
                break;
            case 6:
                convertedTens = 'sixty';
                break;
            case 7:
                convertedTens = 'seventy';
                break;
            case 8:
                convertedTens = 'eighty';
                break;
            case 9:
                convertedTens = 'ninety';
                break;
            default:
                convertedTens = '';
        }

        if (tens === 1) return convertedTens;

        if (tens && digit) {
            result = `${convertedTens} ${digit}`;
        } else {
            result = convertedTens + digit;
        }

        return result;
    };

    const convertHundreds = (number) => {
        let result = '';

        if (number) {
            result =  `${convertDigits(number)} hundred`;
        }

        return result;
    };


    const hundreds = Math.floor(number / 100);
    const tens = number % 100;
    const convertedHundreds = convertHundreds(hundreds);
    const convertedTens = convertTens(tens);

    if (convertedHundreds && convertedTens) {
        return `${convertedHundreds} ${convertedTens}`;
    }

    return convertedHundreds + convertedTens;
};
