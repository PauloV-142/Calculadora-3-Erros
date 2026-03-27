const btnPonto = document.querySelector(".ponto")
const btnSoma = document.querySelector(".soma");
const btnSub = document.querySelector(".sub");
const btnIgual = document.querySelector(".igual");
const btnLimpar = document.querySelector(".c");

const field = document.getElementById("field");

/* Pegar Botões Numéricos */
const btnNumeros = [];
for (let i = 0; i <= 9; i++) {
    btnNumeros.push(document.getElementById(i));
    btnNumeros[i].onclick = () => fieldInsert(i);
};


// for (let element of btnNumeros) {
//     element.onclick = () => fieldInsert(element.id);
// }

let previousValue = "";
let delta = "";
/* Calcular */
btnIgual.onclick = calcular;

btnLimpar.onclick = clear;

/* Operators */
btnPonto.onclick = () => fieldInsert(".");
btnSoma.onclick = () => fieldInsert("+");
btnSub.onclick = () => fieldInsert("-");

// To also handle physical keyboard inputs
field.oninput = handleKeyboardInput;

/* MyLib */
function getPreviousStringValue(str, insertedStr) {
    if (insertedStr) {
        str = str.slice(0, str.length - 1);
    }
    return str;
}

function isCharAllowed(char) {
    if (Number(char)) { // Ideia de erro. Number(char) Não está reconhecendo o zero (0 -> false), deixar assim?
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
    if (["+", "-"].includes(char)) {
        return true;
    }
    return false;
}

function clear() {
    field.value = "";
}

function formatOperator(str, char) {
    return getPreviousStringValue(str, char) + ` ${char} `;
}

function calcular() {
    // We can edit this function and add some errors here >:D
    // JK (sort of)

    // Source - https://stackoverflow.com/a/2276173
    // Posted by kennebec, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-03-24, License - CC BY-SA 4.0]
    function addbits(s) {
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
    } // Idk how it works

    field.value = addbits(field.value);
}

function fieldInsert(str) {
    if (isOperator(str)) {
        str = ` ${str} `;
    }
    field.value += str;
}

function handleKeyboardInput(keyboardEvent) {
    let keyPressed = keyboardEvent.data;
    if (! isCharAllowed(keyPressed)) {
        field.value = getPreviousStringValue(field.value, keyPressed);
    } else if (isOperator(keyPressed)) {
        field.value = formatOperator(field.value, keyPressed);
    }
};