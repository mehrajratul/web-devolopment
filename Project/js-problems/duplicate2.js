var hey = [82, 12, 44, 22, 12, 91, 82, 91, 11, 12];
var onlyName = [];
for(var i = 0; i < hey.length; i++){
    var element = hey[i];
    var index = onlyName.indexOf(element);
    if(index == -1){
        onlyName.push(element);
    }
}
console.log(onlyName);