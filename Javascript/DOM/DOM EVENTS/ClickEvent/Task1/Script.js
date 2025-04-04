
// Get the Button

const Button = document.getElementById('btn');
const Button2 = document.getElementById('btn2');


Button.addEventListener('click', () => {
    const Tag = document.getElementById('Tag');
    Tag.style.color = 'yellowgreen'
})

Button2.addEventListener('click', () => {
    const Tag = document.getElementById('Tag')
    Tag.style.color = 'black'
})