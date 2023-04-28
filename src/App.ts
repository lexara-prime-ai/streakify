// DEBUGGING
const log = console.log;

class App {
    static render() {

    }

    static dipslayHabit() {
        const userInput = document.querySelector('#user-input')! as HTMLInputElement;
        const habit = document.querySelector('.habit');

        log(habit);
    }

    static displayStreakCount() {

    }
}

const addBtn = document.querySelector('.add-btn') as HTMLElement;

addBtn.addEventListener('click', App.dipslayHabit);