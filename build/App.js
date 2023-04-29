"use strict";
// DEBUGGING
const log = console.log;
class App {
    // static render() {
    // }
    static dipslayHabit() {
        const userInput = document.querySelector('#user-input');
        const activeHabit = document.querySelector('.active-habit');
        // CHECK IF INPUT FIELD IS EMPTY
        if (userInput.value === '') {
            alert('Please enter a habit to track...');
            return;
        }
        else {
            activeHabit.innerHTML = `Track your <span>${userInput.value}</span> habit..`;
            log(userInput.value);
        }
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
        // DATE FORMAT
        const date = new Date();
        const dd = date.getDay();
        const MM = date.getMonth();
        const yyyy = date.getFullYear();
        const format = `${dd}/${MM}/${yyyy}`;
        // CHECK IF INPUT FIELD IS EMPTY
        if (userInput.value === '') {
            alert('Please enter a habit to track...');
            return;
        }
        else {
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
                    Start date : ${format}
                </h3>
            </div>
        </div>
        `;
        }
    }
    static displayStartDate() {
    }
}
const addBtn = document.querySelector('#add-btn');
// addBtn.addEventListener('click', App.dipslayHabit);
// addBtn.addEventListener('click', App.displayStreakCount);
// addBtn.addEventListener('click', App.addHabit);
// addBtn.addEventListener('click', App.displayStartDate);
