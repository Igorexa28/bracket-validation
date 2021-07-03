import { testFunction } from './codeToExport.js';

const inputField = document.querySelector('#input');

document.getElementById('giveResult').addEventListener('click', function() {
    document.querySelector('.resultDiv').style.visibility = 'visible';
    document.querySelector('#result').textContent = testFunction(inputField.value);
    reset(inputField);
});

document.getElementById('toTests').addEventListener('click', function() {
    location.href =  'testsPage.html';
});

function reset(element) {
    element.value = '';
}