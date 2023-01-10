// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const algarismoRomano = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,

};

function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    const len = numero.length;
    let soma = algarismoRomano[numero[len - 1]];
    let atual = algarismoRomano[numero[len - 1]];

    for (let i = 2; i <= len; i += 1) {
        const prox = algarismoRomano[numero[len - i]];
        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
            atual = prox;
        }
        atual = prox;
    }

return soma;
}

// console.log(romanoParaDecimal('MMXVIII')); // 2018
// console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('iv')); // 4
console.log(algarismoRomano['v']);