/**
 * CONDICIONAL TERNÁRIO
 * condição ? x : y
 * ? -> if
 * : else
 *
 * UTLIDADE
 * Definir o valor de uma variável a partir de uma condição
 *  */
function podeConsumirAlcool(idade) {
  return idade >= 18 ? true : false;
}
console.log(podeConsumirAlcool(16));
console.log(podeConsumirAlcool(17));
console.log(podeConsumirAlcool(18));
console.log(podeConsumirAlcool(19));

function podeConsumirAlcool2(idade) {
  return idade >= 18 ? "Pode beber" : "Não pode beber";
}
console.log(podeConsumirAlcool2(16));
console.log(podeConsumirAlcool2(17));
console.log(podeConsumirAlcool2(18));
console.log(podeConsumirAlcool2(19));

function calculaIPRF(renda) {
  return renda > 5000 ? renda * 0.1 : 0;
}
console.log(`IPRF = ${calculaIPRF(4000)}`);
console.log(`IPRF = ${calculaIPRF(5000)}`);
console.log(`IPRF = ${calculaIPRF(6000)}`);
