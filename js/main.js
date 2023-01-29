// Seleção de elementos
    const generatePasswordButton = document.querySelector('#generate-password');    
    const generatedPasswordElement = document.querySelector('#generated-password');


// Funções

// Letras, Números e Simbolos
const getLetterLowercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}[],.;:\/!*%$#&?@+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowercase, getLetterUppercase, getSymbol, getNumber) => {
    let password = '';

    const passwordLenght = 10;

    const generators = [
        getLetterLowercase,
        getLetterUppercase,
        getSymbol,
        getNumber
    ]

    for(i=0; i < passwordLenght; i = i + 4) {
        
        generators.forEach (() => {
            const randomValue =
              generators[Math.floor(Math.random() * generators.length)]();

              password += randomValue;

        });
    }

    password = password.slice(0, passwordLenght);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener('click', () => {

    generatePassword(
        getLetterLowercase,
        getLetterUppercase,
        getSymbol,
        getNumber
    );
});