let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Bem vindo ao jogo do número secreto');
    exibirTextoNaTela('p','Digite um número de 1 a 10: ');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p','O número é menor!');
        }else{
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++; // ao colocar tentativas aqui, ele aplica em todo o else
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //numero escolhido pela máquina
    let tamanhoDaListaDeNumerosSorteados = listaDeNumerosSorteados.length;

    if(tamanhoDaListaDeNumerosSorteados == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
      
}

function limparCampo(){
    chute = document.querySelector('input'); // Não é necessário o .value pois queremos limpar o campo inteiro e não somente o valor
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio(); // as variaveis não precisam ser declaradas dnv
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Bem vindo ao jogo do número secreto');
    exibirTextoNaTela('p','Digite um número de 1 a 10: ');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p','O número é menor!');
        }else{
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++; // ao colocar tentativas aqui, ele aplica em todo o else
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //numero escolhido pela máquina
    let tamanhoDaListaDeNumerosSorteados = listaDeNumerosSorteados.length;

    if(tamanhoDaListaDeNumerosSorteados == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
      
}

function limparCampo(){
    chute = document.querySelector('input'); // Não é necessário o .value pois queremos limpar o campo inteiro e não somente o valor
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio(); // as variaveis não precisam ser declaradas dnv
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}