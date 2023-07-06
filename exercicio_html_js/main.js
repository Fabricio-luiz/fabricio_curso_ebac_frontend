const form = document.getElementById('form-valid');

function validarFormulario(campoA, campoB) {
    return campoB > campoA
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    

    if (campoB == campoA) {
        alert("Não é válido pois B é igual a A!");
    } else if (campoB > campoA) {
        alert("É valido pois B é maior que A!");
    } else {
        alert("Não é válido pois A é maior que B!");
    }
})

console.log(form);  