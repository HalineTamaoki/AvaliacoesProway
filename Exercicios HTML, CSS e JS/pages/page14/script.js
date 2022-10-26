const usuariosCadastrados = [
    {
        email:"a@gmail.com",
        senha:"1234",
    }
]

function autentificar(){
    const form = document.getElementById('page14-form')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())

    const emailInput = document.getElementById('page14-email').value
    const senhaInput = document.getElementById('page14-password').value


    if(validarUsuario(emailInput, senhaInput)){
        document.getElementById('screen2').classList.remove('hide')
        document.getElementById('screen1').classList.add('hide')
    }
    else{
        document.getElementById('invalid-user').classList.remove('hide')
    }

}

function validarUsuario(email,senha){
    let usuarioEncontrado = false
    usuariosCadastrados.forEach(u=>{

        if(u.email == email && u.senha==senha){
            usuarioEncontrado = true
        }
    })

    return usuarioEncontrado
}