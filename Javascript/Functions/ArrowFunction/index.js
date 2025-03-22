/*

    ARROW FUNCTION

*/

function Demo(){
    console.log("Demo Function");
}

let Add = function(){
    console.log("Add Function");
}


// Arrow Function

const Arrow = () => {
    console.log("Hello");
}

const Addition = (a,b) => {
    return a + b
}

Demo()
Add()
Arrow()
console.log(Addition(10,20));

