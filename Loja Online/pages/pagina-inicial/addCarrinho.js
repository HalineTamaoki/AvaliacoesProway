function getCarrinho (){
    let carrinho = []

    if(localStorage.getItem('carrinho')){
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
    }

    return carrinho
}

function getProdutos(){
    let produtos=[]

    if(localStorage.getItem('produtos')){
        produtos=JSON.parse(localStorage.getItem('produtos'))
    }

    return produtos
}

function adicionarAoCarrinho(id, posicao){
    let carrinho = getCarrinho()
    let produto
    let quantidade = 1
    let i = 0
    let pos=-1
    let msg = ''
    
    getProdutos().forEach(p => {
        if(Number(p.id)==id){
            produto = p
        }
    });

    carrinho.forEach(c=>{
        if(Number(c.id)==Number(produto.id)){
            quantidade += c.quantidade
            pos = i
        }
        i++
    })

    if(quantidade<produto.estoque+1){
        produto.quantidade = quantidade
        if(pos>-1){
            carrinho.splice(pos,1,produto)
        }
        else{
            carrinho.push(produto)
        }
    
        localStorage.setItem('carrinho',JSON.stringify(carrinho))
        msg = `<p class="produto-msg">Produto adicionado ao carrinho</p>`
    }
    else{
        msg = `<p class="produto-msg">Você já atingiu a quantidade máxima que tem no estoque</p>`
    }
    
    const divTemp = document.getElementsByClassName('produto')[posicao].appendChild(document.createElement('div'))
    divTemp.setAttribute('id',`produto-msg-${produto.id}`)
    divTemp.innerHTML= msg

    setTimeout(() => {
        document.getElementById(`produto-msg-${produto.id}`).remove()
    }, 1000);

}