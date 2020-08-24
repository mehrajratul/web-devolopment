function reverseString(str){
    var reverse = "";
    for(var i = 0; i< str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}




var statement = "hi bahi aleien brother";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("ki khawa hay");
console.log(foodVlog);