// ============================
// Exercício 1 - Financeiro
// ============================
// Uma empresa registrou despesas operacionais agrupadas por centro de custo.
// Use reduce para calcular o total geral de despesas da empresa.

const despesas = [
  { centroCusto: "TI", valor: 3500 },
  { centroCusto: "Marketing", valor: 2100 },
  { centroCusto: "RH", valor: 1250 },
  { centroCusto: "TI", valor: 4000 },
  { centroCusto: "Marketing", valor: 1800 },
];

const totalDespesas = despesas.reduce(
  (soma, despesa) => soma + despesa.valor,
  0
);
console.log(totalDespesas);

// Saída esperada:
// Total de despesas: 12650

// ============================
// Exercício 2 - Logística
// ============================
// O setor de logística quer saber o total de unidades em estoque somando todos os produtos armazenados.

const estoque = [
  { produto: "Notebook", quantidade: 25 },
  { produto: "Monitor", quantidade: 40 },
  { produto: "Teclado", quantidade: 60 },
  { produto: "Mouse", quantidade: 55 },
];

const somaProdutos = estoque.reduce((soma, item) => soma + item.quantidade, 0);
console.log(somaProdutos);

// Saída esperada:
// Quantidade total em estoque: 180

// ============================
// Exercício 3 - Recursos Humanos
// ============================
// O departamento de RH precisa calcular o total bruto da folha salarial do mês.

const funcionarios = [
  { nome: "Carlos", salario: 4200 },
  { nome: "Amanda", salario: 3800 },
  { nome: "Lucas", salario: 4500 },
  { nome: "Renata", salario: 3900 },
];
const totalBruto = funcionarios.reduce(
  (soma, funcionario) => soma + funcionario.salario,
  0
);
console.log(totalBruto);
// Saída esperada:
// Total de salários pagos: 16400

// ============================
// Exercício 4 - Gestão de Projetos
// ============================
// Um gestor de projetos deseja saber o total de horas trabalhadas por todos os colaboradores em uma sprint.

const tarefas = [
  { colaborador: "Alice", horas: 5 },
  { colaborador: "Bruno", horas: 8 },
  { colaborador: "Alice", horas: 7 },
  { colaborador: "Carlos", horas: 10 },
  { colaborador: "Bruno", horas: 6 },
];

const totalHora = tarefas.reduce((soma, tarefa) => soma + tarefa.horas, 0);
console.log(totalHora);

// Saída esperada:
// Total de horas trabalhadas: 36

// ============================
// Exercício 5 - Vendas
// ============================
// A equipe de vendas quer somar o valor total arrecadado com todas as vendas realizadas no trimestre.

const vendas = [
  { cliente: "Empresa A", valorVenda: 15000 },
  { cliente: "Empresa B", valorVenda: 12500 },
  { cliente: "Empresa C", valorVenda: 9800 },
  { cliente: "Empresa A", valorVenda: 6600 },
];
const vlrTotalVendas = vendas.reduce(
  (soma, venda) => soma + venda.valorVenda,
  0
);
console.log(vlrTotalVendas);

// Saída esperada:
// Receita total: 43900

// ============================
// Exercício 6 - Tecnologia da Informação
// ============================
// A equipe de TI precisa calcular quanto de armazenamento (em GB) está sendo usado por todos os departamentos.

const consumoArmazenamento = [
  { departamento: "Financeiro", usoGB: 80 },
  { departamento: "RH", usoGB: 45 },
  { departamento: "TI", usoGB: 150 },
  { departamento: "Marketing", usoGB: 60 },
];
const totalArmazenamento = consumoArmazenamento.reduce(
  (soma, consumo) => soma + consumo.usoGB,
  0
);
console.log(totalArmazenamento);

// Saída esperada:
// Armazenamento total utilizado: 335 GB
