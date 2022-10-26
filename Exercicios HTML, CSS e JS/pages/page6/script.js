const signos = [
    {
        nome: "Aquário",
        mesInicio: 1,
        diaInicio: 21
    },
    {
        nome: "Peixes",
        mesInicio: 2,
        diaInicio: 19
    },
    {
        nome: "Áries",
        mesInicio: 3,
        diaInicio: 21
    },
    {
        nome: "Touro",
        mesInicio: 4,
        diaInicio: 21
    },
    {
        nome: "Gêmeos",
        mesInicio: 5,
        diaInicio: 21
    },
    {
        nome: "Câncer",
        mesInicio: 6,
        diaInicio: 21
    },
    {
        nome: "Leão",
        mesInicio: 7,
        diaInicio: 23
    },
    {
        nome: "Virgem",
        mesInicio: 8,
        diaInicio: 23
    },
    {
        nome: "Libra",
        mesInicio: 9,
        diaInicio: 23
    },
    {
        nome: "Escorpião",
        mesInicio: 10,
        diaInicio: 23
    },
    {
        nome: "Sagitário",
        mesInicio: 11,
        diaInicio: 22
    },
    {
        nome: "Capricórnio",
        mesInicio: 12,
        diaInicio: 22
    },
]

function descrobreSigno(){
    const form = document.getElementById('page6-form')

    if(!form.checkValidity()){
        return
    }
    form.addEventListener('submit', e=>e.preventDefault())

    const dataNascimento = new Date(document.getElementById('page6-date').value)
    var signo;

    for(let i = 0; i<signos.length; i++){
        if(signos[i].mesInicio==dataNascimento.getMonth()+1){
            if(dataNascimento.getDate()>=signos[i].diaInicio){
                signo=signos[i].nome
            }
            else if (i!=0){
                signo = signos[i-1].nome
            }
            else{
                signo=signos[11].nome
            }
        }
    }

    document.getElementById('page6-result').classList.remove('hide')
    document.getElementById('page6-result-span').innerHTML=signo
}