function getPessoas(){
    let pessoas = []
    if(localStorage.getItem('pessoas')){
        pessoas = JSON.parse(localStorage.getItem('pessoas'))
    }

    return pessoas
}

function salvarNovo(){
    const form = document.getElementById('page12-form')
    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit',(e)=>e.preventDefault())

    let pessoas = getPessoas()
    let thisPessoa = gererateObj(".page12-input")
    
    pessoas.push(thisPessoa)
    localStorage.setItem('pessoas',JSON.stringify(pessoas))
    form.submit()
}

function gererateObj(className){
    let pessoa = {}
    const input = document.querySelectorAll(className)
    input.forEach(element => {
        if(element.type!="date"){
            pessoa[element.name]=(element.value)
        }
        else{
            pessoa[element.name]=new Date(`${element.value}T00:00`)
        }
    });

    return pessoa
}

function consultarTabela(){
    const pessoas = getPessoas()
    const tbody = document.getElementById('tbody-s2')
    tbody.innerHTML=""
    let rows = 0

    pessoas.forEach(p=>{
        const row = tbody.appendChild(document.createElement('tr'))
        for(let i=0;i<6;i++){
            const td = row.appendChild(document.createElement('td'))
            switch(i){
                case 0:
                    td.innerText=p.nome
                    td.classList.add(`tbody-s2-row-${rows}`)
                    break
                case 1:
                    td.innerText=new Date(p.nascimento).toLocaleDateString()
                    td.classList.add(`tbody-s2-row-${rows}`)
                    break
                case 2:
                    td.innerText=p.email
                    td.classList.add(`tbody-s2-row-${rows}`)
                    break
                case 3:
                    td.innerText=p.telefone
                    td.classList.add(`tbody-s2-row-${rows}`)
                    break
                case 4:
                    td.innerText="Editar"
                    td.classList.add("page12-actions")
                    td.setAttribute('onclick',`editar(${rows})`)
                    break
                case 5:
                    td.innerText="Excluir"
                    td.classList.add("page12-actions")
                    td.setAttribute('onclick',`remover(${rows})`)
                    break
            }
        }
        rows++
    })
    changeScreenVisibility(1)
}

function voltar(){
    changeScreenVisibility(3)
}

function consultarAniversariantes(){
    changeScreenVisibility(2)

    let listMes = []
    let pessoas = getPessoas()
    const tbody = document.getElementById('tbody-s3')
    tbody.innerHTML=""

    pessoas.forEach(element => {
        const date = new Date(element.nascimento)
        const month = date.getMonth()
        const dia = date.getDate()


        if(month==new Date().getMonth()){
            const row = tbody.appendChild(document.createElement('tr'))
            if(dia<new Date().getDate()){
                row.classList.add('page12-passado')
            }
            else if(dia>new Date().getDate()){
                row.classList.add('page12-futuro')
            }
            else{
                row.classList.add('page12-hoje')
            }

            for(let i=0; i<2; i++){
                const td = row.appendChild(document.createElement('td'))

                switch(i){
                    case 0:
                        td.innerText = element.nome
                        break
                    case 1:
                        td.innerText=new Date(element.nascimento).toLocaleDateString()
                        break
                }
            }
        }
    });
}

function remover(num){
    let pessoas = getPessoas()
    pessoas.splice(num,1)
    localStorage.setItem('pessoas', JSON.stringify(pessoas))
    consultarTabela()
}

function editar(num){
    let n = 0
    document.querySelectorAll(`.tbody-s2-row-${num}`).forEach(e=>{
        if(n!=1){
            document.getElementsByClassName('page12-input-edit')[n].setAttribute('value',e.innerHTML)
        }
        else{
            let string = e.innerHTML
            string = string.substring(6,10)+"-"+string.substring(3,5)+"-"+ string.substring(0,2)
            document.getElementsByClassName('page12-input-edit')[n].setAttribute('value',string)
        }
        n++
    })
    document.getElementById('btn-toast').setAttribute('data-num',num)
    document.getElementById('edit-toast').classList.remove('hide')
    document.getElementById('pages').classList.add('on-toast')
}

function closeToast(){
    document.getElementById('edit-toast').classList.add('hide')
    document.getElementById('pages').classList.remove('on-toast')
}

function salvarEdicao(details){
    const num = Number(details.dataset.num)

    const pessoas = getPessoas()
    const newPessoa = gererateObj(".page12-input-edit")
    pessoas.splice(num,1,newPessoa)
    localStorage.setItem('pessoas',JSON.stringify(pessoas))
    closeToast()
    consultarTabela()
}

function changeScreenVisibility(num){
    const bVoltar = document.getElementById('button-voltar')
    const bTabela = document.getElementById('button-consultar-tabela')
    const bAniversariantes = document.getElementById('button-consultar-aniversariantes')

    const s1 = document.getElementById('page12-screen1')
    const s2 = document.getElementById('page12-screen2')
    const s3 = document.getElementById('page12-screen3')

    switch(num){
        case 1: //consultar tabela
                bVoltar.classList.remove('hide')
                bAniversariantes.classList.remove('hide')
                bTabela.classList.add('hide')
                s1.classList.add('hide')
                s2.classList.remove('hide')
                s3.classList.add('hide')
            break
        case 2: //consultar aniversariantes
                bVoltar.classList.remove('hide')
                bAniversariantes.classList.add('hide')
                bTabela.classList.remove('hide')
                s1.classList.add('hide')
                s2.classList.add('hide')
                s3.classList.remove('hide')
            break
        case 3: //voltar
                bVoltar.classList.add('hide')
                bAniversariantes.classList.remove('hide')
                bTabela.classList.remove('hide')
                s1.classList.remove('hide')
                s2.classList.add('hide')
                s3.classList.add('hide')
            break
    }
}
