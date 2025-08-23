// conte até 10
i=1
while(i<=10){
    console.log(`${ i }`)
    i++
}

// contar de 10 à 0

i=10
while(i>=1){
    console.log(`${ i }`)
    i = i - 1
}

// contar de 2 em 2 de 10 à 0

i=10
while(i>=1){
    console.log(`${ i }`)
    i = i - 2
}

// contar de 0 até onde o usuario quiser

let contar = parseInt(prompt(`Digite o número que voce gostaria que o sistema contasse de 0 à ele`))
i=1
while(i<=contar){
    console.log(`${ i }`)
    i++
}

// contar de 0 até onde o usuario quiser com o salto desejado

let contar1 = parseInt(prompt(`Digite o número que voce gostaria que o sistema contasse de 0 à ele`))
i=1
salto= parseInt(prompt(`digite o numero do salto`))
while(i<=contar1){
    console.log(`${ i }`)
    i = i + salto
}

// ler 10 números e somá-los


let somanumeros=0
for(let i=1 ;i<=10;i++){
     let numeros = parseFloat(prompt(`Digite o número desejado`))
    somanumeros+=numeros
}

// ler 10 números e somá-los e mostrar o maior


let somanumeros1=0
let maiornumero=0
for(let i=1 ;i<=10;i++){
     let numeros1 = parseFloat(prompt(`Digite o número desejado`))
    somanumeros1+=numeros1
    if(numeros1>maiornumero){
    maiornumero=numeros1
    }
}
console.log(`maior número digitado foi: ${maiornumero}`)

// ler 10 números e somá-los e mostrar o  menor
let numeros2 = parseFloat(prompt(`Digite o 1º número:`))
let somanumeros2 = numeros2
let menornumero = numeros2

for (let i = 2; i <= 10; i++) {
    numeros2 = parseFloat(prompt(`Digite o ${i}º número:`))
    somanumeros2+=numeros2                            
    if (numeros2 < menornumero) {                         
        menornumero = numeros2
    }
}

console.log(`A soma dos números digitados foi: ${somanumeros2}`)
console.log(`O menor número digitado foi: ${menornumero}`)

// Creuza precisa comprar dollar para viajar e estava indecisa de quanto ia levar entretanto trocou seu dinheiro 4x

let preco_do_dollar = parseFloat(prompt(`Digite o valor do Dollar`))

for (let i = 1; i <= 4; i++) {
let real = parseFloat(prompt(`Digite o valor em Real que creuza vai trocar`))

let dollar = real/preco_do_dollar

console.log(`O valor em dolar de Creuza é: ${dollar}`)
}

// Creuza precisa comprar dollar para viajar e estava indecisa de quanto ia levar entretanto pergunte a ela quantas vezes ela foi trocar

let troca = parseInt(prompt(`Quantas vezez Creuza foi trocar seu dinheiro`))
let preco_do_dollar1 = parseFloat(prompt(`Digite o valor do Dollar`))

for (let i = 1; i <= troca; i++) {
let real = parseFloat(prompt(`Digite o valor em Real que creuza vai trocar`))

let dollar = real/preco_do_dollar1

console.log(`O valor em dolar de Creuza é: ${dollar}`)
}

//Faça uma contagem inteligente (Se o inicio for menor que o fim, contagem crescente.Se o inicio foi maior que o fim,decrescente)

let inicio = parseInt(prompt(`Digite o início da contagem:`))
let fim = parseInt(prompt(`Digite o fim da contagem:`))

if (inicio < fim) {
    
    for (let i = inicio; i <= fim; i++) {
        console.log(i)
    }
} 

else if (inicio > fim) {
   
    for (let i = inicio; i >= fim; i--) {
        console.log(i)
    }
} 

else {
    
    console.log(`Início e fim são iguais: ${inicio}`)
}

//Melhor aluno da turma (descubra quantos alunos tem na sala, o nome e a nota de cada um e informe quem foi o aluno com melhor desempenho)