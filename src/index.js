const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let result = [];

    for (let i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }
    arr.forEach(el => (el=='**********') ? arr2.push('*') : arr2.push(el.match(/(((10)|(11))+)/)[0]))
    arr = [];
    arr2.forEach(el => {
        arr.push(el.replace(/(10)/g, '.').replace(/(11)/g, '-'));
    })
    arr.forEach(el => typeof(MORSE_TABLE[el]) == 'undefined') ? result.push(' ') : result.push(MORSE_TABLE[el]);
    return result.join('');
    }

module.exports = {
    decode
}