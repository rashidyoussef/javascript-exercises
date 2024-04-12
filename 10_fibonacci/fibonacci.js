const fibonacci = function(times) {
if (+times === 0){
    return 0
}
else if (+times === 1){
    return 1
}

else if (+times < 0){
    return 'OOPS';
}
let prev = 1
let current = 1
let next = 0
for (let i = 2; i < times; i++){
next = prev + current;
prev = current;
current = next;
}
return current;
};

// Do not edit below this line
module.exports = fibonacci;
