function enviarVoto(){
    let votos = getVoteList()

    const form = document.getElementById('page10-form')
    if(!form.checkValidity){
        return
    }
    form.addEventListener('submit',(e)=>e.preventDefault())

    const escolha = Number(document.querySelector('input[name="candidatos"]:checked').value)
    votos[escolha-1].votos++

    localStorage.setItem('votos', JSON.stringify(votos))
}

function checkResults(){
    changeVisibility()
    const resultSection = document.getElementById('page10-results')
    resultSection.innerHTML=""

    let votos = getVoteList()
    let votosTotais = 0;
    let votosMaisVotado  = 0
    let maisVotado = []
    votos.forEach(element => {
        resultSection.appendChild(document.createElement('p')).innerHTML=`Votos ${element.nome}: ${element.votos}`
        votosTotais += element.votos
        if(element.votos>=votosMaisVotado){
            if(element.votos>votosMaisVotado){
                maisVotado = []
                votosMaisVotado=element.votos
            }
            maisVotado.push(element.nome)
        }
    });

    resultSection.appendChild(document.createElement('hr'))
    resultSection.appendChild(document.createElement('p')).innerHTML=`Votos totais: ${votosTotais}`
    let msg = "Candidato(s) com mais votos: "

    if(votosTotais>0){
        maisVotado.forEach(element => {
            msg += `${element}, `
        });
    
        msg = msg.substring(0,msg.length-2)    
    }
    else{
        msg += "Nenhum"
    }
    resultSection.appendChild(document.createElement('p')).innerHTML=msg
}

function changeVisibility(){
    document.getElementById('vote-screen').classList.toggle('hide')
    document.getElementById('results-screen').classList.toggle('hide')
}

function getVoteList(){
    let votos

    if(localStorage.getItem('votos')!=null){
        votos = JSON.parse(localStorage.getItem('votos'))
    }

    else{
        votos = [
            {
                nome: "Candidato 1",
                votos: 0
            },
            {
                nome: "Candidato 2",
                votos: 0
            },
            {
                nome: "Candidato 3",
                votos: 0
            },
            {
                nome: "Candidato 4",
                votos: 0
            },
            {
                nome: "nulo",
                votos: 0
            }
        ]
    }

    return votos
}