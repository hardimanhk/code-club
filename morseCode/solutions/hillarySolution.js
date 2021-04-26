const toMorseCode = (phrase) => {
    const morseCodeChart = {
        a: '*-',
        b: '-***',
        c: '-*-*',
        d: '-**',
        e: '*',
        f: '**-*',
        g: '--*',
        h: '****',
        i: '**',
        j: '*---',
        k: '-*-',
        l: '*-**',
        m: '--',
        n: '-*',
        o: '---',
        p: '*--*',
        q: '--*-',
        r: '*-*',
        s: '***',
        t: '-',
        u: '**-',
        v: '***-',
        w: '*--',
        x: '-**-',
        y: '-*--',
        z: '--**',
        1: '*----',
        2: '**---',
        3: '***--',
        4: '****-',
        5: '*****',
        6: '-****',
        7: '--***',
        8: '---**',
        9: '----*',
        0: '-----',
    };
    const result = phrase === '' ? '' : phrase.split(' ').map(word => {
        return [...word].map(character => morseCodeChart[character.toLowerCase()] ? morseCodeChart[character.toLowerCase()] : 'INVALID').join(' ');
    }).filter(word => word !== '');
    const isInvalid = result === '' ? [] : result.filter(word => word.includes('INVALID'));
    return isInvalid.length > 0 ? ['Please enter a valid input.'] : result;
}

module.exports = toMorseCode;

