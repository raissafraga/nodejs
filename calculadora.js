//calculadora

    function multiplicacao(a,b) {
        console.log(a*b);
    }

    function divisao(c,d){
        console.log(c/d);
    }

    function soma(a,d){
        console.log(a+d);
    }

    function subtracao(c,b){
        console.log(c-b);
    }

    module.exports = {
        multiplicacao: multiplicacao,
        divisao : divisao,
        soma : soma,
        subtracao : subtracao
       };