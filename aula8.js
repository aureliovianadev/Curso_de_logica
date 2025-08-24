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

// Função que calcula o fatorial de um numero

function fatorial (x){
   var fator =1 
    for (var i=1; i<=x;i++){
      fator *=i
    }
     return fator
}
let Nume=parseInt(prompt('Digite o número que você deseja saber o fatorial: '))
console.log(fatorial(Nume))

// Analizador de nomes

function analizanome(){
   console.log('O comprimento do seu nome é: '+nome.length)
   console.log('O seu nome em maiúsculo é: ' + nome.toUpperCase())
   console.log('O seu nome em minúsculo é: ' + nome.toLowerCase())
   console.log('A primeira letra do seu nome é: ' + nome.to)
}

let nome = prompt('Digite um nome:')

console.log(analizanome(nome))