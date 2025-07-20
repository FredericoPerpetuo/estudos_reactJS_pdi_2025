// Exercício 1:
// Uma empresa de e-commerce precisa exibir os nomes dos produtos com a primeira letra maiúscula em seus relatórios.
// Utilize .map() para transformar o array de produtos, padronizando o campo "nome" para começar com letra maiúscula.

const produtos = [
  { id: 101, nome: 'monitor led 24"', preco: 899.99 },
  { id: 102, nome: "teclado mecânico", preco: 459.9 },
  { id: 103, nome: "mouse gamer", preco: 229.5 },
];

const produtosMap = produtos.map((produto) => ({
  ...produto,
  nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
}));
console.log(produtosMap);

// Exercício 2:
// Um sistema de RH exporta os dados dos funcionários com o nome completo e o salário bruto.
// Use .map() para gerar um novo array com o nome do funcionário e o salário líquido (descontando 20% de impostos).

const funcionarios = [
  { nome: "Ana Paula Silva", salarioBruto: 5200 },
  { nome: "Carlos Eduardo Lima", salarioBruto: 6400 },
  { nome: "Mariana Costa", salarioBruto: 4700 },
];
const funcionariosMap = funcionarios.map((funcionario) => ({
  nome: funcionario.nome,
  salarioLiquido: funcionario.salarioBruto - funcionario.salarioBruto * 0.2,
}));

console.log(funcionariosMap);

// Exercício 3:
// Uma API de agendamento retorna uma lista de reuniões com data e hora em formato ISO.
// Use .map() para transformar o array, gerando um novo com os horários no formato "dd/mm/yyyy às HH:MM".

const reunioes = [
  { id: 1, assunto: "Revisão de Sprint", dataHora: "2025-07-20T09:00:00" },
  {
    id: 2,
    assunto: "Apresentação para Cliente",
    dataHora: "2025-07-22T14:30:00",
  },
  { id: 3, assunto: "Planejamento do Mês", dataHora: "2025-07-25T11:00:00" },
];

const formatarDtString = (dataHora) =>
  `${dataHora.substring(8, 10)}/${dataHora.substring(
    5,
    7
  )}/${dataHora.substring(0, 4)} às ${dataHora.substring(11, 16)}`;

const reunioesMap = reunioes.map((reuniao) => ({
  ...reuniao,
  dataHora: formatarDtString(reuniao.dataHora),
}));

console.log(reunioesMap);

// Exercício 4:
// Um sistema financeiro lista transações com valores em centavos e um código de operação.
// Use .map() para gerar um novo array formatando os valores para reais (R$) e traduzindo o código da operação.

const transacoes = [
  { valorCentavos: 150000, operacao: "C" },
  { valorCentavos: 32000, operacao: "D" },
  { valorCentavos: 8900, operacao: "D" },
];
const transacoesMap = transacoes.map((transacao) => ({
  valorReais: transacao.valorCentavos / 100,
  operacao: transacao.operacao === "D" ? "Crédito" : "Débito",
}));
console.log(transacoesMap);

// Exercício 5:
// Um sistema de chamados técnicos armazena o status das tarefas como números.
// Use .map() para gerar um novo array com os status traduzidos para texto e a urgência em destaque.
// Status: 1 = "Aberto", 2 = "Em andamento", 3 = "Concluído"
const chamados = [
  { id: "CH001", status: 1, urgente: true },
  { id: "CH002", status: 3, urgente: false },
  { id: "CH003", status: 2, urgente: true },
];

function tradutorStatus(statusCode) {
  let strStatus = "";
  if (statusCode === 1) {
    strStatus = "Aberto";
  } else if (statusCode === 2) {
    strStatus = "Em andamento";
  } else {
    strStatus = "Concluído";
  }
  return strStatus;
}

const chamadosMap = chamados.map((chamado) => ({
  status: tradutorStatus(chamado.status),
  urgente: chamado.urgente,
}));
console.log(chamadosMap);

// Exercício 6:
// Uma empresa de logística possui uma lista de entregas com os campos de distância e tempo estimado.
// Use .map() para gerar um array com o tempo estimado convertido para horas e a média de velocidade de cada entrega.

const entregas = [
  { id: 1001, distanciaKm: 250, tempoMinutos: 180 },
  { id: 1002, distanciaKm: 120, tempoMinutos: 95 },
  { id: 1003, distanciaKm: 75, tempoMinutos: 60 },
];

const entregasMap = entregas.map((entrega) => ({
  tempoHoras: (entrega.tempoMinutos / 60).toFixed(2),
  velocidadeMedia: (entrega.distanciaKm / (entrega.tempoMinutos / 60)).toFixed(
    1
  ),
}));

console.log(entregasMap);
