document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldString = depositField.value;
    const newDepositAmount = parseFloat(newDepositFieldString);

    // clear the deposit input field after getting the value
    depositField.value = '';

    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert('Enter valid number.');
        return;
    }

    // get the previous deposit amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // set current deposit amount
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotal.innerText = currentDepositTotal;

    // get the total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);

    // 
    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    balanceTotal.innerText = currentBalanceTotal;
})