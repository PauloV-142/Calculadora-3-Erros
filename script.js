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


// Usar JQuery?


console.log(botoes);
