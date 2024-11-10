const body = document.body;
const carPicked = document.getElementById("result");
const btnWhite = document.getElementById("branco");
const btnRed = document.getElementById("vermelho");
const title = document.getElementById("title");
const obv = document.getElementById("obv");
const whiteCar = document.getElementById("white");
const redCar = document.getElementById("red");

const upArrow = document.getElementsByClassName("choicecard")[0]
const downArrow = document.getElementsByClassName("choicecard")[1]
const Reset = document.getElementsByClassName("choicecard")[2]

let inMoment = 0;

let inCounterW = 50;
let posCounterW = 205;
let topCounterW = 60;

let inCounterR = 50;
let posCounterR = 205;
let topCounterR = 60;

btnWhite.addEventListener('click', (event) => {
    event.preventDefault();
    body.style.backgroundColor = 'white';
    carPicked.innerHTML = "White";

    title.style.color = 'black';
    obv.style.color = 'black';
    carPicked.style.color = 'black';

    inMoment = 1;
    console.log(inMoment);

    upArrow.style.color = 'white'
    downArrow.style.color = 'white'
    Reset.style.color = 'white'
});

btnRed.addEventListener('click', (event) => {
    event.preventDefault();
    body.style.backgroundColor = 'Crimson';
    carPicked.innerHTML = "Red";

    inMoment = 2;

    upArrow.style.color = 'crimson'
    downArrow.style.color = 'crimson'
    Reset.style.color = 'crimson'
});

addEventListener('keydown', (event) => {
    event.preventDefault();

    if (inMoment === 1) {
        if (['w', 'W'].includes(event.key)) {

            inCounterW--;
            posCounterW++;
            topCounterW--;

            if(topCounterW == 16) topCounterW = 16;

            whiteCar.style.width = `${inCounterW}px`;
            whiteCar.style.left = `${posCounterW}px`;
            whiteCar.style.top = `${topCounterW}px`;

        } else if (['s', 'S'].includes(event.key)) {

            inCounterW++;
            posCounterW--;
            topCounterW++;

            whiteCar.style.width = `${inCounterW}px`;
            whiteCar.style.left = `${posCounterW}px`;
            whiteCar.style.top = `${topCounterW}px`;
        }
    } else if (inMoment === 2) { 
        if (['w', 'W'].includes(event.key)) {
            inCounterR--;
            posCounterR++;
            topCounterR--;

            redCar.style.width = `${inCounterR}px`;
            redCar.style.right = `${posCounterR}px`;
            redCar.style.top = `${topCounterR}px`;

        } else if (['s', 'S'].includes(event.key)) {
            inCounterR++;
            posCounterR--;
            topCounterR++;

            redCar.style.width = `${inCounterR}px`;
            redCar.style.right = `${posCounterR}px`;
            redCar.style.top = `${topCounterR}px`;
        }
    }
});

upArrow.addEventListener('click', (event) => {
    event.preventDefault()

    event.preventDefault();

    if (inMoment === 1) {

        inCounterW--;
        posCounterW++;
        topCounterW--;
        
        whiteCar.style.width = `${inCounterW}px`;
        whiteCar.style.left = `${posCounterW}px`;
        whiteCar.style.top = `${topCounterW}px`;
    } else if (inMoment == 2){
        inCounterR--;
        posCounterR++;
        topCounterR--;
    
        redCar.style.width = `${inCounterR}px`;
        redCar.style.right = `${posCounterR}px`;
        redCar.style.top = `${topCounterR}px`;
    }
})

downArrow.addEventListener('click', (event) => {
    event.preventDefault()

    if (inMoment === 1) {

        inCounterW++;
        posCounterW--;
        topCounterW++;
        
        whiteCar.style.width = `${inCounterW}px`;
        whiteCar.style.left = `${posCounterW}px`;
        whiteCar.style.top = `${topCounterW}px`;
    } else if (inMoment == 2){
        inCounterR++;
        posCounterR--;
        topCounterR++;
    
        redCar.style.width = `${inCounterR}px`;
        redCar.style.right = `${posCounterR}px`;
        redCar.style.top = `${topCounterR}px`;
    }
})

Reset.addEventListener('click', (event) => {
    event.preventDefault()

    whiteCar.style.width = `${50}px`;
    whiteCar.style.left = `${205}px`;
    whiteCar.style.top = `${60}px`;

    redCar.style.width = `${50}px`;
    redCar.style.right = `${205}px`;
    redCar.style.top = `${60}px`;
})
