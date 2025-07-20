// =====================
// Exercício 1 – RH: Filtrar funcionários com pendências de documentação
// =====================
// Enunciado:
// Em uma empresa, é necessário identificar os funcionários que ainda não entregaram todos os documentos obrigatórios para contratação.
// Use o método filter para gerar uma lista com apenas os funcionários que estão com documentação pendente.

const funcionarios = [
  { nome: "Ana", documentosEntregues: true },
  { nome: "Carlos", documentosEntregues: false },
  { nome: "Luciana", documentosEntregues: false },
  { nome: "Pedro", documentosEntregues: true },
];

// Entrada esperada:
// Array de objetos com a lista de funcionários com documentos pendentes.

// Saída esperada:
// [
//   { nome: "Carlos", documentosEntregues: false },
//   { nome: "Luciana", documentosEntregues: false }
// ]
const funcionariosFilter = funcionarios.filter(
  (func) => func.documentosEntregues === false
);
console.log(funcionariosFilter);

// -------------------------------------------------------------

// =====================
// Exercício 2 – Projetos: Selecionar apenas os projetos ativos com atraso
// =====================
// Enunciado:
// Um sistema de gestão de projetos precisa exibir apenas os projetos que estão ativos e com status de atraso.
// Use o método filter para obter esses projetos.

const projetos = [
  { id: 101, status: "ativo", emAtraso: true },
  { id: 102, status: "concluído", emAtraso: true },
  { id: 103, status: "ativo", emAtraso: false },
  { id: 104, status: "ativo", emAtraso: true },
];

// Entrada esperada:
// Array de objetos representando os projetos no sistema.

// Saída esperada:
// [
//   { id: 101, status: "ativo", emAtraso: true },
//   { id: 104, status: "ativo", emAtraso: true }
// ]
const projetosFilter = projetos.filter(
  (projeto) => projeto.status === "ativo" && projeto.emAtraso === true
);
console.log(projetosFilter);

// -------------------------------------------------------------

// =====================
// Exercício 3 – Financeiro: Identificar transações suspeitas
// =====================
// Enunciado:
// O setor financeiro precisa identificar transações com valor acima de R$ 10.000 realizadas por usuários não verificados.
// Use o método filter para separar essas transações para análise.

const transacoes = [
  { usuario: "cliente1", valor: 8700, verificado: true },
  { usuario: "cliente2", valor: 12000, verificado: false },
  { usuario: "cliente3", valor: 25000, verificado: false },
  { usuario: "cliente4", valor: 9800, verificado: true },
];

// Entrada esperada:
// Array de objetos contendo transações bancárias.

// Saída esperada:
// [
//   { usuario: "cliente2", valor: 12000, verificado: false },
//   { usuario: "cliente3", valor: 25000, verificado: false }
// ]
const transacoesFilter = transacoes.filter(
  (transacao) => transacao.valor > 10000
);
console.log(transacoesFilter);

// -------------------------------------------------------------

// =====================
// Exercício 4 – Logística: Filtrar entregas que falharam
// =====================
// Enunciado:
// Um sistema de logística precisa mostrar todas as entregas que falharam na primeira tentativa para reprogramação.
// Use o método filter para separar essas entregas.

const entregas = [
  { pedidoId: "A1", status: "entregue" },
  { pedidoId: "B2", status: "falha" },
  { pedidoId: "C3", status: "falha" },
  { pedidoId: "D4", status: "entregue" },
];

// Entrada esperada:
// Array de objetos com status das entregas.

// Saída esperada:
// [
//   { pedidoId: "B2", status: "falha" },
//   { pedidoId: "C3", status: "falha" }
// ]

const entregasFilter = entregas.filter((entrega) => entrega.status === "falha");
console.log(entregasFilter);

// -------------------------------------------------------------

// =====================
// Exercício 5 – Comercial: Listar clientes com contratos ativos e vencimento próximo
// =====================
// Enunciado:
// O setor comercial deseja listar clientes com contrato ativo e vencimento dentro dos próximos 30 dias.
// Use o método filter para identificar esses contratos.

const contratos = [
  { cliente: "Empresa A", ativo: true, diasParaVencer: 15 },
  { cliente: "Empresa B", ativo: false, diasParaVencer: 10 },
  { cliente: "Empresa C", ativo: true, diasParaVencer: 45 },
  { cliente: "Empresa D", ativo: true, diasParaVencer: 25 },
];

// Entrada esperada:
// Array de contratos com status e prazo de vencimento.

// Saída esperada:
// [
//   { cliente: "Empresa A", ativo: true, diasParaVencer: 15 },
//   { cliente: "Empresa D", ativo: true, diasParaVencer: 25 }
// ]
const contratosFilter = contratos.filter(
  (contrato) => contrato.diasParaVencer < 30 && contrato.ativo === true
);
console.log(contratosFilter);

// -------------------------------------------------------------

// =====================
// Exercício 6 – TI: Selecionar usuários com acesso expirado
// =====================
// Enunciado:
// O setor de TI precisa bloquear os acessos de usuários cujo acesso expirou.
// Use o método filter para obter apenas os usuários com acesso expirado.

const usuarios = [
  { nome: "Marcos", acessoExpirado: true },
  { nome: "Elaine", acessoExpirado: false },
  { nome: "Thiago", acessoExpirado: true },
  { nome: "Fernanda", acessoExpirado: false },
];

// Entrada esperada:
// Lista de usuários e seus respectivos status de acesso.

// Saída esperada:
// [
//   { nome: "Marcos", acessoExpirado: true },
//   { nome: "Thiago", acessoExpirado: true }
// ]
const usuariosFilter = usuarios.filter(
  (usuario) => usuario.acessoExpirado === true
);
console.log(usuariosFilter);
