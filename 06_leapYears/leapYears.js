const leapYears = function(year) {
let esbisi = false;

if (year < 400 && year % 100 != 0){
    if (year % 4 == 0){
        esbisi = true;
    }
    else {
        esbisi = false;
    }
}

else if (year < 400 && year % 100 == 0){
    esbisi = false;
}

else if (year > 400 && year % 100 == 0){
    if (year % 400 == 0){
        esbisi = true;
    }
    else {
        esbisi = false;
    }
}
else {
    if (year % 4 == 0){
        esbisi = true;
    }
    else {
        esbisi = false;
    }
}
return esbisi;
}


;

// Do not edit below this line
module.exports = leapYears;

