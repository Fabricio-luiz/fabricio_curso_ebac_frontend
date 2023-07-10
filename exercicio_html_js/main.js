const form = document.getElementById('form-valid');

function validarFormulario(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

const valorA = parseInt(document.getElementById('campoA').value);
const valorB = parseInt(document.getElementById('campoB').value);
const menssagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;


    formValid = validarFormulario(valorA, valorB)
    if (formValid) {
        alert(menssagemSucesso);
    } else if (valorB == valorA) {
        alert("Não é valido pois B é igual A!");
    } else {
        alert("Não é válido pois A é maior que B!");
    }
})

console.log(form);  
