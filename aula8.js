// Função que soma dois valores

function somar (a,b) {
     return a+b
}  

   var n1 = parseInt(prompt('Digite o primeiro número'))
   var n2 =parseInt(prompt('Digite o segundo número'))

console.log('A soma dos dois valores é:' + somar(n1,n2))

// Função que verifica se o número é par ou ímpar

function verificaParImpar (num){
    if(numero%2==0){
        return ' é par'
    }
    else{
        return ' é ímpar'
    }
}

var numero = parseInt(prompt('Digite um numero para verificar se é par ou impar'))

console.log(numero + verificaParImpar(numero))