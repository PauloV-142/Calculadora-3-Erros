const botoes = {
    numeros: [],
    opr: {
        soma: undefined,
        sub: undefined,
        igual: undefined,
        ponto: undefined
    }
};

for (let i = 0; i <= 9; i++) {
    botoes.numeros.push(document.getElementById(`${i}`));
};

["soma", "sub", "ponto", "igual"].forEach((v) =>
    botoes.opr[v] = document.getElementsByClassName(v)
);

const field = document.getElementById("field");


// Calcular
botoes.opr.onclick = function calcular(conta) {
    // Math.js
}

// Input
botoes.numeros.forEach((btn) => {
    btn.onclick = () => { field.value += btn.id}
})