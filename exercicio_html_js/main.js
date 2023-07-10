const form = document.getElementById('form-valid');

function validarFormulario(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

let valorA = parseInt(document.getElementById('campoA').value);
let valorB = parseInt(document.getElementById('campoB').value);

    if (valorB == valorA) {
        alert("Não é válido pois B é igual a A!");
    } else if (valorB > valorA) {
        alert("É valido pois B é maior que A!");
    } else {
        alert("Não é válido pois A é maior que B!");
    }
})

console.log(form);  
