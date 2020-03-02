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

function decode(str) {
    let words = [];
    for (let i = 0; i < str.length / 10; i++) {
        let encodeWord = str.substr(i * 10, 10);
        if (encodeWord === '**********') {
            words.push(' ');
            continue;
        }
        let morseWord = '';
        for (let j = 0; j < 5; j++) {
            switch (encodeWord.substr(j * 2, 2)) {
                case '10': morseWord += '.'; break;
                case '11': morseWord += '-'; break;
                case '00': morseWord += '';  break;
            }
        }
        words.push(MORSE_TABLE[morseWord]);
    }
    return words.join('');
}

module.exports = {
    decode
};