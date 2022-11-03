const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const createDaysOfTheMonth = () => {
    let getDaysList = document.querySelector('#days');
    for (let index = 0; index < decemberDaysList.length; index += 1) {

        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;

        // getDaysList.appendChild(dayItem)

        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            getDaysList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday';
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
            // }
        }
    }
}
createDaysOfTheMonth();

function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    buttonContainer.appendChild(newButton);

}
createHolidayButton('Feriados');

const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(0,208,28)';
    let setNewColor = 'white';
    
    getHolidayButton.addEventListener('click', () => {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
                getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[index].style.backgroundColor = setNewColor;
            }
        }
    });
}
displayHolidays();

const createFridayButton = (buttonName) => {
    let buttonConteiner = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonConteiner.appendChild(newButton);
  
}
createFridayButton('Sexta-feira');

const displayFridays = (fridaysArray) => {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';

    getFridayButton.addEventListener('click', () => {
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText;
            } else {
                fridays[index].innerHTML = fridaysArray[index];
            }
        }
    });
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

const dayMouseOver = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
    });
}
dayMouseOver();
const dayMouseOut = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
    });
}
dayMouseOut();

const newTaskSpan = (task) => {
    let tasksConteiner = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = task;
    tasksConteiner.appendChild(taskName);
}

newTaskSpan('projeto');

