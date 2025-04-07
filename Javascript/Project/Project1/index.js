
/*

    DOM - Document Object Model

*/

function calculate(Operation){
    let input1 = document.getElementById('input1').value
    let input2 = document.getElementById('input2').value

    let result = document.getElementById('message')
    if(Operation === 'add'){
        result.innerHTML = add(input1,input2)
    }else if(Operation === 'sub'){
        result.innerHTML = sub(input1, input2)
    }else if(Operation === 'div'){
        result.innerHTML = div(input1, input2)
    }else if(Operation === 'mul'){
        result.innerHTML = mul(input1, input2)
    }else {
        result.innerHTML = "Incorrect Value"
    }
}


// Add
function add(a, b){
    return a + b
}
// sub
function sub(a, b){
    return a - b
}
// div
function div(a, b){
    return a / b
}
// mul
function mul(a, b){
    return a * b
}