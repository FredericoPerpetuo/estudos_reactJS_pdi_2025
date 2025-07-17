// 1. Sistema de Recursos Humanos – Nome e Cargo
// Desestruture o objeto funcionario para obter apenas o nome e o cargo.
const funcionario = {
  id: 101,
  nome: "Joana Silva",
  cargo: "Analista de RH",
  salario: 5500,
};

const { nome, cargo } = funcionario;
console.log(nome, cargo);

// 2. Sistema de Vendas – Detalhes do Produto
// Desestruture produto para extrair nome e preco em variáveis separadas.
const produto = {
  codigo: "A123",
  nome: "Notebook Lenovo",
  preco: 4200,
  estoque: 35,
};
const { nome, preco } = produto;
console.log(nome, preco);

// 3. ERP – Dados do Pedido com Alias
// Desestruture cliente e total do objeto pedido, mas utilizando nomes diferentes (nomeCliente e valorTotal).
const pedido = {
  numero: 9871,
  cliente: "Carlos Andrade",
  total: 319.9,
  status: "Em processamento",
};
const { cliente: nomeCliente, total: valorTotal } = pedido;
console.log(nomeCliente, valorTotal);

// 4. CRM – Informações de Contato
// Desestruture todos os campos do objeto contato em variáveis com o mesmo nome.
const contato = {
  nome: "Renata Borges",
  email: "renata@empresa.com",
  telefone: "11999887766",
};
const { nome, email, telefone } = contato;
console.log(nome, email, telefone);

// 5. Sistema Financeiro – Parcelas de Pagamento (Array)
// Desestruture o array parcelas para capturar as três primeiras parcelas em variáveis separadas e ignore a última.
const parcelas = [1000, 1100, 1200, 500];
const [primeira, segunda, terceira] = parcelas;
console.log(primeira, segunda, terceira);

// 6. Sistema de Estoque – Produto com Categoria
// Desestruture itemEstoque para extrair nome do produto e nome da categoria.
const itemEstoque = {
  id: 55,
  nome: "Cadeira Ergonômica",
  categoria: {
    id: 3,
    nome: "Móveis de Escritório",
  },
};
const {
  nome: nomeItem,
  categoria: { nome: nomeCategoria },
} = itemEstoque;
console.log(nomeItem, nomeCategoria);

// 7. Plataforma de E-learning – Usuário e Preferências
// Desestruture para obter nome, tema e notificacoes.
const usuario = {
  id: 202,
  nome: "Juliana Costa",
  preferencias: {
    tema: "dark",
    notificacoes: true,
  },
};
const {
  nome: nomeUsuario,
  preferencias: { tema, notificacoes },
} = usuario;
console.log(nomeUsuario, tema, notificacoes);

// 8. Sistema de Logística – Endereço de Entrega
// Desestruture entrega para capturar destinatario, rua e cidade.
const entrega = {
  destinatario: "Empresa XYZ",
  endereco: {
    rua: "Rua das Laranjeiras",
    numero: 120,
    cidade: "Campinas",
    estado: "SP",
  },
};
const {
  destinatario,
  endereco: { rua, cidade },
} = entrega;
console.log(destinatario, rua, cidade);

// 9. Sistema Bancário – Dados da Conta
// Desestruture nome e cpf do titular.
const conta = {
  agencia: "0001",
  numero: "12345-6",
  titular: {
    nome: "Marcos Paulo",
    cpf: "123.456.789-00",
  },
};
const {
  titular: { nome, cpf },
} = conta;
console.log(nome, cpf);

// 10. Sistema de Gestão de Projetos – Projeto e Equipe
// Desestruture nome do projeto e os dois primeiros nomes da equipe.
const projeto = {
  id: 44,
  nome: "Migração para Cloud",
  equipe: ["Ana", "Bruno", "Clara", "Daniel"],
};
const {
  nome,
  equipe: [primeiro, segundo],
} = projeto;
console.log(nome, primeiro, segundo);
