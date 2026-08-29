function changeScreen(hide, show) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
}

const confirmButton = document.getElementById('button-confirm');
const screenSelect = document.getElementById('screen-select');
const screenGenerate = document.getElementById('screen-generate');
const screenVerify = document.getElementById('screen-verify');

confirmButton.addEventListener('click', function(){
    const opcaoSelecionada = document.querySelector('input[name="service"]:checked');
    console.log(opcaoSelecionada.value);

    if (opcaoSelecionada.value === "generate"){
        changeScreen(screenSelect,screenGenerate);
    }
    else if (opcaoSelecionada.value === "verify"){
        
        changeScreen(screenSelect,screenVerify);
    }
});

// TELA GERAR SENHA
const outputPassword = document.getElementById('generated-password-output');
const lengthInput = document.getElementById('password-length');
const uppercaseCheck = document.getElementById('include-uppercase');
const lowercaseCheck = document.getElementById('include-lowercase');
const numbersCheck = document.getElementById('include-numbers');
const symbolsCheck = document.getElementById('include-symbols');

const buttonGenerate = document.getElementById('button-generate');
const buttonBackGenerate = document.getElementById('button-back-generate');

buttonGenerate.addEventListener('click', function() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allowedChars = '';

    if (uppercaseCheck.checked) allowedChars += uppercaseChars;
    if (lowercaseCheck.checked) allowedChars += lowercaseChars;
    if (numbersCheck.checked) allowedChars += numberChars;
    if (symbolsCheck.checked) allowedChars += symbolChars;

    if (allowedChars === '') {
        alert('Selecione pelo menos um tipo de caractere!');
        return;
    }

    const length = parseInt(lengthInput.value);
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        
        generatedPassword += allowedChars[randomIndex];
    }

    outputPassword.value = generatedPassword;
});

buttonBackGenerate.addEventListener('click', function() {
    changeScreen(screenGenerate,screenSelect);
});