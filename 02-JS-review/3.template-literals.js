/**
 * TEMPLATE LITERALS OU TEMPLATE STRINGS
 * É uma forma facilitada de interpolar variáveis, expressões, etc em strings JS
 *
 * UTILIDADE
 * Inserão de variáveis em uma string.
 * Escrever textos com várias linhas.
 * Criar frases dinâmicas em relatórios, logs, mensagens de sistema, etc.
 *  */
const colaborador = {
  nome: "Fulana de Tal",
  cargo: "Developer II",
  departamento: "TI",
  matricula: "JMT-4590",
  email: "fulana.tal@xpto.com",
  telefone: "(31) 99888-4433",
  dataAdmissao: "15/03/2021",
  gestor: "Cidadão Comum",
};

const resumo = `
Perfil do Colaborador(a)
--------------------------
Nome: ${colaborador.nome}
Matrícula: ${colaborador.matricula}
Cargo: ${colaborador.cargo}
Departamento: ${colaborador.departamento}
E-mail: ${colaborador.email}
Telefone: ${colaborador.telefone}
Data de Admissão: ${colaborador.dataAdmissao}
Gestor Responsável: ${colaborador.gestor}
`;
console.log(resumo);

const peso = 72;
const altura = 1.7;
console.log(`IMC = ${peso / (altura * altura)}`);

const p1 = {
  nome: "Luana",
  idade: 21,
};

const p2 = {
  nome: "Maria",
  idade: 16,
};

console.log(`${p1.nome} pode comprar cervejas? ${p1.idade > 18}`);
console.log(`${p2.nome} pode comprar cervejas? ${p2.idade > 18}`);
