/**
 * REDUCE
 * É utilizado para "reduzir" os elementos de um array a um único elemento,
 * como por exemplo somar os valores de um array
 */
const operacoesFinanceiras = [
  {
    id: 1,
    tipo: "Despesa",
    descricao: "Pagamento de aluguel da sede",
    valor: 8000.0,
    data: "2025-07-01",
    categoria: "Despesas Fixas",
  },
  {
    id: 2,
    tipo: "Despesa",
    descricao: "Compra de licenças de software",
    valor: 2500.0,
    data: "2025-07-03",
    categoria: "TI",
  },
  {
    id: 3,
    tipo: "Despesa",
    descricao: "Pagamento de salários",
    valor: 32000.0,
    data: "2025-07-05",
    categoria: "Folha de Pagamento",
  },
  {
    id: 4,
    tipo: "Despesa",
    descricao: "Serviço de consultoria jurídica",
    valor: 4500.0,
    data: "2025-07-10",
    categoria: "Jurídico",
  },
  {
    id: 5,
    tipo: "Despesa",
    descricao: "Manutenção de equipamentos",
    valor: 1600.0,
    data: "2025-07-12",
    categoria: "Operacional",
  },
];

/**
 * acumulador => acumula os valores de cada item, tem de ser incializado com algum valor
 * no nosso caso, zero.
 */
const operacoesFinanceirasReduce = operacoesFinanceiras.reduce(
  (acumulador, operacao) => acumulador + operacao.valor,
  0
);

console.log(operacoesFinanceirasReduce);
