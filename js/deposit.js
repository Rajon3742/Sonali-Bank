// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked')
    
    // step-2: for input field use '.value' to the value inside rhe input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // console.log(depositAmount);

    // step-3: get the deposit current total amount
    // for non-input(element other than input, textarea) use innerText to get the text
    const deposiTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = deposiTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // console.log(depositTotal);

    // step-4: add number to set the total deposit
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    // set the deposit total
    deposiTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';
})