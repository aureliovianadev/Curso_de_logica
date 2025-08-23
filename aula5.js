// Aluno Aprovado, Recuperação e Reprovado  n0 1° Bimestre

let nota1 = parseFloat(prompt(`digite a nota da primeira prova`))
let nota2 = parseFloat(prompt(`Digite a nota da segunda prova`))

let media = (nota1+nota2)/2

console.log(`Informamos que a média da escola é 7`)

if(media>=7){
console.log(`Sua média foi de: ${media}\n APROVADO!`)
}
else if(media >=5 && media<7){
console.log(`Sua média foi de: ${media}\n RECUPERAÇÃO!`)
}

else{
   console.log(`Sua média foi de: ${media}\n REPROVADO!`) 
}

// Calcular o IMC

let peso = parseFloat(prompt(`Digite o seu peso`))
let altura = parseFloat(prompt(`Digite a sua Altura`))

let IMC = peso / (altura**2)

console.log(`O seu IMC é de: ${IMC}`)

if (IMC < 17){
    console.log(`Muito abaixo do peso`)
}

else if (IMC >= 17 && IMC < 18.5){
    console.log(`Abaixo do peso`)
}

else if(IMC >= 18.5 && IMC < 25){
    console.log(`Peso ideal`)
}

else if (IMC >= 25 && IMC < 30){
    console.log(`Sobrepeso`)
}

else if (IMC >= 30 && IMC < 35){
    console.log(`Obesidade`)
}

else if (IMC >= 35 && IMC < 40){
    console.log(`Obesidade severa`)
}

else{
    console.log(`Obesidade mórbida`)
}

// Sistema de doação (Criança Esperança)

let doacao = parseInt(prompt(`Digite 1 para fazer a doação de 10,00R$\n 2 para doação de 25,00R$\n 3 para doação de 50,00R$\n 4 para doação de qualquer outro valor\n 5 para cancelar`))

if(doacao == 1){
    console.log(`doação de 10,00R$`)
}

else if(doacao == 2){
    console.log(`doação de 25,00R$`)
}

else if(doacao == 3){
    console.log(`doação de 50,00R$`)
}

else if(doacao == 4){
    let valor = parseFloat(prompt(`Digite o valor que pretende doar`))
    console.log(`doação de ${valor}R$`)
}

else if(doacao == 5){
    console.log(`Operação cancelada`)
}

else {
    console.log(`operação digitada não reconhecida`)
}

// Dependentes dos Funcionários (0 dependentes + 5% do salário, 1 à 3 dependentes + 10% do salário, 4 à 6 dependentes + 15% do salário e os demais dependentes 18%)

let nome = prompt(`Digite o nome do funcinário`)
let salariobase = parseFloat(prompt(`Digite o salário base do funcionário`))
let dependentes = parseInt(prompt(`Digite o numero de dependentes do funcionário`))
let salario 

if(dependentes==0){
    salario = salariobase + (salariobase * 0.05)
    console.log(`o salário do funcionario(${nome}) é de: ${salario}`)
}

else if(dependentes>0 && dependentes<=3){
    salario = salariobase + (salariobase * 0.10)
    console.log(`o salário do funcionario(${nome}) é de: ${salario}`)
}

else if(dependentes>3 && dependentes<=6){
    salario = salariobase + (salariobase * 0.15)
    console.log(`o salário do funcionario(${nome}) é de: ${salario}`)
}

else {
    salario = salariobase + (salariobase * 0.18)
    console.log(`o salário do funcionario(${nome}) é de: ${salario}`)
}

// classificação do aluno em letras em base a sua média (10-9 A, 8.99-8 B, 7.99-7 C, 6.99-6 D, 5.99-5 E, Abaixo de 4.99 F )

let nota3 = parseFloat(prompt(`Digite a nota da 1° prova`))
let nota4 = parseFloat(prompt(`Digite a nota da 2° prova`))

let media1 = (nota3 + nota4)/2

if (media1<=10 && media1>=9){
    console.log(`A`)
}

else if (media1<9 && media1>=8){
    console.log(`B`)
}

else if (media1<8 && media1>=7){
    console.log(`C`)
}

else if (media1<7 && media1>=6){
    console.log(`D`)
}

else if (media1<6 && media1>=5){
    console.log(`E`)
}

else if (media1<5){
    console.log(`F`)
}

else {
    console.log(`Algo foi digitado errado`)
}

// análise de uma partida de futebol

let time1 = prompt(`Digite o nome do 1° time`)
let gols1 = parseInt(prompt(`Digite o número de gols do 1° time`))
let time2 = prompt(`Digite o nome do 2° time`)
let gols2 = parseInt(prompt(`Digite o número de gols do 2° time`))

if(gols1 == gols2){
    console.log(`EMPATE\n ${time1} ${gols1} X ${time2} ${gols2}`)
}

else if (gols1>gols2){
     console.log(`VITÓRIA do ${time1}\n ${time1} ${gols1} X ${time2} ${gols2}`)
}

else if (gols1<gols2){
     console.log(`VITÓRIA do ${time2}\n ${time1} ${gols1} X ${time2} ${gols2}`)
}