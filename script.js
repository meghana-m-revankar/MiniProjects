
const buttons = document.querySelectorAll('.button'); //!Node list

const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; //! instead of this e.target.id hardcoded color can also be written
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }

  })
});

//?BMI CALULATOR
const form = document.querySelector('form');
//! this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //!show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
/* console.log("Script executed");


let numberTY=document.getElementById('incrementor').value;
let value = parseInt(numberTY); 
console.log("Value:", value);
for (number = 1; number < value; number++) {
  console.log(number)
}
 */
console.log("Script executed");

/* let numberTY = document.getElementById('incrementor').value;
let value = parseInt(numberTY);
console.log("Value:", value);
console.log("Value before parsing:", numberTY);

// Check if 'value' is a valid number
if (!isNaN(value)) {
  // Loop only if 'value' is a valid number
  for (let number = 1; number < value; number++) {
    console.log(number);
  }
} else {
  console.log("Invalid input: Please enter a valid number.");
}

 */
/* document.getElementById('submitButton').addEventListener('click', function() {
  let numberTY = document.getElementById('incrementor').value;
  console.log("Value before parsing:", numberTY);

  if (numberTY.trim() === "") {
    console.log("Input field is empty: Please enter a number.");
    return; // Exit the function early if the input field is empty
  }

  let value = parseInt(numberTY);
  console.log("Value:", value);

  if (!isNaN(value)) {
    for (let number = 0; number <= value; number++) {
      console.log(number);
    }
  } else {
    console.log("Invalid input: Please enter a valid number.");
  }
});
 */

//?Add input


function addTextFields() {
  let numberTY = document.getElementById('incrementor').value;
  console.log("Value before parsing:", numberTY);

  if (numberTY.trim() === "") {
    console.log("Input field is empty: Please enter a number.");
    return; // Exit the function early if the input field is empty
  }

  let value = parseInt(numberTY);
  console.log("Value:", value);

  if (!isNaN(value)) {
    let textFieldContainer = document.getElementById('textFieldContainer');
    textFieldContainer.innerHTML = ''; // Clear existing text fields

    // Append text fields
    for (let i = 1; i <= value; i++) {
      let textField = document.createElement('input');
      textField.type = 'text';
      textField.placeholder = `Text ${i}`;
      textFieldContainer.appendChild(textField);
    }
  } else {
    console.log("Invalid input: Please enter a valid number.");
  }
}

//?Digital clock
const clock = document.querySelector('.clock')
let date = new Date();
setInterval(function () {
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

const random = parseInt(Math.random() * 100 + 1);
console.log(random);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
let prevGuess = [];
let newGuess = 1;
let playGame = 'true';
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    let numGuess;
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  let randomNumber;
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  let numGuess;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''; //!To clear the input
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}