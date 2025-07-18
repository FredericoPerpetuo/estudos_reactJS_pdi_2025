// Exercício 1: Controle de Acesso com Base no Cargo
// Em um sistema interno corporativo, crie uma função chamada "temAcessoFinanceiro" que receba o cargo do colaborador como parâmetro.
// A função deve retornar true se o cargo for "Gerente" ou "Diretor", e false para qualquer outro.
// Utilize exclusivamente o operador ternário na lógica interna da função.
function acessoFinanceiro(cargo) {
  return cargo !== "Gerente" && cargo !== "Diretor" ? false : true;
}
console.log(acessoFinanceiro("Gerente"));
console.log(acessoFinanceiro("Diretor"));
console.log(acessoFinanceiro("Vendedor"));

// Exercício 2: Verificação de Meta de Vendas
// Em um sistema de CRM, crie uma função chamada "statusDaMeta" que receba como parâmetros o valor vendido (vendas) e a meta mensal.
// A função deve retornar "Atingida" se as vendas forem maiores ou iguais à meta, ou "Não Atingida" caso contrário.
// Utilize o operador ternário para essa verificação.
function statusDaMeta(vlrVendas, meta) {
  return vlrVendas >= meta ? "Atingida" : "Não atingida";
}
console.log(statusDaMeta(300, 200));
console.log(statusDaMeta(400, 400));
console.log(statusDaMeta(500, 600));

// Exercício 3: Cálculo de Bonificação por Desempenho
// Em um sistema de RH, crie uma função chamada "temBonus" que receba uma nota de avaliação de desempenho (entre 1 e 5).
// A função deve retornar true se a nota for igual ou superior a 4.0, ou false se for inferior.
// A lógica deve ser implementada utilizando operador ternário.
function temBonus(nota) {
  return nota >= 4.0 ? true : false;
}
console.log(temBonus(3.9));
console.log(temBonus(3.0));
console.log(temBonus(4.1));
console.log(temBonus(5.0));

// Exercício 4: Aplicação de Desconto Comercial
// Em um sistema de ERP, crie uma função chamada "clienteTemDesconto" que receba como parâmetro o tipo de cliente.
// A função deve retornar true apenas se o cliente for do tipo "Corporativo", e false caso contrário.
// Use operador ternário na estrutura condicional.
function clienteTemDesconto(tipoCliente) {
  return tipoCliente === "Corporativo" ? true : false;
}
console.log(clienteTemDesconto("Corporativo"));
console.log(clienteTemDesconto("Pessoa física"));

// Exercício 5: Classificação de Risco Financeiro
// Em um dashboard financeiro, crie uma função chamada "classificarRisco" que receba um score de crédito (0 a 1000).
// A função deve retornar "Alto Risco" se o score for inferior a 600, e "Baixo Risco" caso contrário.
// Utilize exclusivamente o operador ternário na implementação.
function classificarRisco(score) {
  return score < 600 ? "Alto Risco" : "Baixo Risco";
}
console.log(classificarRisco(100));
console.log(classificarRisco(599));
console.log(classificarRisco(600));
console.log(classificarRisco(700));

// Exercício 6: Aprovação de Solicitação de Férias
// Em um sistema de RH, crie uma função chamada "avaliarSolicitacaoFerias" que receba os dias disponíveis e os dias solicitados.
// A função deve retornar "Aprovada" se os dias disponíveis forem iguais ou maiores que os dias solicitados, e "Rejeitada" caso contrário.
// Use o operador ternário para retornar a decisão.
function avaliarSolicitacaoFerias(diasDisponiveis, diasSolicitados) {
  return diasDisponiveis >= diasSolicitados ? "Aprovada" : "Negada";
}
console.log(avaliarSolicitacaoFerias(10, 10));
console.log(avaliarSolicitacaoFerias(9, 10));
console.log(avaliarSolicitacaoFerias(20, 10));
