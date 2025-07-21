/**
 * SORT
 * É utilizado para organizar um array de forma descendente ou ascendente
 * Ao contrário do métodos map e filter, o método sort modifica o array original
 * Para evitarmos a modificarção podemos fazer uma cópia do array utilizando o método slice
 */
const array1 = [3, 7, 1, 9, 6];
array1.sort((a, b) => a - b); // ascendente
console.log(array1);
array1.sort((a, b) => b - a); // ascendente
console.log(array1);

//Copia com slice
const array2 = [10, 6, 9, 3, 8];
const copia = array2.slice().sort((a, b) => a - b); // ascendente
console.log(copia);
console.log(array2);

//UTILIZANDO O SORT EM UM ARRAY DE OBJETOS
const usuarios = [
  {
    id: 4,
    nome: "João Mendes",
    email: "joao.mendes@empresa.com",
    departamento: "Marketing",
    ativo: true,
  },
  {
    id: 9,
    nome: "Juliana Martins",
    email: "juliana.martins@empresa.com",
    departamento: "TI",
    ativo: true,
  },
  {
    id: 2,
    nome: "Carlos Lima",
    email: "carlos.lima@empresa.com",
    departamento: "TI",
    ativo: false,
  },
  {
    id: 7,
    nome: "Patrícia Costa",
    email: "patricia.costa@empresa.com",
    departamento: "Comercial",
    ativo: true,
  },
  {
    id: 6,
    nome: "Ricardo Alves",
    email: "ricardo.alves@empresa.com",
    departamento: "Financeiro",
    ativo: true,
  },
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana.souza@empresa.com",
    departamento: "Financeiro",
    ativo: true,
  },
  {
    id: 10,
    nome: "Felipe Rocha",
    email: "felipe.rocha@empresa.com",
    departamento: "Comercial",
    ativo: true,
  },
  {
    id: 8,
    nome: "Daniel Ribeiro",
    email: "daniel.ribeiro@empresa.com",
    departamento: "Logística",
    ativo: false,
  },
  {
    id: 5,
    nome: "Luciana Silva",
    email: "luciana.silva@empresa.com",
    departamento: "TI",
    ativo: false,
  },
  {
    id: 3,
    nome: "Fernanda Dias",
    email: "fernanda.dias@empresa.com",
    departamento: "Recursos Humanos",
    ativo: true,
  },
];

const copiaUsuarios = usuarios
  .slice()
  .sort((usuarioA, usuarioB) => usuarioA.id - usuarioB.id); // ordenação ascendente por ID
console.log(copiaUsuarios);
