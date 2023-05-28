const input = document.querySelector("#validation-input");

input.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        input.className = 'valid';
    } else {
        input.className = 'invalid';
    }
});