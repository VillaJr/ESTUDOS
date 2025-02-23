let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Mais um jogo do n° secreto';
/*O método querySelector é usado para selecionar o primeiro elemento no documento que corresponde ao seletor especificado.
No caso, o seletor é 'h1', que significa que estamos procurando a primeira tag <h1> no documento HTML.
Se existir uma tag <h1>, ela será retornada e armazenada na variável titulo. Se não existir, titulo será null.
Declaramos a variável tiulo e o resultado da seleção (querySelector) é armazenado nessa variável.*/

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um n° entre 1 e 10';
/*innerHTML é uma propriedade do elemento HTML que permite acessar ou alterar o conteúdo interno desse elemento. 
No caso, como paragrafo é uma referência a um elemento <p>, innerHTML se refere ao texto ou HTML que está dentro desse parágrafo.
*/

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ?'tentativas':'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        

    }else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor');
        }else {
            exibirTextoNaTela ('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt( Math.random() * 10 + 1 );
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = "";
}



/*function verificarChute():

Aqui, estamos criando uma função chamada verificarChute.

Uma função é um bloco de código que pode ser "chamado" ou executado sempre que necessário. Neste caso, a função foi criada para realizar uma tarefa específica.

{ ... }:

As chaves { } delimitam o corpo da função, ou seja, o código que será executado quando a função for chamada.

console.log('O botão foi clicado!');:

Dentro da função, temos uma única instrução: console.log().

console.log() é uma função do JavaScript usada para exibir mensagens no console do navegador (ou do ambiente onde o código está sendo executado).

A mensagem que será exibida é 'O botão foi clicado!'.*/

