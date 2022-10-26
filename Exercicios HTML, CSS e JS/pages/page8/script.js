function converterHora(){
    const form = document.getElementById('page8-form')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())

    const input = document.getElementById('time-input')
    const timeZone = document.querySelector('input[name = "option"]:checked')
    const time = new Date(`1970-01-01T${input.value}:00${timeZone.value}`)
    const cidade = timeZone.dataset.nome

    const hour = time.getHours().toString()
    const min = time.getMinutes().toString()

    document.getElementById('page8-result').classList.remove('hide')
    document.getElementById('page8-result-span').innerHTML = `em ${cidade} é: 
        ${hour.length==2?hour:'0'+hour}h${min.length==2?min:'0'+min}min`
}