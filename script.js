// This is a commentary
/* Thi is a big commentary
so I have to use aterisk and backslash
i can use this to comment on a whole block  */

let nome = prompt ("Qual o seu nome?");
console.log(nome);
let idade = Number(prompt ("Qual a sua idade?"));
console.log(idade);


console.log ("Olá, eu sou ", nome, "eu tenho", idade, "anos");

let tenhoPet = false;
const nomeDoPet = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof tenhoPet);
console.log(typeof nomeDoPet);

// Exercício de fixação 1

const formatosCompetitivo = "Legacy, Modern, Pauper e Pioneiros";
let numberOfCards = 75;
let eterno = true;
console.log(typeof formatosCompetitivo);
console.log(typeof numberOfCards);
console.log(typeof eterno);
console.log("os formatos competitivos de MTG que não sofrem rotação são:", formatosCompetitivo, "os baralhos são compostos por", numberOfCards, "cartas, esse são chamados de formatos eternos" );

// Exercício de fixação 2

let a = 5;
let b = 10;
let c;

c=a
a=b
b=c

console.log ("A", a)
console.log ("B", b)
