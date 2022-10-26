function verificaPalindromo(palavra) {
    for(index in palavra) {
        if (palavra[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }
    } 
    return true;
}
console.log(verificaPalindromo('radar'));

// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
    
//     return reverse
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false





// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.


function indexMaiorValor(numeros) {
    let indexMaior = 0;
    for (let index in numeros) {
        if (numeros[indexMaior] < numeros[index]) {
            indexMaior = index;
        }
    }
    return indexMaior ; 
}
   

console.log(indexMaiorValor([2, 3, 6, 7, 10, 1]))




// Crie uma função que receba um array de inteiros e retorne o índice do menor valor

function indexMenorValor(num) {
    let indexMenor = 0;
    for (let index in num)
    if (num[indexMenor] > num[index]) {
        indexMenor = index;
    }
    // console.log(num[index]);
    return indexMenor



}console.log(indexMenorValor([2, 4, 6, 7, -10, 0, -30]));


// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatoria(numeroN) {
    let soma = 0
    for (let index = numeroN; index > 0; index -= 1) {
        soma = soma + index;
        
    }
    return soma
}
console.log(somatoria(6));



// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaString(palavra, ending) {
    palavra = palavra.split('');
    ending = ending.split('');
    let controle = true;

    for (let index = 0; index < ending.length; index += 1) {
        if (palavra[palavra.length - ending.length + index] != ending[index]) {
            controle = false;
        }
    return controle;    
    }
}
console.log(verificaString('trybe', 'be'));
console.log(verificaString('joaofernando', 'fernan'));