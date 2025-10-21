// Выбираем DOM элементы

const applyBtn = document.querySelector('.task__apply');
const task = document.querySelector('.task__text');
const tasksSection = document.querySelector('.todolist__tasks');


function addTaskFunc() {

    applyBtn.addEventListener('click', () => {

        task.focus();
        const taskText = task.value.trim();

        if (taskText !== '') {

            // Создаем задачу
            const newTask = `
                        <div class="todolist__task">
                            <div class="task__content">
                                <div class="task__checkbox"></div>
                                <p class="task__desc">${taskText}</p>
                            </div>
                            <div class='task__images'>
                                <div class="task__edit"></div>
                                <div class="task__delete"></div>
                            </div>
                        </div>`;
            
            // Добавляем задачу на главный экран
            tasksSection.insertAdjacentHTML('afterbegin', newTask);
        }

        // Обнуляем задачу
        task.value = '';

        // Убираем окно с добавлением задачи
        addTask.classList.add('hide');

        // Обновляем раздел Пусто
        countChildElement();
    });
}