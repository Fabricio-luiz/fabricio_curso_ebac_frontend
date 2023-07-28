$(document).ready(function() {
    $('form'); 

})

$('form').on('submit', function(e) {
    e.preventDefault();

const tarefa = $('#tarefas').val();
const novaTarefa = $('<li> </li>');
$(novaTarefa).html(tarefa);
$(novaTarefa).appendTo('ul');

$('input').val('');

$(novaTarefa).click(function(){
    $(novaTarefa).toggleClass('feito')
})

})

