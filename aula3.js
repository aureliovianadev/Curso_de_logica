// Descobrir a idade que Creuza vai fazer
let data_nascimento = parseInt(prompt(`Digite o ano de nascimento`))
let ano_atual = parseInt(prompt(`Digite o ano que estamos`))
let idade = ano_atual - data_nascimento

console.log(`A idade que Creuza irá fazer é: ${idade}`)

// Creuza precisa comprar dollar para viajar

let real = parseFloat(prompt(`Digite o valor em Real`))
let preco_do_dollar = parseFloat(prompt(`Digite o valor do Dollar`))

let dollar = real/preco_do_dollar

console.log(`O valor em dolar de Creuza é: ${dollar}`)

// transformação de temperatura de F para C

let tempF = parseFloat(prompt(`Digite a temperatura vista em Fahrenheit`))
let tempC = (tempF-32)/1.8

console.log(`A temperatura em Celsius é de : ${tempC}`)

// Taxação de compras da Creuza

let gasto = parseFloat(prompt(`Digite quanto foi gasto`))
let tax = (gasto*60)/100

console.log(`A Taxação foi de: ${tax} \n O valor total de gasto mais taxação foi de: ${gasto + tax}`)

// Empréstimo com juros de 20%

let emprestimo = parseFloat(prompt(`Digite a quantidade do empréstimo`))
let parcelas = parseInt(prompt(`Digite o número de parcelas`))
let Juros = (emprestimo*20)/100
let Total_a_pagar = emprestimo + Juros
let Total_por_mes = Total_a_pagar / parcelas
console.log(`Empréstimo: ${emprestimo}\n
    Parcelas: ${parcelas}\n
    Valor do Juros: ${Juros}\n
    Valor por mês: ${Total_por_mes}\n
    Valor Total: ${Total_a_pagar}`)