/**
 * FILTER
 * Filtra os elementos de array baseado em uma condição
 */

const clientes = [
  {
    id: 1,
    tipo: "PF",
    nome: "Ana Silva",
    cpf: "123.456.789-00",
    email: "ana@email.com",
    telefone: "(11) 91234-5678",
    cidade: "São Paulo",
  },
  {
    id: 2,
    tipo: "PJ",
    razaoSocial: "Loja do Bruno LTDA",
    cnpj: "12.345.678/0001-99",
    email: "contato@lojabruno.com",
    telefone: "(21) 99876-5432",
    cidade: "Rio de Janeiro",
  },
  {
    id: 3,
    tipo: "PF",
    nome: "Carlos Lima",
    cpf: "987.654.321-00",
    email: "carlos@email.com",
    telefone: "(31) 98765-4321",
    cidade: "Belo Horizonte",
  },
  {
    id: 4,
    tipo: "PJ",
    razaoSocial: "Tech Solutions ME",
    cnpj: "98.765.432/0001-11",
    email: "suporte@techsolutions.com",
    telefone: "(41) 97654-3210",
    cidade: "Curitiba",
  },
  {
    id: 5,
    tipo: "PF",
    nome: "Daniela Rocha",
    cpf: "111.222.333-44",
    email: "daniela@email.com",
    telefone: "(51) 96543-2109",
    cidade: "Porto Alegre",
  },
  {
    id: 6,
    tipo: "PJ",
    razaoSocial: "Construtora Alves SA",
    cnpj: "55.666.777/0001-22",
    email: "contato@alvesconstrutora.com",
    telefone: "(71) 95432-1098",
    cidade: "Salvador",
  },
  {
    id: 7,
    tipo: "PF",
    nome: "Eduardo Costa",
    cpf: "222.333.444-55",
    email: "eduardo@email.com",
    telefone: "(61) 94321-0987",
    cidade: "Brasília",
  },
  {
    id: 8,
    tipo: "PJ",
    razaoSocial: "Transportes Ribeiro LTDA",
    cnpj: "33.444.555/0001-33",
    email: "contato@ribeirotransportes.com",
    telefone: "(85) 93210-9876",
    cidade: "Fortaleza",
  },
  {
    id: 9,
    tipo: "PF",
    nome: "Fernanda Martins",
    cpf: "444.555.666-77",
    email: "fernanda@email.com",
    telefone: "(95) 92109-8765",
    cidade: "Boa Vista",
  },
  {
    id: 10,
    tipo: "PJ",
    razaoSocial: "Agro Mendes EIRELI",
    cnpj: "77.888.999/0001-44",
    email: "agro@mendes.com",
    telefone: "(27) 91098-7654",
    cidade: "Vitória",
  },
];
const clientesPJ = clientes.filter((cliente) => cliente.tipo === "PJ");

console.log(clientesPJ);
