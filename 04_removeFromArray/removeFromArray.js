const removeFromArray = function(admitted,...refused) {
let arraychido = admitted.filter(admitidos => !refused.includes(admitidos));
return arraychido;
};

// Do not edit below this line
module.exports = removeFromArray;

