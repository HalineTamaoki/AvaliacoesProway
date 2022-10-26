function fazerTabuada(){
    const form = document.getElementById('page9-form')
    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit',(e)=>e.preventDefault())
    const num = Number(document.getElementById('page9-input').value)
    document.getElementById('page-9-result').classList.remove('hide')
    inserirNaTabela(num)
}

const inserirNaTabela= function(num){
    const tbody = document.getElementById('page-9-tbody')
    tbody.innerHTML=""
    document.getElementById('page9-result-span').innerHTML=num
    const row = tbody.appendChild(document.createElement('tr'))

    for(let i=1;i<11;i++){
        const newRow = row.appendChild(document.createElement('td'))
        newRow.innerText=i*num
    }
    
}