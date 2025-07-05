// Exercícios com Rest Operator

// 1. Relatório de Vendas Mensais
// Enunciado: Crie uma função que receba o nome de um vendedor e um número indefinido de valores de vendas mensais. Calcule a média das vendas.
function calcularMediaVendas(nomeVendedor, ...vendas) {
  let total = 0;
  let media = 0;
  for (let venda of vendas) {
    total += venda;
  }
  media = total / vendas.length;

  const mediaVendas = { vendedor: nomeVendedor, mediaCalculada: media };

  return mediaVendas;
}
console.log(calcularMediaVendas("Fulano", 100, 200, 300, 500));

// 2. Registro de Frequência em Treinamentos
// Enunciado: Uma função deve receber o nome de um colaborador e a lista de datas (como strings) em que ele participou de treinamentos.
// Liste todas as datas.
function registrarFrequencia(nome, ...datas) {
  console.log(`${nome} + " participou dos treinamentos de:`);
  datas.forEach((data) => {
    console.log(data);
  });
}
registrarFrequencia(
  "Beltrano da Silva",
  "20/01/2025",
  "15/03/2025",
  "01/07/2025"
);

// 3. Envio de Alertas Personalizados
// Enunciado: Crie uma função que receba o texto de uma notificação e múltiplos nomes de destinatários.
// A função deve montar uma mensagem de envio para cada um.
function enviarAlerta(texto, ...destinatarios) {
  destinatarios.forEach((destinatario) => {
    console.log(`${destinatario} ${texto}`);
  });
}
enviarAlerta(
  "sua senha vence em dois dias. Getileza atualizá-la",
  "Carlos",
  "Maria",
  "José",
  "Isa"
);
