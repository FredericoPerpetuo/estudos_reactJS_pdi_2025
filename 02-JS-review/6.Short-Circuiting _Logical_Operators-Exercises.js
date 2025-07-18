// ==============================
// Exercícios de NULLISH COALESCING (??) — Versão com Funções
// ==============================

/*
1. [Financeiro] Crie uma função `comissao` que recebe o valor da comissão de um vendedor.
   Caso o valor seja `null` ou `undefined`, retorne "Comissão pendente".
*/
const comissao = (vlr) => vlr ?? "Comissão pendente";
console.log(comissao(null));
console.log(comissao(undefined));
console.log(comissao(100));

/*
2. [Recursos Humanos] Crie uma função `feriasDisponiveis` que recebe a quantidade de dias de férias.
   Se o valor for ausente (`null` ou `undefined`), retorne 30 como padrão.
*/
const feriasDisponiveis = (dias) => dias ?? 30;
console.log(feriasDisponiveis(10));
console.log(feriasDisponiveis(null));
console.log(feriasDisponiveis(undefined));

/*
3. [Logística] Crie uma função `pesoPadrao` que recebe o peso de um pedido.
   Se o peso for `null` ou `undefined`, retorne 1 como valor padrão.
*/
const pesoPadrao = (peso) => peso ?? 1;
console.log(pesoPadrao(100));
console.log(pesoPadrao(null));
console.log(pesoPadrao(undefined));

/*
4. [Atendimento ao Cliente] Crie uma função `avaliacaoCliente` que recebe a nota de satisfação.
   Se o valor for `null` ou `undefined`, retorne "Cliente não avaliou".
*/
const avaliacaoCliente = (nota) => nota ?? "Cliente não avaliou";
console.log(avaliacaoCliente(0));
console.log(avaliacaoCliente(10));
console.log(avaliacaoCliente(null));
console.log(avaliacaoCliente(undefined));

/*
5. [Controle de Estoque] Crie uma função `descricaoProduto` que recebe uma descrição.
   Se a descrição for `null` ou `undefined`, retorne "Descrição indisponível".
*/
const descricaoProduto = (descricao) => descricao ?? "Descrição indisponível";
console.log(descricaoProduto(null));
console.log(descricaoProduto(undefined));
console.log(descricaoProduto("Notebook I5"));

// ==============================
// Exercícios de SHORT-CIRCUITING (|| e &&) — Versão com Funções
// ==============================

/*
6. [Vendas] Crie uma função `nomeClienteFormatado` que recebe o nome do cliente.
   Se o nome for falso (ex: "", null), retorne "Cliente não identificado".
*/
const nomeClienteFormatado = (nome) => nome || "Cliente não identificado";
console.log(nomeClienteFormatado(""));
console.log(nomeClienteFormatado(null));
console.log(nomeClienteFormatado("Fulano"));

/*
7. [Financeiro] Crie uma função `calcularMulta` que recebe um booleano `boletoVencido` e o valor da multa.
   Retorne a multa apenas se `boletoVencido` for `true`.
*/
const calcularMulta = (boletoVencido, multa) => boletoVencido && multa;
console.log(calcularMulta(true, 100));
console.log(calcularMulta(false, 100));
/*
8. [Logística] Crie uma função `verificarStatusPedido` que recebe um `statusAtual`.
   Se o status for falso (ex: null, ""), retorne "Status não informado".
*/
const verificarStatusPedido = (statusAtual) =>
  statusAtual || "Statusd não informado";
console.log(verificarStatusPedido(null));
console.log(verificarStatusPedido(""));
console.log(verificarStatusPedido("Enviado"));

/*
9. [TI / Infraestrutura] Crie uma função `iniciarBackup` que recebe um booleano `servidorOnline`.
   Se `servidorOnline` for `true`, retorne "Backup iniciado".
*/
const iniciarBackup = (servidorOnline) =>
  servidorOnline && "Backup iniciado...";
console.log(iniciarBackup(true));
console.log(iniciarBackup(false));

/*
10. [RH / Benefícios] Crie uma função `acessarSaldoVale` que recebe um booleano `cadastroCompleto` e um número `saldo`.
     Se o cadastro estiver completo (`true`), retorne o saldo.
*/
const acessarSaldoVale = (cadastroCompleto, saldo) => cadastroCompleto && saldo;
console.log(acessarSaldoVale(true, 100));
console.log(acessarSaldoVale(false, 100));
