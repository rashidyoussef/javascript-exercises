const sumAll = function(bot,top) {
      
    if (bot > top) {
num1 = top;
num2 = bot;
    }

    else {
num2 = top;
num1 = bot;
    }
    let suma = 0;

for (i = num1; i <= num2; i++){
suma += (i);
}

return suma;
};

// Do not edit below this line
module.exports = sumAll;

