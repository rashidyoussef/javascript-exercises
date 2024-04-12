const add = function(a, b) {
	suma = a + b;
  return suma
};

const subtract = function(a, b) {
	resta = a - b;
  return resta
};

const sum = function(summ) {
	const sumatoria = summ.reduce((total, current) => total + current,0)
  return sumatoria
};

const multiply = function(multiplica) {
const multiplicacion = multiplica.reduce((total, current) => total * current,1)
return multiplicacion
};

const power = function(a, b) {
  let A = 1;
  for (let i = 0; i < b; i++){
    A *= a;
  }
  return A;
};

const factorial = function(a) {
  let A = 1;
	for (let i = 1; i < a; i++){
    A *= (i+1);
  }
  return A;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

