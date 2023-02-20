document.getElementById('deposit-btn').addEventListener('click', () => {
    const newDeposit = getInputValue('deposit-filed');
    if(newDeposit === undefined){
        return;
    }
    const previousDeposit = getElementValue('deposit');
    const totalDeposit = newDeposit + previousDeposit;
    setElementValue('deposit', totalDeposit);

    
})