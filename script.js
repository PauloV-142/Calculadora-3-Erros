const btnPonto = document.querySelector(".ponto")
const btnSoma = document.querySelector(".soma");
const btnSub = document.querySelector(".sub");
const btnIgual = document.querySelector(".igual");
const btnLimpar = document.querySelector(".c");

const inputField = document.getElementById("field");
let field = {};


const btnNumeros = [];
for (let i = 0; i <= 9; i++) {
    btnNumeros.push(document.getElementById(i));
    btnNumeros[i].onclick = () => field.insert(i);
};
document.body.onkeydown = handleKeyboardInput;

/* Calcular */
btnIgual.onclick = field.calcular;
btnLimpar.onclick = field.clear;

/* Operators */
btnPonto.onclick = () => field.insert(".");
btnSoma.onclick = () => field.insert("+");
btnSub.onclick = () => field.insert("-");

field = {
    set value(str) {
        inputField.textContent = str;
        // Auto Evaluator here
    },
    get value() {
        return inputField.textContent;
    },

    clear() {
        field.value = "";
        console.log("clear")
    },
    insert(str) {
        if (isOperator(str)) {
            str = ` ${str} `;
        }
        field.value += str;
    },
    calcular() {
        field.value = calcular(field.value);
    },
    backspace() {
        if (! isOperator(field.value.at(-2))) {
            field.value = field.value.slice(0, -1)
        } else {
            field.value = field.value.slice(0, -3);
        }

    }
}




/* MyLib */
function getPreviousStringValue(str, insertedStr) {
    if (insertedStr) {
        str = str.slice(0, str.length - 1);
    }
    return str;
}

function isCharAllowed(char) {
    if (char == Number(char)) {
        return true;
    } else if (isOperator(char) || char == "."){
        return true;
    } else if (char === null){
        return true;
    } else {
        return false;
    }
}

function isOperator(char) {
    if ((char == "+" || char == "-")) {
        return true;
    }
    return false ;
}

function formatOperator(str, char) {
    return getPreviousStringValue(str, char) + ` ${char} `;
}

function calcular(s) {
    // Source - https://stackoverflow.com/a/2276173
    // function addbits(s) {
    console.log("calc  "+ s)
    while (s.includes(" ")) {
        s = s.replace(" ", "");
    }

    console.log(s)
    var total = 0,
    s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    
    while (s.length) {
        total += parseFloat(s.shift());
    }
    return total;
}

function handleKeyboardInput(keyboardEvent) {
    switch (keyboardEvent.key) {
        case "Backspace":
            field.backspace();
            break;
        case "Enter":
            field.calcular();
            break;
        case ",":
            field.insert(".");
        default:
            if (isCharAllowed(keyboardEvent.key))
                field.insert(keyboardEvent.key);
    }
    // highlightButton(field.keyPressed);
};