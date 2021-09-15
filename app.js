const navSlide = () => {
    const burger = document.querySelector('.navegacao')
    const nav = document.querySelector('.flexseder')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    })
}
navSlide();

let xhr = new XMLHttpRequest();

let portform = document.getElementById('formport')

portform.addEventListener('submit', (event) =>{
    let form = new FormData(portform);
    xhr.open('POST', 'enviar.php')

    xhr.onload = () =>{
        let mensagem = document.querySelector('.alert')
        mensagem.classList.remove("invisible")
        mensagem.textContent = xhr.responseText
        portform.reset()

        if(xhr.status == 200) {
            
            console.log(xhr.responseText)
        }else {
            console.log('Error to conect' + xhr.status)
        }
    }

    xhr.send(form)

    event.preventDefault();
   
})

