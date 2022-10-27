function getCarrinho(){
    let carrinho = []

    if(localStorage.getItem('carrinho')){
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
    }

    return carrinho
}

function displayCarrinho(){
    let carrinho = getCarrinho()
    let txt = ""

    if(carrinho.length){
        let soma = 0
    
        carrinho.forEach(p=>{
            let valorProduto = (Number(p.quantidade)*Number(p.preco)).toFixed(2)
            soma += Number(valorProduto)
            txt += `
                <div class="produto-carrinho-container">
                    <div>
                        <img src="../../images/produtos/${p.id}.jpg">
                    </div>
                    <div class="produto-carrinho-descricao">
                        <p>${p.nome}</p>
                    </div>
                    <div class="produto-carrinho-contagem">
                        <div>
                            <button onclick="removerCarrinho(${p.id})">-</button>
                            <p class="produto-carrinho-quantidade">${p.quantidade}</p>
                            <button onclick="adicionarCarrinho(${p.id})">+</button>
                        </div>
                        <button class="produto-carrinho-remover-btn" onclick="removerAll(${p.id})">Remover tudo</button>
                    </div>
                    <div>
                        <p class="produto-carrinho-p-preco">R$${valorProduto}</p>
                    </div>
                </div>
            `
        })
    
        document.getElementById('valor-total').innerHTML=soma.toFixed(2)
    }
    else{
        txt=`            
        <div class="carrinho-vazio">
            <p>Seu carrinho está vazio</p>
            <img src="../../images/erro-pesquisa.png"/>
        </div>`
        document.getElementById('finalizar').classList.add('hide')
    }

    document.getElementById('carrinho-container').innerHTML=txt

}