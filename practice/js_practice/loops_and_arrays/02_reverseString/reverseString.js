const reverseString = function(string) {

    let c= string.length;
    let b=0;
    let reverse="";
    while(b<c){
        reverse+=string[c-b-1]
        b+=1
    }
    return reverse

};

// Do not edit below this line
module.exports = reverseString;
