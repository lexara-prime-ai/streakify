"use strict";
// DEBUGGING
const log = console.log;
class App {
    // static render() {
    // }
    static dipslayHabit() {
        const userInput = document.querySelector('#user-input');
        const activeHabit = document.querySelector('.active-habit');
        activeHabit.innerHTML = `Track your <span>${userInput.value}</span> habit..`;
        log(userInput.value);
    }
    static displayStreakCount() {
        let date = new Date();
        let days = date.getMonth();
        // DAY COUNT
        const count = document.querySelector('.count');
        count.innerHTML = days.toString();
        log(days);
    }
    static addHabit() {
        const userInput = document.querySelector('#user-input');
        const habitContainer = document.querySelector('.habits');
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
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', App.dipslayHabit);
addBtn.addEventListener('click', App.displayStreakCount);
addBtn.addEventListener('click', App.addHabit);
