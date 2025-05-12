

const MyForm = document.getElementById('myForm')

MyForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const msg = document.getElementById('msg')

    if(name === "" || email === "" || password == ""){
        msg.textContent = "All Fields are Required"
        msg.style.color = 'red'
    }else if(!validateEmail(email)){
        msg.textContent = "Please Enter Correct Email Formate"
        msg.style.color = 'red'
    }else if(password.length < 6){
        msg.textContent = "Password Must be Greater then 6 Charecters"
        msg.style.color = 'red'
    }else {
        msg.textContent = "Form Submited Succesfully"
        msg.style.color = 'black'
    }

})


function validateEmail(email){
    return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}