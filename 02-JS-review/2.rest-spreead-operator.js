/**
 * REST OPERATOR
 * É usado para juntar valores em um único array ou objeto
 *
 * ONDE UTILIZAR?
 * Em funções com número indefinido de argumentos
 * Em desestruturação de arrays ou objetos
 */

//FUNÇÃO COM NÚMERO INDEFINIDO DE ARGUMENTOS
//...numero -> cria um array contendo todos os argumentos
function soma(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(`SOMA A:  ${soma(10, 20, 30)}`);
console.log(`SOMA B: ${soma(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)}`);

//DESESTRUTURAÇÃO E REST
//A desetruturação pega o primero elemento do array pessoa e coloca na variável prof
// e os demais elementos do array e coloca na variável alunos
const pessoas = ["João", "Laura", "Marcos", "Paula", "Luana"];
const [prof, ...alunos] = pessoas;
console.log(`Professor: ${prof}`);
console.log(`Alunos: ${alunos}`);

/**
 * SPREAD OPERATOR
 * É usado para espalhar valores em um array ou objeto
 *
 * ONDE UTILIZAR?
 * Junção de arrays
 * Cópia de objetos com adição de novas informações
 * Passar valores de um array como argumentos
 */

//JUNÇÃO DE ARRAYS
const listaA = ["A", "B", "C"];
const listaB = ["C", "D", "E"];
const listaAB = [...listaA, ...listaB];
console.log(listaAB);

//CÓPIA DE UM OBJETO COM ADIÇÃO DE NOVAS INFORMAÇÕES
const pessoa = { nome: "Fred", idade: 44 };
const novaPessoa = {
  ...pessoa,
  profissao: "Dev",
  formacao: "Ciência da Computação / História",
};

console.log(pessoa);
console.log(novaPessoa);

const valores = [10, 20, 30];
const maior = Math.max(...valores);
const menor = Math.min(...valores);
console.log(maior);
console.log(menor);
