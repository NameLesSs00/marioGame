const title = document.getElementById("titleOFGAME");
const socre = document.getElementById("socre");

title.innerHTML = `Whack A Mole`;
let playerScore = 0;
socre.innerHTML = `${playerScore}`;

const arr = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9"];

let twoNumbers;

function selectTwoRandomNumber() {
    let num1 = 1;
    let num2 = 1;
    while (num1 === num2) {
        num1 = Math.floor(Math.random() * 9);
        num2 = Math.floor(Math.random() * 9);
    }
    return [num1, num2];
}


function startGame() {
    playerScore = 0;
    socre.innerHTML = `${playerScore}`;
    title.innerHTML = `Whack A Mole`;

    document.querySelectorAll('.showPlant').forEach(elem => elem.classList.remove('showPlant'));
    document.querySelectorAll('.showMole').forEach(elem => elem.classList.remove('showMole'));

    twoNumbers = selectTwoRandomNumber();
    const selectPlant = arr[twoNumbers[0]];
    const selectMole = arr[twoNumbers[1]];

    const plant = document.getElementById(selectPlant);
    const mole = document.getElementById(selectMole);

    if (plant) {
        plant.classList.add("showPlant");
        plant.addEventListener("click", plantClicked);
    }
    if (mole) {
        mole.classList.add("showMole");
        mole.addEventListener("click", moleClicked);
    }
}

function moleClicked() {
    playerScore += 10;
    socre.innerHTML = `${playerScore}`;

    const mole = this; 
    mole.classList.remove("showMole");
    mole.removeEventListener("click", moleClicked);

    const plant = document.querySelector('.showPlant');
    if (plant) {
        plant.classList.remove("showPlant");
        plant.removeEventListener("click", plantClicked);
    }

    twoNumbers = selectTwoRandomNumber();
    const selectPlant = arr[twoNumbers[0]];
    const selectMole = arr[twoNumbers[1]];

    const newPlant = document.getElementById(selectPlant);
    const newMole = document.getElementById(selectMole);

    if (newPlant) {
        newPlant.classList.add("showPlant");
        newPlant.addEventListener("click", plantClicked);
    }
    if (newMole) {
        newMole.classList.add("showMole");
        newMole.addEventListener("click", moleClicked);
    }
}

function plantClicked() {
    title.innerHTML = `GAME OVER!!! Click here to play again`;
    socre.innerHTML = `${playerScore}`;

    const mole = document.querySelector('.showMole');
    const plant = this; 

    if (mole) {
        mole.classList.remove("showMole");
        mole.removeEventListener("click", moleClicked);
    }
    if (plant) {
        plant.classList.remove("showPlant");
        plant.removeEventListener("click", plantClicked);
    }

    title.addEventListener("click", startGame, { once: true });
}

startGame();