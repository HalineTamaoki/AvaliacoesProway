function verMenorValor(){
    const form = document.getElementById('page7-form')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let menor = Math.min(num1,num2,num3)

    document.getElementById('page7-result').classList.remove('hide')
    document.getElementById('page7-result-span').innerHTML=menor
}