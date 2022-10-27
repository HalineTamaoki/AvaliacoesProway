function voltarCompras(){
    window.location.href="../../index.html"
}

function getCarrinho(){
    let carrinho = []

    if(localStorage.getItem('carrinho')){
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
    }

    return carrinho
}

function adicionarCarrinho(id){
    let carrinho = getCarrinho()
    let pos = encontrarPosicaoProduto(id)
    let produto = carrinho[pos]
    let quantidade = Number(produto.quantidade)+1
    preco = Number(produto.preco)*quantidade

    if(quantidade<Number(produto.estoque)+1){
        produto.quantidade=quantidade
        carrinho.splice(pos,1,produto)
        localStorage.setItem('carrinho',JSON.stringify(carrinho))
        document.getElementsByClassName('produto-carrinho-quantidade')[pos].innerHTML=quantidade
        document.getElementsByClassName('produto-carrinho-p-preco')[pos].innerHTML=`R$${preco.toFixed(2)}`
        document.getElementById('valor-total').innerHTML=verValorTotal()
    }
    else{
        const divTemp = document.getElementsByClassName('produto-carrinho-descricao')[pos].appendChild(document.createElement('div'))
        divTemp.setAttribute('id',`erro-msg-${id}`)
        divTemp.innerHTML=`
            <p class="produto-carrinho-p-msg">Erro ao acrescentar mais. Não há itens disponíveis no estoque</p>
        `
        setTimeout(() => {
            document.getElementById(`erro-msg-${id}`).remove()
        }, 2000);
    }
}

function removerCarrinho(id){
    let carrinho = getCarrinho()
    let pos = encontrarPosicaoProduto(id)
    let produto=carrinho[pos]
    let quantidade = Number(produto.quantidade)-1
    preco = Number(produto.preco)*quantidade

    if(quantidade>0){
        produto.quantidade=quantidade
        carrinho.splice(pos,1,produto)
        localStorage.setItem('carrinho',JSON.stringify(carrinho))
        document.getElementsByClassName('produto-carrinho-quantidade')[pos].innerHTML=quantidade
        document.getElementsByClassName('produto-carrinho-p-preco')[pos].innerHTML=`R$${preco.toFixed(2)}`
        document.getElementById('valor-total').innerHTML=verValorTotal()
    }
    else{
        removerAll(id)
    }
}

function removerAll(id){
    let carrinho = getCarrinho()
    let pos = encontrarPosicaoProduto(id)
    carrinho[pos].quantidade = 0
    carrinho.splice(pos,1)
    localStorage.setItem('carrinho',JSON.stringify(carrinho))
    document.getElementsByClassName('produto-carrinho-container')[pos].remove()
    document.getElementById('valor-total').innerHTML=verValorTotal()

    if(!getCarrinho().length){
        document.getElementById('carrinho-container').innerHTML=`            
        <div class="carrinho-vazio">
            <p>Seu carrinho está vazio</p>
            <img src="../../images/erro-pesquisa.png"/>
        </div>`
        document.getElementById('finalizar').classList.add('hide')
    }
}

function encontrarPosicaoProduto(id){
    let carrinho = getCarrinho()
    let posProduto
    let pos = 0

    carrinho.forEach(p => {
        if(p.id==id){
            posProduto = pos
        }
        pos++
    });

    return posProduto
}

function verValorTotal(){
    let valorTotal = 0
    getCarrinho().forEach(p=>{
        valorTotal+=Number(p.quantidade)*Number(p.preco)
    })
    return valorTotal.toFixed(2)
}

function finalizarCompra(){
    localStorage.removeItem('carrinho')
    window.location.href="../finalizar/index.html"
}