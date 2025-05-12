// Laxical
function outer() {
    let number = 10;
    function inner(){
        console.log("Number : ", number);
    }

    inner()
}

outer()


// Closure
function Parent(){
    let count = 0;

    return function Child(){
        count++
        console.log("Count : ", count);
    }
}

const Counter = Parent()

Counter()
Counter()
Counter()
Counter()
Counter()