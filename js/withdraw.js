document.getElementById('btn-withdraw').addEventListener('click', function() {
    // get the value from withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    // clear input field after input the value
    withdrawField.value = '';

    if (isNaN(withdrawAmount) || withdrawAmount < 0) {
        alert("Enter valid number");
        return;
    }

    // get the previous withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // get previous balance
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (previousBalanceTotal < withdrawAmount) {
        alert("You don't have that much money!");
        return;
    }

    // add current and previous withdrow amount
    const newWithdawTotal = withdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = newWithdawTotal;

    // calculate new balance and set the new balance
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})