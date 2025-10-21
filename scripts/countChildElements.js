function countChildElement() {
    // Выбираем DOM элементы
    const emptySection = document.querySelector('.content__empty');

    // Проверяем на наличие задачи
    if (tasksSection.childElementCount !== 0) {
        emptySection.classList.add('hide');
    } else {
        emptySection.classList.remove('hide');
    }
}
