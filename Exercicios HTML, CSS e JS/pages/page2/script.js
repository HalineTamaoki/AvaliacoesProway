function calculaValor (){        
    const form = document.getElementById('page2-form')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())
    
    let valor = $('#page2-valor').val()
    let formaPagamento = $('input[name="pagamento"]:checked').val()

    if(valor>=100 && formaPagamento=="aVista"){
        valor *= 0.9
    }

    $('#page2-result-span').html(valor)
    $('#page2-result').toggleClass("hide")
    $('#page2-valor').prop('disabled',true)
    $('#page2-avista').prop('disabled',true)
    $('#page2-aprazo').prop('disabled',true)
    $('#button-enviar').toggleClass("hide")
}

function enviarNovo(){
    $('#page2-result').toggleClass("hide")
    $('#page2-valor').prop('disabled',false)
    $('#page2-avista').prop('disabled',false)
    $('#page2-aprazo').prop('disabled',false)
    $('#button-enviar').toggleClass("hide")

    $('#page2-form').trigger('reset')
}