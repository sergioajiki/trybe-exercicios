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