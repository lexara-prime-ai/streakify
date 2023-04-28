"use strict";
// DEBUGGING
const log = console.log;
class App {
    // static render() {
    // }
    static dipslayHabit() {
        const userInput = document.querySelector('#user-input');
        const habit = document.querySelector('.habit');
        habit.innerHTML = `Track your <span>${userInput.value}</span> habit..`;
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
}
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', App.dipslayHabit);
addBtn.addEventListener('click', App.displayStreakCount);
