const reverseString = function(string) {
let letras = string.split('');
let palabra = letras.reverse();
let palabraR = palabra.join('');
return palabraR;
};

// Do not edit below this line
module.exports = reverseString;

