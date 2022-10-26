const cotacao = {
    dolar: 5.27,
    euro: 5.21,
    libra: 5.96
}

function converter(){
    const form = document.getElementById('page5-form')
    let moeda1
    let moeda2
    let novoValor

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())

    let valor = document.getElementById('page5-valor').value
    let tipo = Number(document.querySelector('input[name=moeda]:checked').value)
    document.getElementById('page5-result').classList.remove('hide')
    switch(tipo){
        case 1:
            novoValor = valor * cotacao.dolar
            moeda1= "Dólar"
            moeda2= "Real"
            break
        case 2:
            novoValor = valor / cotacao.dolar
            moeda1= "Real"
            moeda2= "Dólar"
            break
        case 3:
            novoValor = valor * cotacao.euro
            moeda1="Euro"
            moeda2= "Real"
            break    
        case 4:
            novoValor = valor / cotacao.euro
            moeda1="Real"
            moeda2="Euro"
            break
        case 5:
            novoValor = valor * cotacao.libra
            moeda1="Libra"
            moeda2="Real"
            break
        case 6:
            novoValor = valor / cotacao.libra
            moeda1="Real"
            moeda2="Libra"
            break               
    }
    document.getElementById('page5-valor-original').innerHTML=`${moeda1}: ${valor}`
    document.getElementById('page5-valor-novo').innerHTML=`${moeda2}: ${novoValor.toFixed(2)}`
}