// CLOSE
// Выбираем DOM элементы
const cancelBtn = document.querySelector('.task__cancel');

cancelBtn.addEventListener('click', () => {
    addTask.classList.add('hide');
    task.value = '';
})



// OPEN
// Выбераем DOM элементы
const addBtn = document.querySelector('.addListButton');
const addTask = document.querySelector('.addTask');

// Функция появления окна добавления задачи при нажатии на плюсик
addBtn.addEventListener('click', () => {
    addTask.classList.remove('hide');
    task.focus()
    addTaskFunc()
})