// ===========================
// 1. RH – Ordenar colaboradores por data de admissão
// ===========================

/*
Descrição: O setor de Recursos Humanos deseja visualizar a lista de colaboradores ordenada pela data de 
admissão (do mais antigo para o mais recente).
*/

const colaboradores = [
  { nome: "Fernanda", admissao: "2015-03-10" },
  { nome: "Carlos", admissao: "2020-08-21" },
  { nome: "Luciana", admissao: "2018-11-05" },
  { nome: "João", admissao: "2012-06-30" },
];
const colaboradoresSort = colaboradores
  .slice()
  .sort(
    (colaboaradorA, colaboradorB) =>
      new Date(colaboaradorA.admissao) - new Date(colaboradorB.admissao)
  );
console.log(colaboradoresSort);

// Esperado (output):
// [
//   { nome: "João", admissao: "2012-06-30" },
//   { nome: "Fernanda", admissao: "2015-03-10" },
//   { nome: "Luciana", admissao: "2018-11-05" },
//   { nome: "Carlos", admissao: "2020-08-21" }
// ]

// ===========================
// 2. Logística – Ordenar entregas por prazo
// ===========================

/*
Descrição: A equipe de logística precisa priorizar entregas com prazo mais próximo. Ordene os pedidos por data de entrega.
*/

const entregas = [
  { pedidoId: 1001, cliente: "Empresa A", prazoEntrega: "2025-07-22" },
  { pedidoId: 1002, cliente: "Empresa B", prazoEntrega: "2025-07-20" },
  { pedidoId: 1003, cliente: "Empresa C", prazoEntrega: "2025-07-25" },
];

const entregasSort = entregas
  .slice()
  .sort(
    (entregaA, entregaB) =>
      new Date(entregaA.prazoEntrega) - new Date(entregaB.prazoEntrega)
  );
console.log(entregasSort);

// Esperado (output):
// [
//   { pedidoId: 1002, cliente: "Empresa B", prazoEntrega: "2025-07-20" },
//   { pedidoId: 1001, cliente: "Empresa A", prazoEntrega: "2025-07-22" },
//   { pedidoId: 1003, cliente: "Empresa C", prazoEntrega: "2025-07-25" }
// ]

// ===========================
// 3. Vendas – Ordenar produtos pelo volume de vendas
// ===========================

/*
Descrição: A equipe de vendas deseja analisar os produtos mais vendidos. Ordene os produtos do mais vendido para o menos vendido.
*/

const produtos = [
  { nome: "Notebook X", vendas: 320 },
  { nome: "Monitor 27''", vendas: 150 },
  { nome: "Teclado Mecânico", vendas: 430 },
  { nome: "Mouse Gamer", vendas: 280 },
];
const produtosSort = produtos
  .slice()
  .sort((produtoA, produtoB) => produtoB.vendas - produtoA.vendas);

console.log(produtosSort);
// Esperado (output):
// [
//   { nome: "Teclado Mecânico", vendas: 430 },
//   { nome: "Notebook X", vendas: 320 },
//   { nome: "Mouse Gamer", vendas: 280 },
//   { nome: "Monitor 27''", vendas: 150 }
// ]

// ===========================
// 4. Financeiro – Ordenar contas a pagar por valor (decrescente)
// ===========================

/*
Descrição: O setor financeiro precisa listar as contas a pagar ordenadas do maior para o menor valor para analisar prioridades de pagamento.
*/

const contasPagar = [
  { fornecedor: "Fornecedor A", valor: 4500.5 },
  { fornecedor: "Fornecedor B", valor: 1200.0 },
  { fornecedor: "Fornecedor C", valor: 3200.75 },
  { fornecedor: "Fornecedor D", valor: 15000.0 },
];

const contasSort = contasPagar
  .slice()
  .sort((contaA, contaB) => contaB.valor - contaA.valor);

console.log(contasSort);

// Esperado (output):
// [
//   { fornecedor: "Fornecedor D", valor: 15000.00 },
//   { fornecedor: "Fornecedor A", valor: 4500.50 },
//   { fornecedor: "Fornecedor C", valor: 3200.75 },
//   { fornecedor: "Fornecedor B", valor: 1200.00 }
// ]

// ===========================
// 5. Atendimento – Ordenar chamados por tempo de espera (ascendente)
// ===========================

/*
Descrição: Na central de atendimento, os chamados devem ser ordenados 
para priorizar os que aguardam há mais tempo (do que está esperando mais tempo até o que entrou por último).
*/

const chamados = [
  { id: 501, cliente: "Cliente A", tempoEsperaMinutos: 45 },
  { id: 502, cliente: "Cliente B", tempoEsperaMinutos: 120 },
  { id: 503, cliente: "Cliente C", tempoEsperaMinutos: 30 },
  { id: 504, cliente: "Cliente D", tempoEsperaMinutos: 90 },
];
const chamadosSort = chamados
  .slice()
  .sort(
    (chamadoA, chamadoB) =>
      chamadoA.tempoEsperaMinutos - chamadoB.tempoEsperaMinutos
  );
console.log(chamadosSort);

// Esperado (output):
// [
//   { id: 503, cliente: "Cliente C", tempoEsperaMinutos: 30 },
//   { id: 501, cliente: "Cliente A", tempoEsperaMinutos: 45 },
//   { id: 504, cliente: "Cliente D", tempoEsperaMinutos: 90 },
//   { id: 502, cliente: "Cliente B", tempoEsperaMinutos: 120 }
// ]
