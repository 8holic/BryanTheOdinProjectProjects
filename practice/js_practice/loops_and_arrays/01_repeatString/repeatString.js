const repeatString = function(string,number) {
    if (number<0) return "ERROR";
    let returnstring="";
    let c=0;
    while (c<number){
        returnstring+=string;
        c+=1;
    }

    return returnstring
};

// Do not edit below this line
module.exports = repeatString;
