const addElement = (e) => {
    e.preventDeflaut();
}

const addForm = document.querySelector('.form--add')
addForm.addEventListener('submit', addElement)
