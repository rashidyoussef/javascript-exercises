const sumAll = function(bot,top) {
let suma = 0;
let num1 = 0;
let num2 = 0;

if (bot > top) {
num1 = top;
num2 = bot;
}

else {
num2 = top;
num1 = bot;
}

if (num1 < 0 || num2 < 0){
    suma = 'ERROR';
} 

else if (typeof(num1) != 'number' || typeof(num2) != 'number') {
    suma = 'ERROR';
}

else {
for (i = num1; i <= num2; i++){
suma += (i);
}
}
return suma;
};

// Do not edit below this line
module.exports = sumAll;

