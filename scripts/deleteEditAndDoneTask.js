function deleteEditAndDoneTask() {
    tasksSection.addEventListener('click', (event) => {

        // Проверяем был ли клип по секции удаления задачи
        if (event.target.classList.contains('task__delete')) {
            const taskBlock = event.target.closest('.todolist__task');
            if (taskBlock) {
                taskBlock.remove();

                // Обновляем раздел Пусто
                countChildElement();
            }
        }

        // Проверяем был ли клик по чекбоксу
        if (event.target.classList.contains('task__checkbox')) {
            
            // Заполняем чекбокс
            const checkbox = event.target;
            checkbox.classList.toggle('task__done');

            // Вычеркиваем текст
            const taskBlock = event.target.closest('.todolist__task');
            if (taskBlock) {
                const taskDesc = taskBlock.querySelector('.task__desc');
                taskDesc.classList.toggle('crossedOut');
            }
        }
        
        // Проверяем был ли клин по редактированию задачи
        if (event.target.classList.contains('task__edit')) {
            const taskBlock = event.target.closest('.todolist__task')
            const taskDesc = taskBlock.querySelector('.task__desc');
            const taskText = taskDesc.innerText;
            if (addTask) {
                addTask.classList.remove('hide');
                const text = addTask.querySelector('.task__text');
                text.value = taskText;
                text.focus();
            }
            applyBtn.addEventListener('click', () => {
                addTaskFunc();
                taskBlock.remove();
            })
            
        };
    });
};

deleteEditAndDoneTask();
