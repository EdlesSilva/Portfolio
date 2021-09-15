let formulario = document.querySelector('.formulariobolado')

  formulario.addEventListener ('submit', function(event){
    event.preventDefault();

    var dados = {}
    dados.name = formulario.name.value;
    dados.email = formulario.email.value;
    dados.subject = formulario.subject.value;
    dados.message = formulario.message.value;

    var dadosTexto = JSON.stringify (dados);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/formulario.php');
    xhr.setRequestHeader ("Content-Type", "application/json");
    
    xhr.onload = function() {
        var mensagem = document.querySelector("div.alert");
        mensagem.classList.remove("invisible");
        mensagem.textContent = xhr.responseText;
        formulario.reset();
    }

    xhr.send(dadosTexto);
})