const Mobilmenu = document.getElementById('Menu')

Mobilmenu.addEventListener('click', () => {
    const MenuList = document.getElementById('MenuList')

    MenuList.classList.toggle('Active')
})