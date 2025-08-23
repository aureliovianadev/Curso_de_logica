// Descobrir se a Creuza é de maior
let data_nascimento = parseInt(prompt(`Digite o ano de nascimento`))
let ano_atual = parseInt(prompt(`Digite o ano que estamos`))
let idade = ano_atual - data_nascimento

console.log (`A idade de Creuza é: ${idade}`)

if (idade>=18){
    console.log(`Atingiu a maior idade`)
}
else {
    console.log(`Menor de idade`)
}

// Descobrir se o número é par ou impar

let numero = parseInt(prompt(`Digite o número desejado`))

if(numero % 2 == 0){
    console.log(`${numero} é par`)
}

else{
    console.log(`${numero} é impar`)
}

// Calcular o IMC

let peso = parseFloat(prompt(`Digite o seu peso`))
let altura = parseFloat(prompt(`Digite a sua Altura`))

let IMC = peso / (altura**2)

console.log(`O seu IMC é de: ${IMC}`)

if(IMC>=18.5 && IMC<=25){
    console.log(`Peso ideal`)
}

else if (IMC<18.5){
    console.log(`Abaixo do peso`)
}

else{
    console.log(`Acima do peso`)
}

// Descobrir se a pessoa está apta a dirigir
let nascimento = parseInt(prompt(`Digite o ano de nascimento`))
let atual = parseInt(prompt(`Digite o ano que estamos`))
let idade1 = atual - nascimento

console.log (`A idade da pessoa é: ${idade1}`)

if (idade1>=18){
    console.log(`Pode tirar a carteira`)
}
else {
    console.log(`Não pode tirar a carteira ainda`)
}

// Aluno aprovado e Reprovado n0 1° Bimestre

let nota1 = parseFloat(prompt(`digite a nota da primeira prova`))
let nota2 = parseFloat(prompt(`Digite a nota da segunda prova`))

let media = (nota1+nota2)/2

console.log(`Informamos que a média da escola é 7`)

if(media>=7){
console.log(`Sua média foi de: ${media}\n APROVADO!`)
}
else if (media<7){
console.log(`Sua média foi de: ${media}\n REPROVADO!`)
}
