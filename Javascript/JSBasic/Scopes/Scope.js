/*
js Variable is store the data using below sclope

var - (Fuctional Scope)
let - (block scope)
const - (Block Scope)

1) Functional scope
2) Block Scole

*/

var number = 10;

function Test(){
    var number2 = 20;
    console.log(number);
}
// console.log(number2);

Test()

let mark = 50;
{
    let mark2 = 100;
    console.log(mark);
}

// Difference Between Let and Const
// Let - change the Value After created Variable

let a = 10;
a = 20;
console.log(a);

// conts - do not change values after create variable

const b = 40;
b = 50;
console.log(b);



