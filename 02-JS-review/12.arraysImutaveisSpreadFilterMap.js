/**
 * No front-end é sempre uma boa prática não modificar o array original, mas sim gerar uma cópia dele e retorna-la.
 * Usaremos o operador spread e os métodos filter e mapa para realizar adição, deleção e atualização de itens em
 * arrays.
 */
const produtos = [
  {
    id: 101,
    nome: "Notebook Dell Inspiron 15",
    preco: 3899.9,
    estoque: 25,
  },
  {
    id: 102,
    nome: "Monitor LG 24'' Full HD",
    preco: 899.99,
    estoque: 40,
  },
  {
    id: 103,
    nome: "Teclado Mecânico Logitech G Pro",
    preco: 499.9,
    estoque: 15,
  },
];

//1)Adicionando elementos com spread
const novoProduto = {
  id: 104,
  nome: "Mouse Gamer Warior Pro",
  preco: 99.9,
  estoque: 50,
};
const arrayComObjAdicionado = [...produtos, novoProduto];
console.log(arrayComObjAdicionado);

//2)Deletando elementos com filter
const arrayComObjDeletado = produtos.filter((produto) => produto.id !== 103); //Será retornado um array sem o produto de id 103
console.log(arrayComObjDeletado);

//3)Alterando elemento com map e sprad
const arrayComObjAtualizado = produtos.map((produto) =>
  produto.id === 101
    ? { ...produto, nome: "Esse produto foi alterado", estoque: 100 } //Os atributos serão sobrescritos noa produto de id 101
    : produto
);
console.log(arrayComObjAtualizado);
