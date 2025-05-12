// Create a HTML Element

// let newElement = document.createElement("h1");
// newElement.textContent = "This is a New HTML Element"

// Append Child
// document.body.appendChild(newElement)


// Appending the Element to a Specific DIV

// let div = document.getElementById('container')

// let Title = document.createElement("h1");
// Title.textContent = "This is a New Element to Append Specific Div"

// Title.style.color = "red"
// Title.style.fontSize = "35px"

// div.appendChild(Title)


// Creating Element with Class, ID, Style

let Divivsion = document.getElementById('container')

let Button = document.createElement('button');
Button.textContent = "Click Me !"
Button.className = "btn"
Button.id = "clickBtn"
Button.style.background = "yellow"

// Add Click Event
Button.addEventListener('click', () => {
    alert("Event is Working ....")
})
Divivsion.appendChild(Button)

let items = ["Apple", "Bannan", "Orange", "Grapes"]

let ul = document.createElement('ul')

items.forEach((item) => {
    let li = document.createElement('li')

    li.textContent = item;
    ul.appendChild(li)
})

Divivsion.appendChild(ul)