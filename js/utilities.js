function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    if(inputValue.length < 1){
        return alert('Please Enter Your Amount...')
    }else if(isNaN(inputValue)){
        return alert('Please Enter Valid Amount...')
    }
    inputField.value = '';
    return parseFloat(inputValue);
}

function getElementValue(elementId){
    const textField = document.getElementById(elementId);
    return parseFloat(textField.innerText);
}

function setElementValue(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}