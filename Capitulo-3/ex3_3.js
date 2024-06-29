const prompt = require("prompt-sync")() //adiciona o pacote ao programa
const salario = Number(prompt("Salário R$: ")) //lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): ")) //lê os dados de entrada
const quadrienios = Math.floor(tempo / 4) //calcula os quadrienios
const acrescimo = salario * quadrienios / 100 //... e acrescimo
console.log(`Quadriênios: ${quadrienios}`) //exibe as respostas
console.log(`Salário final R$: ${(salario + acrescimo).toFixed(2)}`);