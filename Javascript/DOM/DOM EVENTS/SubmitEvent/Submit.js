
let Form = document.getElementById('myForm')

Form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let name = document.getElementById('Name').value;

    let Output = document.getElementById('output')
    Output.textContent = name
    
})