const searchInput = document.querySelector('.todolist__search input');

searchInput.addEventListener('input', () => {
    const inputText = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll('.todolist__task');


    tasks.forEach(task => {
        const descTask = task.querySelector('.task__desc').innerText.toLowerCase();
        if (descTask.includes(inputText)) {
            task.classList.remove('hide');
        } else {
            task.classList.add('hide');
        }
    });
});

