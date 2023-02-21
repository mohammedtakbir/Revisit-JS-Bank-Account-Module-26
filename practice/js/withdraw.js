document.getElementById('withdraw-btn').addEventListener('click', () => {
    const newWithdraw = getInputValue('withdraw-field');
    if (newWithdraw === undefined) {
        return;
    }
    const previousWithdraw = getElementValue('withdraw');
    
    const previousBalance = getElementValue('balance');
    if(previousBalance < 1){
        return alert(`You do not have enough money to withdraw`)
    }
    if(previousBalance < newWithdraw){
        return alert(`You cannot withdraw more than ${previousBalance}`);
    }

    const totalWithdraw = newWithdraw + previousWithdraw;
    setElementValue('withdraw', totalWithdraw);

    const totalBalance = previousBalance - newWithdraw;
    setElementValue('balance', totalBalance);
})