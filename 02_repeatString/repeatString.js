
const repeatString = function(word,times) {
    let resul = "";
    if (times < 0){
        resul = "ERROR";
    }
    else
    for (i = 0; i < times; i++){
        resul += word;
    }
    return resul;
};

// Do not edit below this line
module.exports = repeatString;


