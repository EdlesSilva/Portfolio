var xhr = new XMLHttpRequest();
var data = document.querySelector('.formulariobolado')

data.addEventListener('submit', (event) => {
    
    var form = new FormData(data);
    xhr.open('POST', 'php/formulario.php');
    xhr.onload = () => {
        
        var mensagem = document.querySelector(".alert");
        mensagem.classList.remove("invisible");
        mensagem.textContent = xhr.responseText;
        data.reset();
        
        if(xhr.status == 200){
            
            console.log('xhr.responseText');

        }else {
            console.log('ERRO' . xhr.status)
        }
        
    }
    
    xhr.send(form);
    
    console.log('funcionando')
event.preventDefault();

})





