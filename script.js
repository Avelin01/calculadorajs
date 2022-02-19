//mostrando os operadores e selecionando.
function calc() {
    const oper = Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)'))
    
//verificando se foram informado apenas os operadores existentes na tabela.    
    if(!oper || oper >= 7){
        alert('Erro - operação inválida!')
        calc()
    } else {

    //recebimento dos números para as operações.    
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

    //verificando se os numeros foram informados corretamente.
        if(!n1 || !n2) {
            alert('Erro - parâmetros inválidos!')
            calc();
        } else {

    //funções dos operadores.
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} Elevado a ${n2} é igual a ${resultado}`)
            novaOperacao();
        }
    
    //retorno para seleção de novas operações.    
        function novaOperacao() {
            let opcao = Number(prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não'));
    
            if (opcao == 1) {
                calc();
            } else if (opcao == 2) {
                alert('Até a próxima!')
            } else {
                alert('Digite uma opção válida!')
                novaOperacao();
            }
            
    }



    }

//switch pra chamar cada operação.    
switch(oper){
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisaoReal();
        break;
    case 5:
        divisaoInteira();
        break;
    case 6:
        potenciacao();
        break;  
}



}
}
calc(); 