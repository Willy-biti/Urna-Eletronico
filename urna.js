/* 
    Projeto de aprendizagem JS, consiste em contruir uma urna leetrônica eleitoral 

*/

// Etapa1:  Esses variáveis são para controlar os itens da página
let seuVotoPar = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-direita');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;  /* Essa variável é para definir que sempre se deve começar com etapa 0 */
let numero = '';

// Essa função etapa, ela limpa a tela e pegar as informações do etapa atual e preencher o que deve ser preenchido
function comecarEtapa(){

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
 
    // Esse for é para criar 5 quadrinhos de digitação na tela
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

// Essas funcções são para contolar os três botões 
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