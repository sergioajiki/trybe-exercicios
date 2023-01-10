function buttonSubmit(event) {
    event.preventDefault();
}
window.onload = function () {
    const submitBtn = document.querySelector('#buttonEnviar');
    submitBtn.addEventListener('click', buttonSubmit);
    const clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', apagarCampos);
};
function apagarCampos() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}
