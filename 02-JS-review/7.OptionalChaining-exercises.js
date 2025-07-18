// EXERCÍCIO 1 - CRM: Acesso ao nome do gerente de conta
// Imagine um sistema de CRM que registra informações sobre clientes corporativos.
// Cada cliente pode ter um gerente de conta associado, mas nem todos têm.
// A variável `cliente` representa um desses registros.
// Objetivo: Usar optional chaining para acessar o nome do gerente de conta,
// sem lançar erro caso o cliente ainda não tenha um gerente atribuído.
const cliente1 = {
  razaoSocial: "Distribuidora Ideal Ltda",
  gerenteConta: null,
};

const cliente2 = {
  razaoSocial: "Distribuidora Ideal Ltda",
  gerenteConta: { nome: "Cidadão Comum" },
};

const getNome = (cliente) => cliente.gerenteConta?.nome;
console.log(getNome(cliente1));
console.log(getNome(cliente2));

// EXERCÍCIO 2 - E-commerce: Acesso a informações de rastreamento
// Em uma plataforma de e-commerce, nem todos os pedidos possuem código de rastreamento.
// Alguns pedidos ainda estão sendo separados ou aguardando envio.
// A variável `pedido` contém os dados do pedido de um cliente.
// Objetivo: Acessar o nome da transportadora caso os dados de rastreamento estejam disponíveis.

const pedido1 = {
  id: 1423,
  cliente: "Marcos Vieira",
  rastreamento: undefined,
};

const pedido2 = {
  id: 1423,
  cliente: "Marcos Vieira",
  rastreamento: { codigo: "BR1234567", transportadora: { nome: "Correios" } },
};

const getTransportadora = (pedido) => pedido.rastreamento?.transportadora?.nome;
console.log(getTransportadora(pedido1));
console.log(getTransportadora(pedido2));

// EXERCÍCIO 3 - RH: Verificar e-mail pessoal do funcionário
// Um sistema de RH armazena dados de contato dos funcionários.
// O campo `emailPessoal` pode não estar preenchido em alguns cadastros antigos.
// Objetivo: Acessar o e-mail pessoal do funcionário, caso exista, com segurança.

const funcionario1 = {
  nome: "Fulana de Tal",
  contatos: {
    telefone: "11999990000",
  },
};

const funcionario2 = {
  nome: "Beltrana de Tal",
  contatos: {
    telefone: "11888880000",
    email: "bel@xpto.com",
  },
};

const getEmail = (funcionario) => funcionario.contatos?.email;
console.log(getEmail(funcionario1));
console.log(getEmail(funcionario2));

// EXERCÍCIO 4 - ERP: Conferir nome do fornecedor do item da nota
// Em sistemas de ERP, uma nota fiscal pode conter diversos itens.
// Nem todos os itens têm o campo `fornecedor` preenchido (especialmente itens de produção própria).
// Objetivo: Acessar o nome do fornecedor do primeiro item da nota fiscal, se houver.

const notaFiscal1 = {
  numero: 8877,
  itens: [
    {
      produto: "Teclado Mecânico",
    },
  ],
};

const notaFiscal2 = {
  numero: 9977,
  itens: [
    {
      produto: "Headset",
      fornecedor: { nome: "TechSupplies S.A." },
    },
  ],
};

const getFornecedor = (nf) => nf.itens[0].fornecedor?.nome;
console.log(getFornecedor(notaFiscal1));
console.log(getFornecedor(notaFiscal2));

// EXERCÍCIO 5 - Integração com sistema legado: Campo opcional de contato de emergência
// Alguns registros de colaboradores importados de sistemas legados não têm contato de emergência cadastrado.
// Objetivo: Acessar o nome do contato de emergência de um colaborador, se existir.

const colaborador1 = {
  id: "EMP9921",
  nome: "João Carlos",
  contatoEmergencia: null,
};

const colaborador2 = {
  id: "GLP8821",
  nome: "Gilberto Lopes",
  contatoEmergencia: { nome: "Fernanda", telefone: "11988776655" },
};

const getContatoEmergencia = (colaborador) =>
  colaborador.contatoEmergencia?.telefone;

console.log(getContatoEmergencia(colaborador1));
console.log(getContatoEmergencia(colaborador2));

// EXERCÍCIO 6 - Dados de API: Verificar status de entrega
// Você está consumindo uma API externa que fornece status de entrega de pedidos.
// Em alguns casos, a API retorna dados incompletos, como `statusEntrega` ausente.
// Objetivo: Acessar a descrição do status de entrega, se disponível.

const respostaAPI1 = {
  pedidoId: 1102,
};

const respostaAPI2 = {
  pedidoId: 1102,
  statusEntrega: {
    codigo: "EM_TRANSITO",
    descricao: "Em trânsito para o destino",
  },
};

const getStatusEntrega = (respAPI) => respAPI.statusEntrega?.descricao;
console.log(getStatusEntrega(respostaAPI1));
console.log(getStatusEntrega(respostaAPI2));
