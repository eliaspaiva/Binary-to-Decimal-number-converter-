// Variables
const numberOne = '1';
const numberZero = '0';
const wrongNumbers = ['2', '3', '4', '5', '6', '7', '8', '9'];

// Dom Elements
const invalidNumberTextOne = document.getElementById('invalid-number-text-one');
const invalidNumberTextTwo = document.getElementById('invalid-number-text-two');
const inputBox = document.getElementById('user-input');

// Check input value
inputBox.addEventListener('input', function(e) {
  e.preventDefault();
  const inputValue = inputBox.value;
  const checkNumber = [];
  checkNumber.push(inputValue);
  const commaSeperated = checkNumber.join(',');
  const inputValueInArray = commaSeperated.split('');
  for (let i = 0; i < inputValueInArray.length; i++) {
    if (
      inputValueInArray[i] === numberOne ||
      inputValueInArray[i] === numberZero
    ) {
      invalidNumberTextOne.innerHTML = '';
      invalidNumberTextTwo.innerHTML = '';
      console.log('primeiro');
    }
    for (let j = 0; j < wrongNumbers.length; j++) {
      if (inputValueInArray[i] === wrongNumbers[j]) {
        invalidNumberTextOne.innerHTML =
          'You entered a non-binary digit (please enter only 0 or 1)';
        invalidNumberTextTwo.innerHTML =
          '🤷Waiting for a valid binary number...';
        console.log('segundo');
      }
    }
  }
});
