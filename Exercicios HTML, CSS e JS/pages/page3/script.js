const descricoes = [
    {
        estado:"SE",
        regiao:"Nordeste",
        curiosidade:"É conhecida pelas praias, incluindo a Praia de Atalaia, ao centro. Junto à praia, o Oceanário de Aracaju, em forma de tartaruga, possui arraias, tubarões, enguias e tartarugas marinhas, além de exposições práticas.",
        foto: "./Images/aracaju.png"
    },
    {
        estado: "PA",
        regiao: "Norte",
        curiosidade:"É uma cidade portuária e a porta de entrada para a região do Baixo Amazonas do Brasil. Junto à Baía do Guajará, o bairro da Cidade Velha à beira-rio preserva a arquitetura colonial portuguesa, das igrejas e casas com azulejos coloridos a uma fortificação do século XVII conhecida como Forte do Castelo.",
        foto: "./Images/belem.png",
    },
    {
        estado: "MG",
        regiao: "Sudeste",
        curiosidade: "Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão.",
        foto: "./Images/beloHorizonte.png",
    },
    {
        estado: "RR",
        regiao: "Norte",
        curiosidade: "Concentrando cerca de dois terços dos habitantes do estado, situa-se na margem direita do rio Branco.",
        foto: "./Images/boaVista.png",
    },
    {
        estado: "DF",
        regiao: "Centro-Oeste",
        curiosidade: "É uma cidade planeada que se distingue pela sua arquitetura branca e moderna, essencialmente concebida por Oscar Niemeyer.",
        foto: "./Images/brasilia.png",
    },
    {
        estado: "MS",
        regiao: "Centro-Oeste",
        curiosidade: "Reduto histórico de divisionistas entre o sul e o norte, Campo Grande foi fundada por mineiros, que vieram aproveitar os campos de pastagens nativas e as águas cristalinas da região dos cerrados.",
        foto: "./Images/campoGrande.png",
    },
    {
        estado: "MT",
        regiao: "Centro-Oeste",
        curiosidade: " É conhecida como a porta de entrada para as zonas húmidas do Pantanal do Norte.",
        foto: "./Images/cuiaba.png",
    },
    {
        estado: "PR",
        regiao: "Sul",
        curiosidade: "Conhecida como centro cultural, Curitiba abriga vários espaços para apresentações, como a Ópera de Arame, uma estrutura de aço tubular com telhado transparente, e o enorme Centro Cultural Teatro Guaíra.",
        foto: "./Images/curitiba.png",
    },
    {
        estado: "SC",
        regiao: "Sul",
        curiosidade: "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",
        foto: "./Images/florianopolis.png",
    },
    {
        estado: "CE",
        regiao: "Nordeste",
        curiosidade: "A cidade é conhecida por suas praias, com falésias vermelhas, palmeiras, dunas e lagoas.",
        foto: "./Images/fortaleza.png",
    },
    {
        estado: "GO",
        regiao: "Centro-Oeste",
        curiosidade: "Com uma área de aproximadamente 728,84 km², possui uma geografia contínua, com poucos morros e baixadas, caracterizada por ser uma região do Planalto Central do Brasil.",
        foto: "./Images/goiania.png",
    },
    {
        estado: "PB",
        regiao: "Nordeste",
        curiosidade: "A sua cidade velha é conhecida pela arquitetura barroca e art nouveau. A igreja de São Francisco, do século XVI, tem azulejos portugueses pintados no pátio e uma capela ornamentada com ouro.",
        foto: "./Images/joaoPessoa.png",
    },
    {
        estado: "AP",
        regiao: "Norte",
        curiosidade: " Sua população estimada em 2021 é de 522 357 habitantes, sendo o 51° município mais populoso do Brasil e o quinto mais populoso da Região Norte.",
        foto: "./Images/macapa.png",
    },
    {
        estado: "AL",
        regiao: "Nordeste",
        curiosidade: "O seu centro histórico alberga casas coloniais cor de pastel, uma catedral do século XIX e o Museu Théo Brandão de Antropologia e Folclore, localizado numa mansão renovada à beira-mar.",
        foto: "./Images/maceio.png",
    },
    {
        estado: "AM",
        regiao: "Norte",
        curiosidade: "Trata-se de um ponto de partida importante próximo à Floresta Amazônica.",
        foto: "./Images/manaus.png",
    },
    {
        estado: "RN",
        regiao: "Nordeste",
        curiosidade: "É conhecida pelas extensas dunas de areia costeiras e pelo Forte dos Reis Magos, em forma de estrela, uma fortaleza portuguesa do século XVI na foz do rio Potengi.",
        foto: "./Images/natal.png",
    },
    {
        estado: "TO",
        regiao: "Norte",
        curiosidade: "A cidade foi fundada em 20 de maio de 1989, logo após a criação do Tocantins pela Constituição de 1988.",
        foto: "./Images/palmas.png",
    },
    {
        estado: "RS",
        regiao: "Sul",
        curiosidade: "Na praça principal, a Praça Marechal Deodoro, encontra-se a Catedral Metropolitana, de estilo renascentista, com murais religiosos no exterior.",
        foto: "./Images/portoAlegre.png",
    },
    {
        estado: "RO",
        regiao: "Norte",
        curiosidade: "Com uma população de 548 952 habitantes, conforme estimativas do Instituto Brasileiro de Geografia e Estatística, é o município mais populoso de Rondônia e o terceiro mais populoso da Região Norte.",
        foto: "./Images/portoVelho.png",
    },
    {
        estado: "PE",
        regiao: "Nordeste",
        curiosidade: "Distingue-se pelos seus vários rios, pontes, ilhéus e penínsulas. Recife Antigo, na própria ilha junto ao porto, é o centro histórico da cidade antiga que data do século XVI.",
        foto: "./Images/recife.png",
    },
    {
        estado: "AC",
        regiao: "Norte",
        curiosidade: "É a capital mais ocidental do Brasil, a 3.030 quilômetros de distância de Brasília, capital federal,[2] Rio Branco localiza-se às margens do Rio Acre.",
        foto: "./Images/rioBranco.png",
    },
    {
        estado: "RJ",
        regiao: "Sudeste",
        curiosidade: "É uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar.",
        foto: "./Images/rioDeJaneiro.png",
    },
    {
        estado: "BA",
        regiao: "Nordeste",
        curiosidade: "É conhecida pela arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral tropical.",
        foto: "./Images/salvador.png",
    },
    {
        estado: "MA",
        regiao: "Nordeste",
        curiosidade: "No centro histórico da cidade encontra-se o bairro de Praia Grande, na área circundante da rua de Portugal, marcado por edifícios coloniais com azulejos distintos e varandas em ferro fundido.",
        foto: "./Images/saoLuis.png",
    },
    {
        estado: "SP",
        regiao: "Sudeste",
        curiosidade: "É principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul.",
        foto: "./Images/saoPaulo.png",
    },
    {
        estado: "PI",
        regiao: "Nordeste",
        curiosidade: "É a única capital da Região Nordeste que não se localiza no litoral, distando 343 km do Oceano Atlântico.",
        foto: "./Images/teresina.png",
    },
    {
        estado: "ES",
        regiao: "Sudeste",
        curiosidade: "É conhecida pelas praias arenosas como Camburi e Curva da Jurema.",
        foto: "./Images/vitoria.png",
    },
]

function mostrarCidade(){
    const cidades = document.getElementById("page3-select")
    let cidadeSelecionada = cidades.selectedIndex

    if(cidadeSelecionada!=0){
        document.getElementById('page3-result').classList.remove("hide")
        document.getElementById('page3-result-span').innerHTML = cidades.options[cidadeSelecionada].value
        document.getElementById('page3-estado').innerHTML = descricoes[cidadeSelecionada-1].estado
        document.getElementById('page3-regiao').innerHTML = descricoes[cidadeSelecionada-1].regiao
        document.getElementById('page3-curiosidade').innerHTML = descricoes[cidadeSelecionada-1].curiosidade
        document.getElementById('page3-image').src=descricoes[cidadeSelecionada-1].foto

    }
    else{
        document.getElementById('page3-result').classList.add("hide")
    }
}
