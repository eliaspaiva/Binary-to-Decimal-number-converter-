const numberOne = 1;
const numberZero = 0;
const textOne = document.getElementById('invalid-number-text-one');
const textTwo = document.getElementById('invalid-number-text-two');
const box = document.getElementById('user-input');

box.addEventListener('input', function(e) {
    e.preventDefault();
    const inputValue = box.value;
    const checkNumber = [];
    checkNumber.push(inputValue);
    const commaSeperated = checkNumber.join(',')
    const inputValueInArray = commaSeperated.split('');

    const result = inputValueInArray.filter(numbers => )
    
});

