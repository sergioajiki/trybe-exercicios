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
   

console.log(indexMaiorValor([2, 3, 6, 7, 10, 1, 20]))

