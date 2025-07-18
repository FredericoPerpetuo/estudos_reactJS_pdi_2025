// Exercício 1 – Geração de relatório de vendas mensal
// Cenário: Um sistema de BI precisa gerar uma frase automática com os dados consolidados do mês.

const mes = "Junho";
const totalVendas = 128430.55;
const vendedorDestaque = "Mariana Lopes";
// Exemplo de saída esperada:
// "Em Junho, o total de vendas foi R$ 128.430,55. A vendedora destaque foi Mariana Lopes."
console.log(
  `Em ${mes}, o total de vendas foi R$ ${totalVendas}. A vendedora destaque foi ${vendedorDestaque}.`
);

// Exercício 2 – Log de alteração de permissões de usuário
// Cenário: Quando um admin altera o acesso de um usuário, o sistema deve registrar a mudança.
// Entrada esperada:
const usuario = "renato.souza";
const cargoAnterior = "Analista";
const novoCargo = "Coordenador";
const data = "2025-07-17";
// Exemplo de saída esperada:
// "[2025-07-17] Permissão alterada: renato.souza passou de Analista para Coordenador."
console.log(
  `${data} Permissão alterada: ${usuario} passou de ${cargoAnterior} para ${novoCargo}.`
);
// Exercício 3 – Alerta de limite de orçamento em centro de custo
// Cenário: Um sistema de ERP deve emitir alertas quando determinado centro de custo ultrapassa o limite.
// Entrada esperada:
const centroDeCusto = "Marketing Digital";
const limite = 30000;
const gastoAtual = 34500;
// Exemplo de saída esperada:
// "⚠️ Centro de custo 'Marketing Digital' excedeu o limite! Limite: R$ 30.000,00 | Atual: R$ 34.500,00"
console.log(
  `⚠️ Centro de custo \'${centroDeCusto}\' excedeu o limite! Limite: R$ ${limite} | Atual: R$ ${gastoAtual}`
);

// Exercício 4 – Composição de e-mail para reunião com cliente
// Cenário: O sistema deve montar o corpo de um e-mail personalizado com os dados da reunião.
//Entrada esperada:
const cliente = "Empresa XYZ";
const responsavel = "Camila Teixeira";
const horario = "10h30";
const dataReuniao = "21/07/2025";
//Exemplo de saída esperada: Olá Camila Teixeira, a reunião com o cliente Empresa XYZ está agendada para 21/07/2025 às 10h30.
console.log(
  `Olá ${responsavel}, a reunião com o cliente ${cliente} está agendada para ${dataReuniao} às ${horario}.`
);

// Exercício 5 – Linha de status de processamento de lote
// Cenário: Um sistema de automação exibe o status atual do processamento de cada lote.
// Entrada esperada:
const lote = 3821;
const statusProcessamento = "Concluído";
const registrosProcessados = 1289;
//Exemplo de saída esperada: Lote 3821 | Status: Concluído | Registros: 1289
console.log(
  `Lote ${lote} | Status: ${statusProcessamento} | Registros: ${registrosProcessados}`
);
