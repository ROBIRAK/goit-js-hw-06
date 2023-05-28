const inputFontSizeElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

inputFontSizeElement.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value;
    textElement.style.fontSize = `${inputValue}px`;
})