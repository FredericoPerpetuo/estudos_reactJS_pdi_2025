/**
 * Assincronismo é a capacidade de executar tarefas em paralelo ou sem esperar que uma termine para começar outra.
 * Ele é muito usado quando estamos lidando com tarefas que demoram para responder, como:
 * Buscar dados de um servidor
 * Ler arquivos do disco
 * Aguardar uma resposta do banco de dados
 * Em vez de parar o programa e esperar, o assincronismo permite que o restante do código
 *  continue rodando normalmente, enquanto a tarefa lenta acontece “nos bastidores”.
 *
 */
console.log("Primeira linha");
setTimeout(() => {
  console.log("Segunda linha");
  setTimeout(() => {
    console.log("Terceira linha");
    setTimeout(() => {
      console.log("Quarta linha");
    }, 2000);
  }, 2000);
}, 2000);
console.log("Quinta linha");
