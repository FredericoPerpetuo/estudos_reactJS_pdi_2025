/**
 * NULLISH COALESCING (??) E ||
 * Para o operador || os valores 0, false e "" são considerados falsos
 * Para o operador ?? esse valores são considerados verdadeiros e são retornados
 */
let idade = 0;
console.log(idade || 18); //Considera 0 como false e retorna 18
console.log(idade ?? 18); //Considera 0 como true e retorna 0

/**
 * SHORT CIRCUITING
 * A verificação é interrompida e o primeiro valor é retornado
 */
const logado = (userStatus) => userStatus && console.log("Bem-vindo!");
logado(false);
logado(true);

/**
 * APLICAÇÕES PRÁTICAS
 * Validação de formulários
 * Parâmetro padrão
 * Exibição condicional de conteúdo
 * */

//Validação de forms - o nome só será enviado se estiver preenchido
const enviarDados = (nome) => nome && console.log("Nome enviados com sucesso!");
enviarDados("");
enviarDados("Fulano de Tal");

//Parâmetro padrao
const corBotao = (cor) => cor ?? "blue";
console.log(corBotao());
console.log(corBotao("red"));

//Exibição condicional de conteúdo
//Saudação só será exibida se o usuário esttiver logado
const exibeSaudacao = (usuario) =>
  usuario && console.log(`Seja bem vindo ${usuario}`);
exibeSaudacao("");
exibeSaudacao();
exibeSaudacao("Fulano");
