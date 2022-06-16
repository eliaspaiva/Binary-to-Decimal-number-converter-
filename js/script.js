// Variables
const binaryNumbers = ['0', '1'];
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
  const lastElement = inputValueInArray.slice(-1);
  const secondToLast = inputValueInArray.slice(-2);
  for (let i = 0; i < inputValueInArray.length; i++) {
    for (let j = 0; j < wrongNumbers.length; j++) {
      for (let x = 0; x < binaryNumbers.length; x++) {
        if (inputValueInArray[i] === binaryNumbers[x]) {
          invalidNumberTextOne.innerHTML = '';
          invalidNumberTextTwo.innerHTML = '';
          console.log('primeiro');
        } else if (
          inputValueInArray[i] === wrongNumbers[j]
        ) {
          invalidNumberTextOne.innerHTML =
            'You entered a non-binary digit (please enter only 0 or 1)';
          invalidNumberTextTwo.innerHTML =
            '🤷Waiting for a valid binary number...';
          console.log('segundo');
        } else if (
          inputValueInArray[i] === binaryNumbers[x] &&
          inputValueInArray[i] === wrongNumbers[j]
        ) {
          invalidNumberTextOne.innerHTML = '';
          invalidNumberTextTwo.innerHTML = '';
          console.log('terceiro');
        }
      }
    }
  }
});
