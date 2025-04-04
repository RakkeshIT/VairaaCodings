
// Using DOM

const tag = document.getElementById('Demo')
tag.innerHTML = 'Hello !!'


function calculation(argument){
    const input1 = parseInt(document.getElementById('input1').value)
    const input2 = parseInt(document.getElementById('input2').value)

    const message = document.getElementById('msg')

    if(argument === 'add'){
        message.innerHTML = add(input1,input2)
    }else if(argument === 'sub'){
        message.innerHTML = sub(input1, input2)
    }else if(argument === 'div'){
        message.innerHTML = div(input1, input2)
    }else if(argument === 'mul'){
        message.innerHTML = mul(input1, input2)
    }else {
        message.innerHTML = "Invalid"
    }

}


// Add

function add(a, b){
    return a + b
}

// Sub

function sub(a, b){
    return  a - b
}

//Div

function div(a, b){
    return a / b
}

// Mul

function mul(a, b){
    return a * b
}