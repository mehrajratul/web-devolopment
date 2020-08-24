function evenify(num){
    if(num % 2 == 0){
        console.log(num, ': is even number')
    }
    else{
        console.log(num*2, ': is odd number')
    }
}



nums = [5, 12, 89, 45, 18, 8];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // if (num % 2 == 0) {
    //     console.log(num , ": is even number")
    // }
    // else{
    //     console.log(num*2, ": is odd number")
    // }
    evenify(num)
}


friendsAge = [13, 17, 19, 20, 18];

for (let i = 0; i < friendsAge.length; i++) {
    const age = friendsAge[i];
    // console.log(age);
    // if (age % 2 == 0) {
    //     console.log(age, ": is even number");
    // }
    // else{
    //     console.log(age, ": odd number");
    // }
    evenify(age);
}
