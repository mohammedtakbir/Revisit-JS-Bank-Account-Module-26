function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    if (inputValue.length < 1) {
        return alert('Please Insert Your Amount')
    }
    if (isNaN(inputValue)) {
        return alert('Please Insert Valid Amount')
    }
    inputField.value = '';
    return parseFloat(inputValue)
}
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    return parseFloat(elementField.innerText)
}
function setElementValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}