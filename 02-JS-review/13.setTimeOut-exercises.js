// ==============================================
// Exercícios Corporativos com setTimeout (JavaScript)
// ==============================================

// ==============================================
// 1. Logística – Simular envio programado de notificações de entregas
// ==============================================

/*
Descrição:
A área de logística quer testar o envio de notificações para entregas que estão saindo do centro de distribuição. 
Cada notificação deve ser disparada com um pequeno atraso para simular o tempo real de envio em sequência.

Use setTimeout para simular os envios.

*/

const entregas = [
  { pedidoId: 9001, motorista: "Carlos", destino: "São Paulo" },
  { pedidoId: 9002, motorista: "Ana", destino: "Campinas" },
  { pedidoId: 9003, motorista: "João", destino: "Ribeirão Preto" },
];

// Esperado (output no console, com atrasos entre as mensagens):
// Enviando notificação: Pedido 9001 – Destino: São Paulo
// Enviando notificação: Pedido 9002 – Destino: Campinas
// Enviando notificação: Pedido 9003 – Destino: Ribeirão Preto
entregas.forEach((entrega, index) => {
  setTimeout(() => {
    console.log(
      `Enviando notificação: Pedido ${entrega.pedidoId} – Destino: ${entrega.destino}`
    );
  }, index * 2000); // Atraso de 2 segundos entre cada notificação
});

// ==============================================
// 2. Recursos Humanos – Agendar alertas de entrevistas
// ==============================================

/*
Descrição:
O setor de RH deseja agendar lembretes automáticos para entrevistas com candidatos, que devem ser disparados com um intervalo entre cada um.

Use setTimeout para simular esses lembretes programados.

*/

const entrevistas = [
  { candidato: "Mariana", horario: "09:00" },
  { candidato: "Eduardo", horario: "09:30" },
  { candidato: "Vanessa", horario: "10:00" },
];

entrevistas.forEach((entrevista, index) => {
  setTimeout(
    () =>
      console.log(
        `Alerta: Entrevista com ${entrevista.candidato} às ${entrevista.horario}`
      ),
    index * 3000
  );
});

// Esperado (output no console):
// Alerta: Entrevista com Mariana às 09:00
// Alerta: Entrevista com Eduardo às 09:30
// Alerta: Entrevista com Vanessa às 10:00

// ==============================================
// 3. Suporte Técnico – Simular carregamento de tarefas pendentes
// ==============================================

/*
Descrição:
Ao iniciar o sistema de atendimento técnico, cada chamado pendente deve ser exibido um por um com leve atraso, 
simulando carregamento progressivo na interface.

Use setTimeout para simular esse comportamento.

*/

const chamadosPendentes = [
  { id: 1, cliente: "Empresa X", problema: "Sistema fora do ar" },
  { id: 2, cliente: "Empresa Y", problema: "Erro de login" },
  { id: 3, cliente: "Empresa Z", problema: "Impressora não funciona" },
];

chamadosPendentes.forEach((chamado, index) => {
  setTimeout(() => {
    console.log(`Carregando chamado: ${chamado.problema}`);
  }, 1000 * index);
});

// Esperado (output no console):
// Carregando chamado: Sistema fora do ar
// Carregando chamado: Erro de login
// Carregando chamado: Impressora não funciona

// ==============================================
// 4. Marketing – Agendar disparo de campanhas promocionais
// ==============================================

/*
Descrição:
O setor de marketing quer simular o envio programado de campanhas promocionais com intervalos controlados entre cada envio.

Use setTimeout para simular os disparos com atraso.

*/

const campanhas = [
  { nome: "Promoção Dia do Cliente", canal: "Email" },
  { nome: "Cashback Relâmpago", canal: "SMS" },
  { nome: "Frete Grátis Hoje", canal: "Notificação Push" },
];

campanhas.forEach((campanha, index) => {
  setTimeout(() => {
    console.log(`Disparando campanha: ${campanha.nome} via ${campanha.canal}`);
  }, 500 * index);
});

// Esperado (output no console):
// Disparando campanha: Promoção Dia do Cliente via Email
// Disparando campanha: Cashback Relâmpago via SMS
// Disparando campanha: Frete Grátis Hoje via Notificação Push

// ==============================================
// 5. TI – Simular execução em lote de scripts de manutenção
// ==============================================

/*
Descrição:
O time de TI realiza scripts de manutenção nos servidores e precisa simular uma execução em lote, 
com atraso entre cada script, para evitar sobrecarga.

Use setTimeout para simular a execução escalonada.

*/

const scripts = [
  { nome: "Backup diário", servidor: "Servidor A" },
  { nome: "Limpeza de cache", servidor: "Servidor B" },
  { nome: "Atualização de segurança", servidor: "Servidor C" },
];

scripts.forEach((script, index) => {
  setTimeout(() => {
    console.log(`Executando script: ${script.nome} no ${script.servidor}`);
  }, index * 1000);
});

// Esperado (output no console):
// Executando script: Backup diário no Servidor A
// Executando script: Limpeza de cache no Servidor B
// Executando script: Atualização de segurança no Servidor C
