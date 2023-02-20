document.getElementById('withdraw-btn').addEventListener('click', function () {
    const previousWithdraw = getElementValue('withdraw');
    const currentWithDraw = getInputValue('withdraw-field');
    if (currentWithDraw === undefined) {
        return;
    }
    const balance = getElementValue('balance');
    if(balance < 1){
        return alert(`You don't have enough money to withdraw`)
    }
    if (balance < currentWithDraw) {
        return alert(`You cannot withdraw more than ${balance}`)
    }
    const totalWithDraw = previousWithdraw + currentWithDraw;
    setElementValue('withdraw', totalWithDraw);

    const restBalance = balance - currentWithDraw;
    setElementValue('balance', restBalance);
})