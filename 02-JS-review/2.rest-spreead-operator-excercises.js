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
