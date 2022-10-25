// crie um algoritmo que imprima na tela o fatorial de 10

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fatorial = fatorial * index;
//     console.log(fatorial);
// }


// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'manchester';
let reverseWord = '';

for (let index = 0; index < word.length; index++) {
    reverseWord = reverseWord + word[word.length - 1 - index];

}
console.log(reverseWord);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}

for (let index = 0; index < array.length; index++) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);


// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
// para divisor menor que dividendo, divisor recebe + 1
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    // se o modulo de algum numero menor que o dividendo for zero, não é primo
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
