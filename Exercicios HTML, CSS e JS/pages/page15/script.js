const usuariosCadastrados = [
    {
        email:"a@gmail.com",
        senha:"1234",
    },
    {
        email:"b@gmail.com",
        senha:"senha",
    }
]

function autentificar(){
    const form = document.getElementById('page15-form')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())

    const emailInput = document.getElementById('page15-email').value
    const senhaInput = document.getElementById('page15-password').value


    if(validarUsuario(emailInput, senhaInput)){
        goToPage(2)
    }

}

var tentativas = 0;
function validarUsuario(email,senha){
    let usuarioEncontrado = false
    usuariosCadastrados.forEach(u=>{
        if(u.email == email && u.senha==senha){
            usuarioEncontrado = true
            tentativas = 0
        }
    })

    if(!usuarioEncontrado){
        tentativas++
        if(tentativas<3){
            document.getElementById('s1-invalid-user').classList.remove('hide')
            document.getElementById('invalid-user-tentativas').innerText=(3-tentativas)
        }
        else{
            tentativas = 0
            document.getElementById('s1-invalid-user').classList.add('hide')
            bloquearBotao()
        }
    }

    return usuarioEncontrado
}

function bloquearBotao(){
    document.getElementById('s1-aguarde').classList.remove('hide')
    document.getElementById('s1-btn-login').setAttribute('disabled','disabled')
    document.getElementById('page15-email').setAttribute('disabled','disabled')
    document.getElementById('page15-password').setAttribute('disabled','disabled')

    setTimeout(()=>{
        document.getElementById('s1-aguarde').classList.add('hide')
        document.getElementById('s1-btn-login').removeAttribute('disabled')
        document.getElementById('page15-email').removeAttribute('disabled')
        document.getElementById('page15-password').removeAttribute('disabled')
    }, 15000) 

    let seg = 0
    document.getElementById('s1-aguarde-span').innerText=15

    const timer = setInterval(() => {
        seg++
        document.getElementById('s1-aguarde-span').innerText=15-seg
    }, 1000);

    if(seg==15){
        clearInterval(timer)
    }

}

function goToPage(pageNum){
    let i = 1
    document.querySelectorAll('.pages').forEach(e=>{
        if(i!=pageNum){
            e.classList.add('hide')
        }
        else{
            e.classList.remove('hide')
        }
        i++
    })
    if(pageNum==3){
        preencherTabelaMarcas()
    }
    if(pageNum==4){
        preencherTabelaProdutos()
    }
}

function toogleMarcaCadastro(){
    document.getElementById('page3-btn-principais').classList.toggle('hide')
    document.getElementById('page3-screen-cadastrar').classList.toggle('hide')
    document.getElementById('page3-table').classList.toggle('hide')
    preencherTabelaMarcas()
}

function getMarcas(){
    let marcas = []

    if(localStorage.getItem('marcas')){
        marcas = JSON.parse(localStorage.getItem('marcas'))
    }

    return marcas
}

function getProdutos(){
    let produtos = []

    if(localStorage.getItem('produtos')){
        produtos = JSON.parse(localStorage.getItem('produtos'))
    }

    return produtos
}

function cadastrarMarca(){
    form = document.getElementsByClassName('form-cadastro')[0]
    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit',e=>{e.preventDefault()})

    let marca = document.getElementsByClassName('nome-marca')[0].value
    let message = document.getElementsByClassName('cadastro-msg')[0]
    let btnCadastro = document.getElementsByClassName('btn-cadastrar')[0]

    if(!conferirSeMarcaExiste(marca)){
        salvarMarcaStorage(marca)
        
        message.innerHTML='Marca cadastrada com sucesso'
        btnCadastro.setAttribute('disabled','disabled')

        setTimeout(()=>{
            btnCadastro.removeAttribute('disabled')
            toogleMarcaCadastro()
            message.classList.add('hide')
        },1000)
    }
    else{
        message.innerHTML='Essa marca já existe'
    }
    message.classList.remove('hide')
}

function salvarMarcaStorage(marca){
    let marcas = getMarcas()
    marcas.push(marca)

    localStorage.setItem('marcas',JSON.stringify(marcas))
}
function conferirSeMarcaExiste(nome){
    let existe = false
    getMarcas().forEach(e=>{
        if(e.toLowerCase()==nome.toLowerCase()){
            existe=true
        }
    })   
    return existe
}

function preencherTabelaMarcas(){
   let marcas = getMarcas()
    const tbody = document.getElementById('page3-tbody')
    tbody.innerHTML=""
    let i = 0
    let txt = ""
    if(marcas.length){
        marcas.forEach(m=>{
            txt += `
                <tr id="row-marca-${i}">
                    <td>${m}</td>
                    <td class="page15-actions" onclick="removerMarca(${i})">Excluir</td>
                </tr>`
            i++
        }
    )
    }
    else{
        txt = '<tr><td colspan="2">Nenhuma marca cadastrada</td></tr>'
    }
    tbody.innerHTML=txt
}

function removerMarca(num){
    let marcas = getMarcas()
    const nomeMarca = marcas[num]
    if(!existeProdutosMarca(nomeMarca)){
        marcas.splice(num,1)
        localStorage.setItem('marcas', JSON.stringify(marcas))
        goToPage(3)
    }
    else{
        const row = document.getElementById(`row-marca-${num}`)
        let txt = row.innerHTML.concat(`<td class="error-td" id="tempRow">Não foi possível remover pois existem produtos dessa marca</td>`)
        row.innerHTML=txt
        setTimeout(()=>{
            document.getElementById('tempRow').remove()
        },800)
    }

}

function existeProdutosMarca(marca){
    let existe = false
    getProdutos().forEach(p=>{
        if(p.marca.toLowerCase()==marca.toLowerCase()){
            existe=true
        }
    })

    return existe
}

function toogleProdutoCadastro(){
    document.getElementById('page4-btn-principais').classList.toggle('hide')
    document.getElementById('page4-screen-cadastrar').classList.toggle('hide')
    document.getElementById('page4-table').classList.toggle('hide')
    preencherTabelaProdutos()
}


function cadastrarProduto(){
    form = document.getElementsByClassName('form-cadastro')[1]
    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit',e=>{e.preventDefault()})

    let marca = document.getElementsByClassName('nome-marca')[1].value
    let message = document.getElementsByClassName('cadastro-msg')[1]
    let btnCadastro = document.getElementsByClassName('btn-cadastrar')[1]
    let nome = document.getElementById('nome-produto').value
    let valor = Number(document.getElementById('valor-produto').value)

    if(!conferirSeProdutoExiste(nome, marca)){
        let produtos = getProdutos()
        produtos.push({
            marca,
            nome,
            valor
        })
        localStorage.setItem('produtos',JSON.stringify(produtos))

        if(!conferirSeMarcaExiste(marca)){
            salvarMarcaStorage(marca)
        }
        
        message.innerHTML='Produto cadastrado com sucesso'
        btnCadastro.setAttribute('disabled','disabled')

        setTimeout(()=>{
            btnCadastro.removeAttribute('disabled')
            toogleProdutoCadastro()
            message.classList.add('hide')
            form.reset()
        },1000)
    }
    else{
        message.innerHTML='Já existe um produto com esse nome e essa marca'
    }
    message.classList.remove('hide')
}

function conferirSeProdutoExiste(nome,marca){
    let existe = false
    getProdutos().forEach(e=>{
        if(e.nome.toLowerCase()==nome.toLowerCase()&&e.marca.toLowerCase()==marca.toLowerCase()){
            existe=true
        }
    })   
    return existe
}

function preencherTabelaProdutos(){
    let produtos = getProdutos()
     const tbody = document.getElementById('page4-tbody')
     tbody.innerHTML=""
     let i = 0
     let txt = ""
     if(produtos.length){
         produtos.forEach(p=>{
             txt += `
                 <tr id="row-produto-${i}">
                     <td>${p.nome}</td>
                     <td>${p.marca}</td>
                     <td>${p.valor}</td>
                     <td class="page15-actions" onclick="removerProduto(${i})">Excluir</td>
                 </tr>`
             i++
         }
     )
     }
     else{
         txt = '<tr><td colspan="4">Nenhum produto cadastrado</td></tr>'
     }
     tbody.innerHTML=txt
 }

function removerProduto(num){
    let produto = getProdutos()
    produto.splice(num,1)
    localStorage.setItem('produtos', JSON.stringify(produto))
    goToPage(4)
}