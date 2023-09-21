$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })

    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true 
            },
        },

        messages: {
            nome:'<span class="message-error">Por favor, insira seu nome</span>',
            email:'<span class="message-error">Este campo é obrigatório</span>',
            telefone:'<span class="message-error">Este campo é obrigatório</span>',
            mensagem: '<span class="message-error">Este campo é obrigatório</span>',
        },
        submitHandler: function(form) {
            alert('Formulário cadastrado')
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    })