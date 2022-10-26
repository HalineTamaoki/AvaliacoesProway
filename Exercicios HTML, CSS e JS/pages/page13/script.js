function registraAluno(){
    const form = document.getElementById('page13-form')
    const generoSelect = document.getElementById('genero')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit',e=>e.preventDefault())

    let aluno = {}
    let alunos = getAlunos()
    
    document.querySelectorAll('.page13-input').forEach(input=>{
        aluno[input.name]=input.value
    })
    aluno.genero = generoSelect.options[generoSelect.selectedIndex].value

    alunos.push(aluno)
    localStorage.setItem('alunos',JSON.stringify(alunos))
    form.submit()
}

function getAlunos (){
    let alunos = []

    if(localStorage.getItem('alunos')){
        alunos = JSON.parse(localStorage.getItem('alunos'))
    }

    return alunos
}

function countGenero(){
    let alunos = getAlunos()
    let countMulheres = 0
    let countHomens = 0

    alunos.forEach(a=>{
        if(a.genero == "Feminino"){
            countMulheres++
        }
        else{
            countHomens++
        }
    })

    return [countHomens, countMulheres]
}

function countSituacao(){
    //Até 3 reprova, entre 3 e 5 em exame, acima de 5 aprova

    let alunos = getAlunos()
    let countAprovado = 0
    let countExame = 0
    let countReprovado = 0

    alunos.forEach(a=>{
        let media = (Number(a.nota1)+Number(a.nota2))/2
        if(media<3){
            countReprovado ++
        }
        else if(media<5){
            countExame++
        }
        else{
            countAprovado++
        }
    })

    return[countAprovado, countExame,countReprovado]
}

function verMaiorMedia(){
    let alunos = getAlunos()
    let alunosMaiorMedia = []
    let maiorMedia = 0

    alunos.forEach(a=>{
        let media = (Number(a.nota1)+Number(a.nota2))/2

        if(media>=maiorMedia){
            if(media>maiorMedia){
                alunosMaiorMedia = []
                maiorMedia = media
            }
    
            alunosMaiorMedia.push({nome:a.nome,media:media.toFixed(2)})
        }
    })

    return alunosMaiorMedia
}

function preencheTabelas(){
    let i = 0 
    let generos = countGenero()

    document.querySelectorAll(('.pg13-result1')).forEach(e=>{
        e.innerHTML = generos[i]
        i++
    })

    i = 0 
    let porcHomens = 0

    document.querySelectorAll(('.pg13-result2')).forEach(e=>{
        if(generos[0]==0 && generos[1]==0){
            e.innerHTML = 0
        }

        else{
            if(i==0){
                porcHomens = (generos[0]/(generos[0]+generos[1])*100).toFixed(2)
                e.innerHTML = porcHomens 
            }
            else{
                e.innerHTML = (100 - porcHomens).toFixed(2)
            }
            i++
        }
    })

    i = 0 
    let situacao = countSituacao()
    document.querySelectorAll(('.pg13-result3')).forEach(e=>{
        e.innerHTML = situacao[i]
        i++
    })

    i = 0 
    document.querySelectorAll(('.pg13-result4')).forEach(e=>{
        if(situacao[0]==0 && situacao[1]==0 && situacao[2]==0){
            e.innerHTML = 0
        }

        else{
            e.innerHTML = (situacao[i]/(situacao[0]+situacao[1]+situacao[2])*100).toFixed(2)
            i++
        }
    })
    verMaiorMedia().forEach(e=>{
        let txt = `<td>${e.nome}</td>
                    <td>${e.media}</td>`
        document.getElementById('page13-result5').appendChild(document.createElement('tr')).innerHTML = txt
    })
}