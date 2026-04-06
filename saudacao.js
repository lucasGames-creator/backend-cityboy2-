    function saudacao(nomeJogador) {
        console.log("Bem vinde ao joge, " + nomeJogador + "!")        
};

saudacao("pablo vitar");

function SubaDeNivel(nivelAtual) {
    return nivelAtual + 1
};

let meuNivel = 10 + 5 + 1 + 9 + 1 + 1 + 1;

let nivelAtualizado = SubaDeNivel(meuNivel);
console.log("Seu nivel atual é: " + nivelAtualizado);

function soma(numero1, numero2) {
    return numero1 + numero2 
};

console.log(soma(60,7));