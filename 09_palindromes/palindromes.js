const palindromes = function (string) {
    function removeSymbols(string) {
        let remplazado = string.replace(/[^\w]/gi, '');
        let lremplazado = remplazado.toLowerCase();
        return lremplazado
      }
      let curado = removeSymbols(string);
      
    function reverseString(curado) {
        let reversa = curado.split('').reverse().join('');
        return reversa
      }

if (curado === reverseString(curado)){
    return true
}
else {
    return false
}
};

// Do not edit below this line
module.exports = palindromes;

