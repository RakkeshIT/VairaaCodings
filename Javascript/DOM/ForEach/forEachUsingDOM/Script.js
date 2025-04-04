const Tag = document.getElementById('Demo')

Tag.innerHTML = "Hello"
Tag.style.color = 'red'
Tag.style.border = '1px solid red'

const listItem = document.querySelectorAll('#list-item')
listItem.forEach((item, index) => {
    item.style.border = '1px solid black',
    item.style.width = 'fit-content',
    item.style.margin = '10px',
    item.style.padding = '9px'
})





