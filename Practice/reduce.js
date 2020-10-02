friends = [
    {name: 'RAshed', money: 12},
    {name: 'tame',   money: 35},
    {name: 'jobada', money: 33},
    {name: 'sabbir', money: 33},
    {name: 'tograa', money: 33}
];



const final = friends.reduce((sum,friend) => sum + friends.money, 0)
console.log(final);