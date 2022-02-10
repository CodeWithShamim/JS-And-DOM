// deposit & withdraw & balance card 
let deposit = document.getElementById('deposit');
let withdraw = document.getElementById('withdraw');
let balance = document.getElementById('balance');

// Deposit & Withdraw 
// Deposit
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function() {
    const depositField = document.getElementById('deposit-value');
    let depositValue = depositField.value;
    // balanceValue = balance.innerText - depositValue;
    // balance.innerText = balanceValue;
    // add condition

    if (depositValue == "") {
        alert("Please! choose your deposit amount");
    }
    // else if (typeof(depositValue) == "string") {
    //     alert("Choose only number value");
    // } 
    else {
        previousDepositValue = parseFloat(deposit.innerText);
        newDepositValue = parseFloat(depositValue);
        deposit.innerText = previousDepositValue + newDepositValue;

        // balance 
        const balanceText = balance.innerText;
        const newBalance = parseFloat(balanceText);
        balance.innerText = newBalance + newDepositValue;
    }
    // remove value
    depositField.value = "";
})


// withdraw 
const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-value');
    let withdrawValue = withdrawField.value;
    // add condition
    if (withdrawValue == "") {
        alert("Please! choose your withdraw amount");
    } else {
        previousWithdrawValue = parseFloat(withdraw.innerText);
        newWithdrawValue = parseFloat(withdrawValue);
        withdraw.innerText = previousWithdrawValue + newWithdrawValue;
    }
    // remove value 
    withdrawField.value = "";
})