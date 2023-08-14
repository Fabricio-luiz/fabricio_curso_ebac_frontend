const form = document.getElementById('form-valid');
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

function validarFormulario(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

const valorA = document.getElementById('campoA').value;
const valorB = document.getElementById('campoB').value;
const menssagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;

    formValid = validarFormulario(valorA, valorB)
    if (formValid) {
        alert(menssagemSucesso);
    } 
    else if (valorB == valorA) {
        alert("Não é valido pois B é igual A!");
    } else {
        alert("Não é válido pois A é maior que B!");
    }

    campoA.value = '';
    campoB.value = '';
})
