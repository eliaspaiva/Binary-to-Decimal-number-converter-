// Dom Elements
const inputValue = document.getElementById('user-input');
const decimalConversion = document.getElementById('decimal-result');

// Check input value
inputValue.addEventListener('input', () => {
  const numberInputed = inputValue.value;
  if (inputValue.value.length === 0) {
    decimalConversion.innerHTML = '';
  } else {
    const binaryNumber = parseInt(numberInputed, 2);
    decimalConversion.innerHTML = `${binaryNumber}`;
  }
});
