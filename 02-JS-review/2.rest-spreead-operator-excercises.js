//EXERCÍCIOS COM REST OPERATOR

// Exercício 1 - Coleta de argumentos para relatório de vendas
// Cenário: Um sistema corporativo de relatórios precisa de uma função que aceite um número variável de valores representando vendas diárias.
// Objetivo: Criar uma função `registrarVendas` que receba qualquer quantidade de argumentos numéricos (usando rest operator) representando vendas e os armazene em um array.
// Critérios de aceite:
// - A função deve aceitar qualquer número de argumentos.
// - Todos os valores devem ser armazenados em um array interno.
// - O exercício visa reforçar o uso do rest operator para capturar argumentos em funções.
function registrarVendas(...args) {
  return args;
}
console.log(registrarVendas(100, 200, 300));
console.log(registrarVendas(500, 600, 700, 800, 900));

// Exercício 2 - Separação de propriedades sensíveis de usuário
// Cenário: Um sistema de gestão de RH armazena dados de usuários, e você precisa extrair apenas os dados não sensíveis.
// Objetivo: Criar uma função `extrairDadosPublicos` que receba um objeto com várias propriedades, e use o operador rest para separar as propriedades `senha` e `cpf`, mantendo o restante em um novo objeto.
// Critérios de aceite:
// - Deve usar destructuring e rest operator para separar os dados.
// - A função deve retornar apenas as propriedades não sensíveis.
// - Este exercício reforça o uso de rest em objetos.
const usuario1 = {
  nome: "Fulano",
  idade: 44,
  login: "full@xpto.com",
  password: "full123",
};
function extrairDadosPublicos(usuario1) {
  const { login, password, ...dadosPublicos } = usuario;
  return dadosPublicos;
}
console.log(extrairDadosPublicos(usuario1));

// Exercício 3 - Agrupamento de parâmetros de API
// Cenário: Uma função que envia requisições precisa receber o endpoint e um número variável de parâmetros para a query.
// Objetivo: Criar uma função `montarRequisicao` que use o rest operator para capturar os parâmetros adicionais e organizá-los em um array.
// Critérios de aceite:
// - O primeiro parâmetro deve ser o endpoint (string).
// - Os demais parâmetros devem ser agrupados com o operador rest.
// - O exercício reforça a flexibilidade do rest em funções com múltiplos parâmetros.

function montarRequisicao(endpoint, ...parametros) {
  if (parametros.length === 0) {
    return endpoint;
  }
  return `${endpoint}?${parametros.join("&")}`;
}

const url = montarRequisicao(
  "https://api.empresa.com/relatorios",
  "ano=2025",
  "mes=07",
  "tipo=financeiro"
);
console.log(url);

// Exercício 4 - Filtragem de permissões de acesso
// Cenário: Um sistema de segurança corporativa lida com objetos de usuários contendo permissões variadas.
// Objetivo: Criar uma função `filtrarPermissoes` que remova propriedades como `id`, `senha`, `token`, e `ultimoLogin`, mantendo o restante.
// Critérios de aceite:
// - Deve utilizar rest operator para extrair as demais permissões.
// - Retornar um novo objeto sem as propriedades filtradas.
// - Este exercício reforça a técnica de exclusão com rest em objetos.

function filtrarPermissoes(dadosUsuario) {
  const { id, senha, token, ultimoLogin, ...dadosPublicos } = dadosUsuario;
  return dadosPublicos;
}

const usuario2 = {
  id: 123,
  nome: "Carlos Souza",
  email: "carlos.souza@empresa.com",
  perfil: "Administrador",
  senha: "abc123",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  ultimoLogin: "2025-07-05T10:34:00Z",
};
console.log(filtrarPermissoes(usuario2));

// Exercício 5 - Soma genérica de indicadores financeiros
// Cenário: Um painel corporativo recebe diversos indicadores financeiros (ex: lucro, prejuízo, despesas) como argumentos.
// Objetivo: Criar a função `somarIndicadores` que aceite qualquer quantidade de números e retorne a soma total.
// Critérios de aceite:
// - Usar rest operator para capturar os valores.
// - Realizar a soma usando `reduce`.
// - Reforça o uso do rest com funções utilitárias numéricas.
function somarIndicadores(...valores) {
  return valores.reduce((soma, indicador) => soma + indicador, 0);
}
console.log(somarIndicadores(10, 20, 40, 30));

// Exercício 6 - Reorganização de dados de cliente
// Cenário: Ao receber dados de clientes, você precisa separar `id` e `nome` e armazenar o restante como "dados adicionais".
// Objetivo: Criar uma função `organizarCliente` que use destructuring com rest para separar os dados principais dos complementares.
// Critérios de aceite:
// - Usar rest operator na desestruturação do objeto.
// - Retornar um objeto com duas chaves: `principais` (com `id` e `nome`) e `adicionais` (com o resto).
// - Reforça o uso de rest para organizar objetos complexos.
const cliente = {
  id: 5012,
  nome: "Luciana Almeida",
  email: "luciana.almeida@empresa.com",
  telefone: "(11) 91234-5678",
  endereco: "Rua das Palmeiras, 123",
  cidade: "São Paulo",
  estado: "SP",
  cep: "01234-567",
  dataCadastro: "2023-11-25",
  status: "ativo",
};
function organizarCliente(cliente) {
  const { id, nome, ...outrosDados } = cliente;
  return { principais: { id, nome }, adicionais: outrosDados };
}
console.log(organizarCliente(cliente));

// Exercício 7 - Criação de logger de eventos
// Cenário: Um sistema de monitoramento registra eventos diversos com dados variáveis.
// Objetivo: Criar uma função `registrarEvento` que receba o tipo de evento e qualquer quantidade de detalhes adicionais.
// Critérios de aceite:
// - O primeiro argumento deve ser o tipo (string).
// - Os demais argumentos devem ser capturados com rest operator.
// - O exercício reforça o uso do rest para logging flexível.
function registrarEvento(tipo, ...detalhes) {
  return {
    tipo,
    detalhes,
  };
}

console.log(
  registrarEvento(
    "ATUALIZACAO_CADASTRO",
    { idCliente: 3482 },
    "Campo alterado: email",
    "Alterado por: jose.silva@empresa.com",
    "Data: 2025-07-05T14:30:00"
  )
);

// Exercício 8 - Validação de campos obrigatórios
// Cenário: Um sistema de cadastro precisa validar se campos obrigatórios estão presentes, independentemente de quantos forem.
// Objetivo: Criar uma função `validarCampos` que receba uma lista de campos e retorne se todos são válidos (não vazios).
// Critérios de aceite:
// - A função deve receber os campos via rest operator.
// - Deve retornar `true` apenas se todos forem preenchidos.
// - Reforça o uso do rest com validações dinâmicas.

/* 
APRENDIZADO IMPORTANTE
function validarCampos(...campos) {
  campos.forEach((campo) => {
    if (campo === null || campo === undefined || campo === "") {
      return false;
    }
  });
  return true;
}
Esse código sempre retorna true, mesmo se houver campos inválidos. Por quê?
O return false dentro do forEach só encerra a função de callback passada para o forEach, 
não interrompe o laço nem retorna da função validarCampos.

O forEach não permite usar return ou break para sair do laço principal. 
*/

function validarCampos(...campos) {
  for (let campo of campos) {
    if (campo === null || campo === undefined || campo === "") {
      return false;
    }
  }
  return true;
}

function validarCampos2(...campos) {
  return campos.every(
    (campo) => campo !== null && campo !== undefined && campo !== ""
  );
}

console.log(validarCampos("João", "joao@email.com", "12345678900"));
console.log(validarCampos(null, "joao@email.com", "12345678900"));
console.log(validarCampos("João", "joao@email.com", ""));

// Exercício 9 - Combinação de listas de produtos
// Cenário: Diferentes departamentos enviam listas de produtos. O sistema precisa unificar essas listas para controle de estoque.
// Objetivo: Criar uma função `combinarProdutos` que aceite múltiplos arrays de produtos como argumentos e retorne um único array combinado.
// Critérios de aceite:
// - Capturar múltiplos arrays usando rest operator.
// - Unificar todos os arrays em um só.
// - Este exercício reforça o uso de rest para manipular coleções.

/**
 * APRENDIZADO IMPORTANTE
 * Método flat -> transforma um array de arrays em um única array
 */
function combinarProdutos(...listas) {
  return listas.flat();
}
const infomaticaProds = ["Memória RAM", "CPU", "Gabinete"];
const escritorioProd = ["caneta", "lápis", "pacote folha A4"];
console.log(combinarProdutos(infomaticaProds, escritorioProd));
// Exercício 10 - Função genérica para exclusão de propriedades
// Cenário: Uma biblioteca interna precisa de uma função para remover propriedades específicas de qualquer objeto.
// Objetivo: Criar uma função `removerPropriedades` que receba um objeto e uma lista de chaves a serem removidas, retornando um novo objeto com o restante.
// Critérios de aceite:
// - Usar rest operator para isolar as propriedades que não serão removidas.
// - Retornar um novo objeto sem as chaves especificadas.
// - Reforça o uso avançado de rest em manipulação de objetos.
function removerPropriedades(obj, ...chavesParaRemover) {
  const resultado = { ...obj };
  for (const chave of chavesParaRemover) {
    delete resultado[chave];
  }
  return resultado;
}

const obj = {
  id: 5012,
  nome: "Fulana",
  email: "ful@xpto",
  senha: "123123",
  cpf: "022.369.369-41",
};
console.log(removerPropriedades(obj, "id", "senha", "cpf"));

//EXERCÍCIOS SPREEAD OPERATOR

// Exercício 1 - Atualização de Produtos em Estoque
// Cenário: Um sistema de gestão de estoque precisa atualizar uma lista de produtos com novos itens recebidos no armazém.
// Objetivo: Criar uma função que receba duas listas (estoque atual e novos produtos) e retorne uma nova lista contendo
// todos os produtos, sem modificar os arrays originais, utilizando o spread operator.
// Critérios de aceite:
// - A função deve aceitar dois arrays como parâmetro.
// - Deve utilizar o spread operator para combinar os arrays.
// - Os arrays originais não podem ser alterados.
// - A função deve retornar um novo array com todos os produtos combinados.
const produtosAntigos = ["HD", "Gabnite", "Memória Ram"];
const produtosNovos = ["Mouse", "Teclado", "Monitor"];
function atualizaEstoque(arrayA, arrayB) {
  return [...arrayA, ...arrayB];
}
console.log(atualizaEstoque(produtosAntigos, produtosNovos));

// Exercício 2 - Clonagem de Perfil de Usuário
// Cenário: Um sistema de RH precisa criar uma cópia de um objeto de perfil de usuário para realizar simulações sem alterar os dados originais.
// Objetivo: Criar uma função que receba um objeto representando um colaborador e retorne uma cópia exata usando o spread operator.
// Critérios de aceite:
// - A função deve receber um objeto como argumento.
// - Deve utilizar o spread operator para clonar o objeto.
// - O objeto original não deve ser alterado.
// - A cópia deve ter os mesmos dados do original.
const user = {
  nome: "Fulano de Tal",
  cargo: "Dev",
  matricula: "123456",
};
function clonaObj(obj) {
  return (objClone = { ...obj });
}
console.log(clonaObj(user));

// Exercício 3 - Mesclagem de Preferências de Configuração
// Cenário: Um sistema corporativo permite que os usuários personalizem configurações, mas também possui configurações padrão.
// Objetivo: Criar uma função que una um objeto de configurações padrão com um objeto de preferências do usuário,
// onde as preferências sobrescrevem os padrões, utilizando o spread operator.
// Critérios de aceite:
// - A função deve receber dois objetos: padrão e preferências.
// - Deve usar o spread operator para mesclar os objetos.
// - As propriedades do segundo objeto devem sobrescrever as do primeiro.
// - O retorno deve ser um novo objeto sem alterar os originais.

function personalizarConfigs(padrao, personalizacoes) {
  return { ...padrao, ...personalizacoes };
}

const configuracoesPadrao = {
  login: "admin",
  senha: "admin2025",
  atualizacaoAutomatica: "true",
  backUpAutomatico: "true",
  tempoSessao: 30,
};

const configuracoesPersonalizadas = {
  login: "jsdev@xpto.com",
  senha: "123456",
};

console.log(
  personalizarConfigs(configuracoesPadrao, configuracoesPersonalizadas)
);

// Exercício 4 - Expansão de Listagem de Tarefas
// Cenário: Um dashboard de produtividade precisa exibir uma lista atualizada de tarefas a partir de várias
// fontes (ex: banco de dados e API externa).
// Objetivo: Criar uma função que combine múltiplas listas de tarefas em uma só, usando o spread operator.
// Critérios de aceite:
// - A função deve aceitar três ou mais arrays.
// - Utilizar o spread operator para concatenar todos em um único array.
// - O retorno deve ser um novo array com todas as tarefas combinadas.
// - Os arrays de origem devem permanecer inalterados.

// usei o rest para permitir um número indefinido de listas
function exibeListaAtualizadaDeTarefas(...tarefas) {
  return tarefas.flat();
}

// Lista de tarefas do banco de dados
const tarefasBanco = [
  { id: 1, titulo: "Revisar relatórios", status: "pendente" },
  { id: 2, titulo: "Enviar e-mails de follow-up", status: "em andamento" },
];

// Lista de tarefas da API externa
const tarefasApi = [
  { id: 3, titulo: "Atualizar cadastro de clientes", status: "pendente" },
  { id: 4, titulo: "Realizar backup do sistema", status: "concluída" },
];

// Lista de tarefas locais (temporárias)
const tarefasLocais = [
  { id: 5, titulo: "Planejar reunião de equipe", status: "pendente" },
  { id: 6, titulo: "Testar nova funcionalidade", status: "em andamento" },
];

console.log(
  exibeListaAtualizadaDeTarefas(tarefasBanco, tarefasApi, tarefasLocais)
);

// Exercício 5 - Atualização Parcial de Informações de Cliente
// Cenário: Um sistema de CRM permite atualizar apenas algumas informações do cliente mantendo os demais dados.
// Objetivo: Criar uma função que atualize parcialmente um objeto de cliente, usando o spread operator para mesclar os dados antigos com os novos.
// Critérios de aceite:
// - A função deve receber dois objetos: dados antigos e dados atualizados.
// - Usar o spread operator para criar um novo objeto mesclado.
// - Os dados atualizados devem sobrescrever os antigos.
// - Os objetos originais não devem ser modificados.

const dadosAntigos = {
  id: 5,
  nome: "Fulano de Tal",
  password: "padrão",
  login: "padrão",
};
const novosDados = {
  id: 5,
  nome: "Fulano de Tal",
  password: "fulano",
  login: "123456",
};

function atualizaDadosCliente(dadosAntigos, novosDados) {
  return { ...dadosAntigos, ...novosDados };
}
console.log(atualizaDadosCliente(dadosAntigos, novosDados));

// Exercício 6 - Duplicação de Registro de Venda com Ajustes
// Cenário: Uma equipe de vendas precisa duplicar um registro de venda com pequenas modificações para simulação de diferentes cenários.
// Objetivo: Criar uma função que retorne uma cópia de um objeto de venda, permitindo a substituição de campos
// como valor ou comissão, usando o spread operator.
// Critérios de aceite:
// - A função deve receber o objeto original e um objeto com os ajustes.
// - Usar spread operator para criar uma nova venda simulada.
// - A nova venda deve refletir os ajustes fornecidos.
// - O objeto original não deve ser alterado.
const vendaDefault = {
  Produto: "Padrão",
  preco: 0.0,
  comissao: 50.0,
};

const venda = {
  Produto: "PC GAMER",
  preco: 5000.0,
  comissao: 200.0,
};

function duplicarVenda(vendaDefault, venda) {
  return { ...vendaDefault, ...venda };
}
console.log(duplicarVenda(vendaDefault, venda));

// Exercício 7 - Criação de Relatório Combinado
// Cenário: Um sistema de relatórios precisa consolidar os dados de desempenho de diferentes departamentos em um único relatório.
// Objetivo: Criar uma função que combine vários arrays de resultados de desempenho em um único array, utilizando o spread operator.
// Critérios de aceite:
// - A função deve aceitar múltiplos arrays como argumentos.
// - Usar spread operator para unir os dados em um único array.
// - O array final deve conter todos os registros de forma ordenada.
// - Os arrays originais devem permanecer intactos.
const desempenhoFinanceiro = [
  { setor: "Financeiro", colaborador: "Ana", desempenho: 88 },
  { setor: "Financeiro", colaborador: "Carlos", desempenho: 91 },
];

const desempenhoRH = [
  { setor: "RH", colaborador: "Beatriz", desempenho: 95 },
  { setor: "RH", colaborador: "Daniel", desempenho: 89 },
];

const desempenhoTI = [
  { setor: "TI", colaborador: "Eduardo", desempenho: 92 },
  { setor: "TI", colaborador: "Fernanda", desempenho: 90 },
];

function combinarRelatorios(...relatorios) {
  return relatorios.flat();
}
console.log(
  combinarRelatorios(desempenhoFinanceiro, desempenhoRH, desempenhoTI)
);

// Exercício 8 - Reaproveitamento de Templates de Comunicação
// Cenário: Um sistema de envio de e-mails utiliza templates base que devem ser estendidos com mensagens personalizadas.
// Objetivo: Criar uma função que gere um novo objeto de e-mail a partir de um template base e de um conteúdo específico, usando spread operator.
// Critérios de aceite:
// - A função deve receber dois objetos: template base e conteúdo personalizado.
// - Deve retornar um novo objeto combinado com o spread operator.
// - O conteúdo personalizado deve sobrescrever os campos do template se houver conflito.
// - Os objetos originais devem ser mantidos intactos.
const templateBase = {
  assunto: "Assunto",
  remetente: "remetente@xpto.com",
  corpo: "texto",
  distinatario: "destinatario@xpto.com",
};

const email = {
  assunto: "Envio de pedido",
  remetente: "empresa@xpto.com",
  corpo:
    "Prezado cliente, informamos que seu pedido de número 6863 já está a caminhos. Agradecemos a preferência",
  distinatario: "fulano@xpto.com",
};

function gerarEmail(templateBase, email) {
  return { ...templateBase, ...email };
}
console.log(gerarEmail(templateBase, email));

// Exercício 9 - Combinação de Dados Financeiros
// Cenário: Um sistema de contabilidade precisa consolidar dados de receita de diferentes filiais em um relatório único para o financeiro.
// Objetivo: Criar uma função que receba múltiplos arrays de receitas e combine todos em um único array, com o uso do spread operator.
// Critérios de aceite:
// - A função deve aceitar múltiplos arrays como entrada.
// - Utilizar spread operator para fazer a combinação dos dados.
// - O retorno deve ser um novo array com todos os dados reunidos.
// - Os dados originais devem continuar inalterados.
const filial1 = [12000, 13500, 9800];
const filial2 = [15000, 14300];
const filial3 = [10200, 8900, 13400];

function combinarReceitas(...receitas) {
  return receitas.flat();
}
const consolidado = combinarReceitas(filial1, filial2, filial3);

console.log(combinarReceitas(filial1, filial2, filial3));

// Exercício 10 - Atualização de Permissões de Acesso
// Cenário: Um sistema de gestão de usuários precisa atualizar as permissões de um funcionário baseado em seu novo cargo,
// mantendo outras propriedades intactas.
// Objetivo: Criar uma função que atualize apenas o
// campo de permissões em um objeto de usuário, utilizando spread operator para preservar os demais dados.
// Critérios de aceite:
// - A função deve receber o objeto original e um array de novas permissões.
// - Usar spread operator para criar um novo objeto de usuário com as permissões atualizadas.
// - Os demais dados do usuário devem ser mantidos.
// - O objeto original não pode ser alterado.
const usuario = {
  nome: "Carlos Silva",
  cargo: "Analista",
  email: "carlos@empresa.com",
  permissoes: ["leitura"],
};

const novasPermissoes = ["leitura", "escrita", "admin"];

function atualizarPermissoes(usuario, novasPermissoes) {
  return { ...usuario, permissoes: novasPermissoes };
}

console.log(atualizarPermissoes(usuario, novasPermissoes));
