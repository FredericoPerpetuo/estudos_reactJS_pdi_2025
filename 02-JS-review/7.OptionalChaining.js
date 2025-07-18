/**
 * OPTIONAL CHAINING
 *  Verifica se algo existe antes de tentar acessar o que está dentro.
 *
 * OBJETIVO: evitar erro de acesso a dos que não existem.
 * Use ?. sempre que não tiver certeza se algo existe e quiser evitar erro -> Se existir, me mostra. Se não, só me diga que não tem."
 * */
const usuario = {
  nome: "Ana",
  endereco: {
    cidade: "São Paulo",
    // rua está ausente!
  },
};

// Com optional chaining:
console.log(usuario.endereco.rua?.nome); // undefined (sem erro!)

// Sem optional chaining – isso dá erro:
console.log(usuario.endereco.rua.nome); //rua é undefined e tentamos acessar o atributo nome de undefined
