function count(){
    const itens = document.querySelectorAll('input[name="itens"]:checked')
    document.getElementById('page4-total-itens').innerHTML=itens.length
}