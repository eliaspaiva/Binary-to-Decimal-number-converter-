// Variables
const numberOne = '1';
const numberZero = '0';
// const wrongNumbers = ['2', '3', '4', '5', '6', '7', '8', '9'];

// Dom Elements
const invalidNumberTextOne = document.getElementById('invalid-number-text-one');
const invalidNumberTextTwo = document.getElementById('invalid-number-text-two');
const inputBox = document.getElementById('user-input');


// Functions
inputValidation = () => {
  const checkNumber = [];
  const inputValue = inputBox.value;
  checkNumber.push(inputValue);
  const commaSeperated = checkNumber.join(',');
  const inputValueInArray = commaSeperated.split('');
  console.log(inputValueInArray);
  for (let i = 0; i < inputValueInArray.length; i++) {
    if (
      inputValueInArray[i] !== numberOne &&
      inputValueInArray[i] !== numberZero
    ) {
      invalidNumberTextOne.innerHTML =
        'You entered a non-binary digit (please enter only 0 or 1)';
      invalidNumberTextTwo.innerHTML = '🤷Waiting for a valid binary number...';
    } else if (
      inputValueInArray[i] == numberOne ||
      inputValueInArray[i] == numberZero
    ) {
      invalidNumberTextOne.innerHTML = '';
      invalidNumberTextTwo.innerHTML = '';
    }
  }
};

// Event Listeners
inputBox.addEventListener('input', inputValidation);
console.log(inputBox.value.length);

// ||
