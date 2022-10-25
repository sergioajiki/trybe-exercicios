// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

function modulo(a, b) {
    return a % b
}

console.log(modulo(10, 3))

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNum(num1, num2) {
    if (num1 === num2) {
        return num1 + ' é igual a ' + num2;
    }   else if (num1 > num2) {
        return num1 + ' é maior que ' + num2;
    }   else {
        return num1 + ' é menor que ' + num2;
    }
}
console.log(maiorNum(1, 1))

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.













