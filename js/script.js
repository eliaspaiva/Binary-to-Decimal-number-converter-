// Dom Elements
const inputValue = document.getElementById('user-input');
const decimalConversion = document.getElementById('display-decimal-number');

// Check input value
inputValue.addEventListener('input', () => {
  const numberInputed = inputValue.value;
  const binaryNumber = parseInt(numberInputed, 2);
  decimalConversion.innerHTML = `The decimal number is: ${binaryNumber}`;
});
