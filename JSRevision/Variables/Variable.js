/*
// Creating a Variable
var a = 10;
console.log(a)
    VAriable Using var Scope

    var - Global Scope
*/

var a = 10;
console.log(a);
// Try to Access Inside a Block
{
    console.log(a);
    var b = 20;
}

console.log(b);

/*
    let Scope - Block Scope

*/

let x = 50;
console.log(x);

// Try to Access Inside Block

{
    console.log(x);
    let y = 100
    console.log(y);
    //Change the Value
    y = 50
    console.log(y);
    
    
}
// console.log(y); // Throw Error y is not defined

/*
    const Scope

    1] Block Variable
    2] Do not Change Value
*/
console.log("Const Scope");

const num1 = 20;
console.log(num1);

{
    console.log(num1);
    const num2 = 50
    console.log(num2);
    // Try to Change Value
    num2 = 100 //nvalid assignment to const 'num2'
}

// console.log(num2); // Error [num2 is not defined]





