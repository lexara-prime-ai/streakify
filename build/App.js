"use strict";
// DEBUGGING
const log = console.log;
class App {
    // static render() {
    // }
    static displayStreakCount() {
        let date = new Date();
        let days = date.getMonth();
        // DAY COUNT
        const count = document.querySelector('.count');
        count.innerHTML = days.toString();
        log(days);
    }
    // ADD HABIT
    static addHabit() {
        // USER INPUT
        const userInput = document.querySelector('#user-input');
        // HABIT CONTAINER | CONTAINER TO APPEND HABITS TO
        const habitContainer = document.querySelector('.habits');
        // ACTIVE HABIT
        const activeHabit = document.querySelector('.active-habit');
        // DISPLAY TRACKED HABIT
        activeHabit.innerHTML = `Track your <span>${userInput.value}</span> habit..`;
        log(userInput.value);
        // DATE FORMAT
        const date = new Date();
        const dd = date.getDay(); // DAY
        const MM = date.getMonth(); // MONTH
        const yyyy = date.getFullYear(); // YEAR
        const format = `${dd}/${MM}/${yyyy}`; // dd/MM/yyyy
        // CHECK IF INPUT FIELD IS EMPTY
        if (userInput.value === '') {
            alert('Please enter a habit to track...');
            return;
        }
        else {
            // HABIT CARD CONTENT STRUCTURE
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
}
// FORMULA TO CONVERT hours TO milliseconds
// 1 hour = 60 minutes(1 * 60)
// 60 minutes = 3600 seconds(60 * 60)
// 3600 seconds = 3,600,000 milliseconds(3600 * 1000)
// 1hour = 3,600,000 milliseconds
let hour = 1;
let dayHours = 24;
let seconds = 60;
let minutes = 60;
let milliseconds = 1000;
let converted = 1 * 24 * 60 * 60 * 1000;
// INCREASE DAY COUNT EVERY 24 HOURS
setInterval(() => {
    // DATE FORMAT
    const date = new Date();
    const HH = date.getHours(); // HOURS
    // DAY COUNT
    const dayCount = document.querySelector('.count');
    let count = 0;
    // INCREASE DAY COUNT ON REACHING 24 HOURS
    if (HH == 24) {
        count++;
        dayCount.innerHTML = count.toString();
    }
}, converted);
