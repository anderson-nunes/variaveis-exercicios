const nome = prompt("Qual é o seu nome?");
const dataNascimento = Number(prompt("Quando você nasceu?"));
const endereco = prompt("Qual é o seu endereço?");
const cpf = Number(prompt("Qual é o seu CPF"));
const escolaridade = prompt("Qual é a sua escolaridade?");
const cnh = prompt("Você possui CNH?");
const filhos = prompt("Você tem filhos?");
const cargoAtual = prompt("Qual é o seu cargo atual?");
const salario = Number(prompt("Qual é o seu salário?"));
const comissao = prompt("Você recebe comissão?");
const admissao = Number(prompt("Quando foi a sua admissão?"));

console.log(typeof nome);
console.log(typeof dataNascimento);
console.log(typeof endereco);
console.log(typeof cpf);
console.log(typeof escolaridade);
console.log(typeof cnh);
console.log(typeof filhos);
console.log(typeof cargoAtual);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof admissao);

console.log("O meu nome é", nome, "nasci em", dataNascimento);

console.log(
  "Meu nome é",
  nome,
  ",",
  "nasci na data de",
  dataNascimento,
  ",",
  "moro em",
  endereco,
  ",",
  "meu CPF é",
  cpf,
  ",",
  "minha escolaridade é",
  escolaridade,
  ",",
  cnh,
  ",",
  "eu possuo CNH",
  "eu",
  filhos,
  " tenho filhos",
  "o meu cargo atual é",
  cargoAtual,
  "com um salário de",
  salario,
  "eu",
  comissao,
  "recebo comissão",
  "fui admitido em",
  admissao
);
