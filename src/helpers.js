export const wordCorrectHandler = completedTodosCount => {
    console.log(completedTodosCount, 99999)
    let word = '';
    if (completedTodosCount > 1 && completedTodosCount < 5) {
        word = 'задачи'
    } else if (completedTodosCount >= 5) {
        word = 'задач'
    } else {
        word = 'задачу'
    }
    return <h2>{`Вы сохранили ${completedTodosCount} ${word}`}</h2>
}