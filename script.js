const btnNumeros = [];
const btnPonto = document.querySelector(".ponto")
const btnSoma = document.querySelector(".soma");
const btnSub = document.querySelector(".sub");
const btnIgual = document.querySelector(".igual");

/* Pegar Botões Numéricos */
for (let i = 0; i <= 9; i++) {
    btnNumeros.push(document.getElementById(i));
};

const field = document.getElementById("field");


/* Calcular */
btnIgual.onclick = function calcular() {
    // We can edit this function and add some errors here >:D
    // JK (sort of)

    // Source - https://stackoverflow.com/a/2276173
    // Posted by kennebec, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-03-24, License - CC BY-SA 4.0

    function addbits(s) {
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
    field.value += str;
    // Aqui estará a lógica das ideias 2. e 3.
}

/* Input */
for (let element of btnNumeros) {
    element.onclick = () => fieldInsert(element.id);
}
btnPonto.onclick = () => fieldInsert(".");
btnSoma.onclick = () => fieldInsert(" + ");
btnSub.onclick = () => fieldInsert(" - ");