/*
    CREATING ARRAY

    let Array = [];

    STRING = "" or ''

    let studentName = ["Arun","Ram","Akalya","Abi","Prakash"]
*/

let studentMarks = [1,2,3,4,5,6,7,8];

console.log(studentMarks);
console.log(studentMarks[4]);

// Array Methods push [insert] and pop[Delete]
studentMarks.push(88)
console.log(studentMarks);

studentMarks.pop()
console.log(studentMarks);

// shift [Remove Last Value] and unshift [Add the Valuen in First]

studentMarks.unshift(23)
console.log(studentMarks);

studentMarks.shift();
console.log(studentMarks);


// Array Method - map
studentMarks.map((vals)=> { console.log(vals);
})

// Filter Method
console.log("Filter Method");

const fil = studentMarks.filter((val)=> val % 2 === 0)
console.log(fil);





