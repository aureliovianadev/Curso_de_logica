//Faça um programa que repita um bloco até que uma expressão ocorra
let listadecompras=prompt(`Digite o que deseja comprar`)
 let listanova = listadecompras
let resp=prompt(`Tem mais itens para lista? Responda com (s) para sim e qual tecla para não`)
while(resp===`s`){
listadecompras=prompt(`Digite o que deseja comprar`)
listanova += `,` + listadecompras
console.log(`${listanova}`)
resp=prompt(`Tem mais itens para lista? Responda com (s) para sim e qual tecla para não`)
}
console.log(`${listanova}`) 

//Faça um programa que calcule a tabuada de um certo número

let number = parseInt(prompt(`Digite o número que você gostaria de saber a tabuada`))
let tabuada
let stop = parseInt(prompt(`Digite o número que a tabuada devera parar`))

for(let i=1; i<=stop; i++){

    tabuada=number * i
    console.log(`${number} X ${i} = ${tabuada}`)
}

//Faça um programa que conte quantos números negativos foram digitados

let parar = parseInt(prompt(`Digite quantos números você gostaria de descobrir se faz partes dos negativos`))
let numero = parseInt(prompt(`digite um número`))
let negativos=0

for(let i=1; i<=parar; i++){
    if(numero<0){
        negativos++
    console.log(`${numero}`)
    } 
    numero = parseInt(prompt(`digite um número`))
}
console.log(`${negativos}`)

//faça um programa que calcule o fatorial de certo numero

let numeroparafatorar = parseInt(prompt("Digite um número para calcular seu fatorial"));
let fatorial = 1;

for (let i = 1; i <= numeroparafatorar; i++) {
    fatorial *= i
    
}

console.log(`O fatorial de ${numeroparafatorar} é ${fatorial}`)

//faça um programa que calcule o fatorial de diversos numeros

let quantidade = parseInt(prompt("Digite quantos números você quer saber o fatorial"));

for (let contador = 1; contador <= quantidade; contador++) {
    let numero = parseInt(prompt(`Digite o ${contador}º número para calcular o fatorial`));
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`);
}

// Verificar se o número é primo

let numero6 = parseInt(prompt(`Digite um número para saber se ele é primo`))
let quantos=0
for(let i=2;i<=numero6;i++){
    if(numero6%i==0){
quantos++
    }
}
if(quantos==1){
    console.log(`numero primo`)
}
else if(quantos!=1){
    console.log(`não é primo`)
}

//Faça um promgrama se a pessoa digitar 1 faça uma contagem crescente e 2 para decresente o número 3 para sair

let contagem = parseInt(prompt(`digite 1 para contagem crescente, 2 para decrescente e 3 para sair`))

if(contagem===1){
    let valor =parseInt(prompt(`digite um número para fazermos a contagem (1 a valor digitado)`))
    for(let i=1;i<=valor;i++){
        console.log(`${i}`)
    }

}

else if(contagem===2){
    let valor =parseInt(prompt(`digite um número para fazermos a contagem (valor digitado a 1)`))
    for(let i=valor;i>=1;i--){
        console.log(`${i}`)
    }

}

else if (contagem===3){
    console.log(`Saindo so sistema`)
}

else{
    console.log(`Digito não reconhecido`)
    
}

//Faça um programa que escolha pessoas(obs:homens precisam ter mais de 18 anos e cabelos castanhos e mulheres precisam estar entre 25 e 30 anos e ter cabelo loiro )


let continuar = prompt(`Deseja cadastrar uma pessoa? (s para sim
qualquer outra tecla para não)`);

while (continuar === `s`) {
    let nome = prompt(`Digite o nome da pessoa`);

    let sexo = parseInt(prompt(`Digite o sexo:
1 - Masculino
2 - Feminino`));
    let idade = parseInt(prompt(`Digite a idade:`));
    let cabelo = parseInt(prompt(
        `Digite a cor do cabelo:
1 - Castanho
2 - Loiro
3 - Preto
4 - Ruivo`
    ));

    if (sexo === 1 && idade >= 18 && cabelo === 1) {
        console.log(`${nome} foi selecionado!`);
    } 
    else if (sexo === 2 && idade >= 25 && idade <= 30 && cabelo === 2) {
        console.log(`${nome} foi selecionada!`);
    } 
    else {
        console.log(`${nome} não atende aos critérios.`);
    }

    continuar = prompt(`Deseja cadastrar uma pessoa? (s para sim
qualquer outra tecla para não)`);
}