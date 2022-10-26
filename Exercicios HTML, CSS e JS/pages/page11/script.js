var num = 0

function getProdutosList(){
    let produtos = []

    if(localStorage.getItem('produtos')!=null){
        produtos = JSON.parse(localStorage.getItem('produtos'))
    }

    return produtos
}

function showTable(){
    let produtos = getProdutosList()
    if(produtos.length){
        document.getElementById('page11-result-screen').classList.remove('hide')
        produtos.forEach(element => {
            addToTable(element)
        });
    }
}

function salvarDados(){
    const form = document.getElementById('page11-form')
    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit',(e)=>e.preventDefault())

    let produtos = getProdutosList()
    if(!produtos.length){
        document.getElementById('page11-result-screen').classList.remove('hide')
    }

    let thisProduto = {}
    let input = document.querySelectorAll('.itens')

    input.forEach(element => {
        if(element.type!="number"){
            thisProduto[element.name]=element.value
        }
        else{
            thisProduto[element.name]=Number(element.value)
        }
    });

    produtos.push(thisProduto)
    localStorage.setItem('produtos', JSON.stringify(produtos))
    addToTable(thisProduto)
}

function addToTable(obj){
    const row = document.getElementById('tbody').appendChild(document.createElement('tr'))
    for(let i=0;i<3;i++){
        const newTd = row.appendChild(document.createElement('td'))

        switch(i){
            case 0:
                newTd.innerText=obj.produto
                break
            case 1:
                newTd.innerText=obj.marca
                break
            case 2:
                newTd.innerText=obj.valor
                break
        }
    }
    
    num++

    document.getElementById('page11-qtde-result').innerHTML=num
}