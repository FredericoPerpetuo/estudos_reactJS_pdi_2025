// Exercício 1: Calcular comissão individual
// Uma equipe de vendas recebe 5% de comissão sobre o valor de cada venda realizada.
// Crie uma arrow function que receba o valor total de uma venda e retorne o valor da comissão.
// Exemplo: Entrada 2000 => Retorno 100
const comissao = (venda) => venda * 0.05;
console.log(comissao(1000));
console.log(comissao(500));
console.log(comissao(2000));
// ----------------------------------------------------
// Exercício 2: Gerar código interno de funcionários
// Para controle interno, funcionários recebem um código com as 3 primeiras letras do nome + 4 últimos dígitos do CPF.
// Crie uma arrow function que receba o nome e o CPF (string) e retorne o código no formato solicitado.
// Exemplo: Entrada ("Carlos", "12345678900") => Retorno: "Car8900"
const gerarCodigo = (nome, cpf) => nome.substring(0, 3) + cpf.substring(7, 12);
console.log(gerarCodigo("Carlos", "12345678900"));

// ----------------------------------------------------
// Exercício 3: Calcular tempo estimado de resposta
// Tempo estimado = tempo médio de atendimento / prioridade
// Crie uma arrow function que receba tempoMedio e prioridade, e retorne o tempo estimado.
const tempoMedioResposta = (tma, prioridade) => tma / prioridade;
console.log(tempoMedioResposta(100, 20));

// ----------------------------------------------------
// Exercício 4: Gerar ID de projeto
// ID = duas primeiras letras do nome do projeto (maiúsculas) + ano atual
// Crie uma arrow function que receba nomeProjeto e ano, e retorne o ID formatado.
// Exemplo: Entrada ("Marketing", 2025) => Retorno: "MA2025"
const geraIdProjeto = (projeto, ano) =>
  projeto.substring(0, 2).toUpperCase() + ano.toString();

console.log(geraIdProjeto("Marketing", 2025));
// ----------------------------------------------------
// Exercício 5: Verificar elegibilidade de reembolso
// Reembolsos aceitos entre R$ 10,00 e R$ 500,00
// Crie uma arrow function que receba valor e retorne true se válido, false caso contrário.
const elegibilidadeReembolso = (vlr) =>
  vlr >= 10 && vlr <= 500 ? true : false;

console.log(elegibilidadeReembolso(9));
console.log(elegibilidadeReembolso(10));
console.log(elegibilidadeReembolso(500));
console.log(elegibilidadeReembolso(550));
// ----------------------------------------------------
// Exercício 6: Calcular bônus por tempo de casa
// Bônus = R$ 300 por ano completo trabalhado
// Crie uma arrow function que receba anosTrabalhados e retorne o bônus total.
// Exemplo: Entrada 4 => Retorno 1200
const calculaBonus = (anosTrabalhados) => 300 * anosTrabalhados;
console.log(calculaBonus(1));
console.log(calculaBonus(2));
console.log(calculaBonus(3));
console.log(calculaBonus(4));
