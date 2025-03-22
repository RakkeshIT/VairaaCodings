/*
    CREATING ARRAY

    let Array = [];

    STRING = "" or ''

    let studentName = ["Arun","Ram","Akalya","Abi","Prakash"]
*/

let studentMarks = [34,54,67,87,97];

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

studentMarks.map((value,index) => console.log(`Index: ${index}, Values: ${value}`)
)








