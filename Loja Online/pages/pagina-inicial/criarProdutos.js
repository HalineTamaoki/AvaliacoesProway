function getProdutos(){
    let produtos=[]

    if(localStorage.getItem('produtos')){
        produtos=JSON.parse(localStorage.getItem('produtos'))
    }

    return produtos
}

function exibirProdutos(){
    criarProdutos()
    displayProdutos()
}

function criarProdutos(){
    if(!getProdutos().lenght){
        let produtos = [
            {
                id: 1,
                nome:"Vestido Verde",
                preco:100,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 2,
                nome:"Vestido Florido",
                preco:130,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 3,
                nome:"Jeans Rasgado",
                preco:60,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 4,
                nome:"Calça Jovial",
                preco:80,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 5,
                nome:"Jeans Comportado",
                preco:150,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 6,
                nome:"Blusa Vermelha",
                preco:40,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 7,
                nome:"Blusa Branca",
                preco:50,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 8,
                nome:"Blusa Crochê",
                preco:80,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 9,
                nome:"Conjunto Verão",
                preco:200,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 10,
                nome:"Casaco Amarelo",
                preco:250,
                segmento:"Roupas",
                estoque:5
            },
            {
                id: 11,
                nome:"Bicicleta Rosa",
                preco:270,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 12,
                nome:"Bicicleta Azul",
                preco:270,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 13,
                nome:"Bicicleta Vermelha",
                preco:270,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 14,
                nome:"Boneca Gentil",
                preco:50,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 15,
                nome:"Boneca Bebê",
                preco:60,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 16,
                nome:"Boneca Arco Íris",
                preco:100,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 17,
                nome:"Monstro",
                preco:30,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 18,
                nome:"Duende",
                preco:20,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 19,
                nome:"Macaco",
                preco:70,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 20,
                nome:"Milho",
                preco:60,
                segmento:"Brinquedos",
                estoque:5
            },
            {
                id: 21,
                nome:"Geladeira Modelo A",
                preco:2000,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 22,
                nome:"Geladeira Modelo B",
                preco:1800,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 23,
                nome:"Fogão Azul",
                preco:1200,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 24,
                nome:"Fogão Branco",
                preco:600,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 25,
                nome:"Fogão Rosa",
                preco:1000,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 26,
                nome:"Microondas Cinza",
                preco:700,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 27,
                nome:"Microondas Branco",
                preco:1000,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 28,
                nome:"Microondas Panasonic",
                preco:800,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 29,
                nome:"TV 24 Polegadas",
                preco:2000,
                segmento:"Eletrodomesticos",
                estoque:5
            },
            {
                id: 30,
                nome:"TV Tubo",
                preco:5000,
                segmento:"Eletrodomesticos",
                estoque:5
            },
        ]

        localStorage.setItem('produtos', JSON.stringify(produtos))
    }
}

function displayProdutos(){
    let produtos = getProdutosDisponiveis()
    let listaRandomica = gerarListaRandomica(produtos.length)
    let i = 0

    for(let i=0;i<listaRandomica.length;i++){
        let n = listaRandomica[i]
        listaRandomica.splice(i,1,produtos[n])
    }

    let txt = ""
    listaRandomica.forEach(p=>{
        txt += `
            <div class="produto" id="produto-id-${p.id}">
                <div>
                    <img src="./images/produtos/${p.id}.jpg" alt="${p.nome}"/>
                    <p>${p.nome}</p>
                    <p>R$${Number(p.preco).toFixed(2)}</p>
                </div>
                <div>
                    <button onclick="adicionarAoCarrinho(${p.id},${i})">Adicionar ao carrinho</button>
                </div>
            </div>
        `
        i++
    })

    document.getElementsByClassName('custom-produtos-container')[0].innerHTML=txt
}

function gerarListaRandomica(number){
    let listDisplay = []

    while(listDisplay.length<12){
        let num = Math.floor(Math.random()*number)
        let existe = false 

        listDisplay.forEach(n => {
            if(n==num){
                existe = true
            }
        });

        if (!existe){
            listDisplay.push(num)
        }
    }

    return listDisplay
}

function getProdutosDisponiveis(){
    let listaDisponiveis = []
    getProdutos().forEach(p=>{
        if(Number(p.estoque)!=0){
            listaDisponiveis.push(p)
        }
    })
    return listaDisponiveis
}