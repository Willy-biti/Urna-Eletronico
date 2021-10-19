let seuVotoPar = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-direita');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;
let numero = '';

function comecarEtapa(){

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
 
    for(let i=0;i<etapa.numeros; i++){
        if(i === 0 ){
                numeroHTML += ' <div class="numero pisca"></div>';
            } else{
        
        numeroHTML += '<div class="numero"></div>';
        }
    }

    seuVotoPar.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ' ';
    aviso.style.display = 'none';
    lateral.innerHTML = ' ';
    numeros.innerHTML = numeroHTML;
}


function atualizaInterfac(){
    let etapa = etapas[etapaAtual];
    let candidatos = etapa.candidato.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else{
            return false
        }
    })

    console.log("condidato", conadidato);
    // PATEREI AQUI...
}

function clicou(n){
    {
        let elNumero = document.querySelector('.numero.pisca');
        if(elNumero !== null){
            elNumero.innerHTML = n;
            numero = '${numero}${n}';

            elNumero.classList.remove('pisca');
            if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
            } else{
                atualizaInterfac();
            }
        }
    }
}

function branco(){
    alert('clicou em BRANCO' );
}

function corrige(){
    alert('clicou em CORRIGE');
}

function confirma(){
    alert('clicou em CONFIRMA');
}


comecarEtapa();