function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age);
    task();
}

function washHand(){
    console.log('wash hand with soap')
}

function TakeShower(){
    console.log('take a shower')
}

function ScrollFb() {
    console.log('keep on scrolling facebook')
}

explain_callback('sogir uddin', 17, washHand);
explain_callback('jogir uddin', 12, TakeShower);
explain_callback('tahir sha', 23, ScrollFb);