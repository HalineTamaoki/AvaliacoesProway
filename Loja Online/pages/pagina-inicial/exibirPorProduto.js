function getProdutos (){
    let produtos = []

    if(localStorage.getItem('produtos')){
        produtos = JSON.parse(localStorage.getItem('produtos'))
    }

    return produtos
}

function getPorSegmento(seg){
    let lista = []

    getProdutos().forEach(i => {
        if(i.segmento==seg){
            lista.push(i)
        }
    });

    return lista
}

function montarTxt(p,i){
    let txt2 = ""
    
    if(p.estoque>0){
        txt2 = `<button onclick="adicionarAoCarrinho(${p.id},${i})">Adicionar ao carrinho</button>`
    }
    else{
        txt2 = '<p class="produto-p-esgotado">ESGOTADO</p>'
    }

    let txt = `
        <div class="produto ${p.estoque>0?"":"produto-esgotado"}" id="produto-id-${p.id}">
            <div>
                <img src="./images/produtos/${p.id}.jpg" alt="${p.nome}"/>
                <p>${p.nome}</p>
                <p>R$${Number(p.preco).toFixed(2)}</p>
            </div>
            <div>
                ${txt2}
            </div>
        </div>
    `

    return txt
}

function displayPorSegmento(){    
    let txt = ''

    let input = document.querySelectorAll('input[name="input-segmento"]:checked')

    if(input.length>0){
        input.forEach(i=>{
            let num = 0 

            getPorSegmento(i.value).forEach(p=>{
                txt +=montarTxt(p, num)
                num++
            })
        })
    
        document.getElementsByClassName('custom-produtos-container')[0].innerHTML=txt
    }
    else{
        window.location.reload()
    }
}

function displayPorProduto(){
    document.getElementById('form-pesquisa').addEventListener('submit',e=>e.preventDefault())
    const pesquisa = document.getElementsByClassName('custom-input')[0].value
    let txt = ''
    let num = 0 
    document.querySelectorAll('input[name="input-segmento"]:checked').forEach(e=>{
        e.checked = false
    })
    
    getProdutos().forEach(p=>{
        if(p.nome.toLowerCase().includes(pesquisa.toLowerCase())){
            txt += montarTxt(p, num)
            num++
        }
    })

    if(txt==''){
        txt = `<div class="erro-pesquisa">
                <h1>Não encontramos nenhum produto com esse nome</h1>
                <img src="./images/erro-pesquisa.png">
                </div>`

        setTimeout(()=>{
            window.location.reload()
        },2000)
    }
    document.getElementsByClassName('custom-produtos-container')[0].innerHTML=txt

}