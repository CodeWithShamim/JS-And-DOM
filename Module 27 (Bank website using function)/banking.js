// deposit & withdraw & balance card 
let deposit = document.getElementById('deposit');
let withdraw = document.getElementById('withdraw');
let balance = document.getElementById('balance');



// create a function and reduce code 
function getInputValue(inputId, item) {
    const inputField = document.getElementById(inputId);
    const valueText = inputField.value;
    // remove value
    inputField.value = "";
    // add condition
    if (valueText == "") {
        alert(`Please! choose your ${item} amount`);

    }
    return valueText;
}

function updateValue(Value, textValue, isAdd) {
    const previousValue = parseFloat(textValue.innerText);
    const newValue = parseFloat(Value);
    textValue.innerText = previousValue + newValue;

    //set balance 
    const balanceText = balance.innerText;
    const newBalance = parseFloat(balanceText);
    if (isAdd == true) {
        balance.innerText = newBalance + newValue;
    } else {
        balance.innerText = newBalance - newValue;
    }
}


// Deposit & Withdraw 

// Deposit
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function() {

    const depositValue = getInputValue('deposit-value', 'Deposit');
    updateValue(depositValue, deposit, true);




})


// withdraw 
const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function() {
    const withdrawValue = getInputValue('withdraw-value', 'Withdraw');
    updateValue(withdrawValue, withdraw, false);
})