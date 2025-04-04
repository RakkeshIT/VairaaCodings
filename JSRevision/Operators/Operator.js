
/*
    Arithmetic - +, -, *, **, /, %
*/

let a = 10;
let b = 2;

console.log("Addition : ", a + b);
console.log("Sub : ", a - b);
console.log("Mul : ", a * b);
console.log("Expo : ", a ** b);
console.log("Div : ", a / b);
console.log("Modulo : ", a % b);


/*
    Assignment Operator

    =, +=, -+, *=, **=, /= %=

*/
console.log("Assignment Operator 😎");

let x = 30;
console.log("Assignment : " , x);

x += 5;
console.log("Add & Assign : ", x);

x -=5;
console.log("Sub & Assign : ", x);

x *= 2;
console.log("Mul & Assign : ", x);

x **= 2;
console.log("Expo & Assign : ", x);

x /= 6;

console.log("Div & Assign : ", x);

x %= 5;
console.log("Modulo & Assign : ", x);


/*
    Comparision Operator - > Return a Boolean Output
    == [Equal]
    ===[Strictly Equal]
    != [Not Equal]
    !== [Strictly not Equal]
    >
    <
    >=
    <=
*/
console.log("Comparision Operator 💢");


let P1 = 20
let P2 = '20'

console.log("isEqual = ", P1 == P2);
console.log("Strictly Equal = ", P1 === P2);

console.log('isNotEqual = ', P1 != P2);
console.log('StrictlyNotEqual = ', P1 !== P2);

let Num1 = 10;
let Num2 = 15;

console.log("Less Then : ", Num1 < Num2);
console.log("Less Then : ", Num1 <= Num2);

console.log("Greater Then : ", Num1 > Num2);
console.log("Greater Then : ", Num1 >= Num2);



/*
    Logical
    && - AND
    || - OR
    !  - NOT

AND[&&]
---------------
T T - T
T F - F
F T - F
F F - F

OR[||]
---------------
T T - T
T F - T
F T - T
F F - G

NOT[!]
---------------

T - F
F - T

XOR [^]
------------------

T T - F
T F - T
F T - T
F F - F
*/

console.log("Logical Operator ✔");

let isOpen = true;
let isClose = false;

console.log("Logical AND : ", isOpen && isClose);
console.log("Logical OR :", isOpen || isClose);
console.log("Logical Not : ", !isOpen);

/*
    Butwise Operators

    & [and]
    | [or]
    ~ [not]
    ^ [xor]
*/

let num1 = 5
let num2 = 6
console.log(num1 & num2);
console.log(num1 | num2);
console.log(num1 ^ num2);
console.log(~num1);



let one = 10
let two = 10

console.log(one == two);
console.log(one === two);
console.log(one != two);
console.log(one !== two);
console.log(one < two);
console.log(one <= two);
console.log(one > two);
console.log(one >= two);


