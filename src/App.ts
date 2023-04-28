// DEBUGGING
const log = console.log;

class App {
    // static render() {

    // }

    static dipslayHabit() {
        const userInput = document.querySelector('#user-input')! as HTMLInputElement;
        const activeHabit = document.querySelector('.active-habit') as HTMLElement;
        activeHabit.innerHTML = `Track your <span>${userInput.value}</span> habit..`;
        log(userInput.value);
    }

    static displayStreakCount() {
        let date = new Date();
        let days = date.getMonth();

        // DAY COUNT
        const count = document.querySelector('.count') as HTMLElement;
        count.innerHTML = days.toString();

        log(days);
    }

    static addHabit() {
        const userInput = document.querySelector('#user-input')! as HTMLInputElement;
        const habitContainer = document.querySelector('.habits') as HTMLElement;
        habitContainer.innerHTML += `
        <div class="habit-container">
            <div class="habit">

            <h3 class="habit-title">
                ${userInput.value}
            </h3>  

                <i class="fas fa-clock clock-icon"></i>
            </div>

            <div class="date">
                <h3 class="date-display">
                    Date started
                </h3>
            </div>
        </div>
        `;
    }
}

const addBtn = document.querySelector('#add-btn') as HTMLElement;

addBtn.addEventListener('click', App.dipslayHabit);
addBtn.addEventListener('click', App.displayStreakCount);
addBtn.addEventListener('click', App.addHabit);



