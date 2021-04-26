let errorOccurred = false;

const toMorseCode = (phrase) => {
    let translatedPhrase = [];
    let translatedWord = '';
    const errorMessage = "Please enter a valid input.";

    if (phrase === "") {
        return phrase
    }
    let trimmedPhrase = phrase.trim().toLowerCase();
    let trimmedPhraseSpreadOut = [...trimmedPhrase];
    for (char of trimmedPhraseSpreadOut) {
        charCoded = dict.get(char);
        errorOccurred = checkForError(charCoded);
        if (errorOccurred) {
            translatedPhrase = [];
            translatedPhrase.push(errorMessage);
            console.log('error: ', errorOccurred, translatedPhrase)
            return translatedPhrase;
        }
        if (charCoded === ' ' || trimmedPhraseSpreadOut.length === trimmedPhraseSpreadOut.indexOf(char)) {
            if (translatedWord.length > 0) {
                translatedPhrase.push(translatedWord.slice(0, -1));
                translatedWord = '';
            }
        } else {

            translatedWord = translatedWord.concat(charCoded + ' ');
        }
    }
    if (translatedWord.length > 0) {
        translatedPhrase.push(translatedWord.slice(0, -1));
    }
    if (!errorOccurred) {
        return translatedPhrase
    }
}

const checkForError = (char) => {
    if (char === undefined && !errorOccurred) {
        return true;
    } else {
        return false
    }
}

let dict = new Map([
    [' ', ' '],
    ['a', '*-'],
    ['b', '-***'],
    ['c', '-*-*'],
    ['d', '-**'],
    ['e', '*'],
    ['f', '**-*'],
    ['g', '--*'],
    ['h', '****'],
    ['i', '**'],
    ['j', '*---'],
    ['k', '-*-'],
    ['l', '*-**'],
    ['m', '--'],
    ['n', '-*'],
    ['o', '---'],
    ['p', '*--*'],
    ['q', '--*-'],
    ['r', '*-*'],
    ['s', '***'],
    ['t', '-'],
    ['u', '**-'],
    ['v', '***-'],
    ['w', '*--'],
    ['x', '-**-'],
    ['y', '-*--'],
    ['z', '--**'],
    ['1', '*----'],
    ['2', '**---'],
    ['3', '***--'],
    ['4', '****-'],
    ['5', '*****'],
    ['6', '-****'],
    ['7', '--***'],
    ['8', '---**'],
    ['9', '----*'],
    ['0', '-----']
]);


module.exports = toMorseCode;
