const convertToCelsius = function(gradof) {
celu = gradof - 32;
celd = celu * 5;
celt = celd / 9;
cel = celt.toFixed(1);

return +cel;
};

const convertToFahrenheit = function(gradoc) {
fahreuno = gradoc * 9;
fahredos = fahreuno / 5;
fahre = fahredos + 32;
fahreF = fahre.toFixed(1);

return +fahreF;
};







// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

