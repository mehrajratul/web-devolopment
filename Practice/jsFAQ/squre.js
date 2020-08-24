function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}

var result = evenify(3);
var squre = result * result;
console.log('square', squre);