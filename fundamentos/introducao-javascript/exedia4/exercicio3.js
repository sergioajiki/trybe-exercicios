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


function numMaior(num1, num2, num3) {
    // if (num1 === num2 && num1 === num3) {
    //     return 'os três números são iguais';
    if (num1 >= num2 && num1 > num3) {
        return num1 + ' é o número maior';
    } else if (num2 > num1 && num2 > num3) {
        return num2 + ' é o número maior';
    } else {
        return num3 + ' é o número maior';
    }
}

console.log(numMaior(30, 0, 0));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function numero(a) {
    if (a === 0) {
        return 'zero';
    } else if (a > 0) {
        return 'positive' 
    } else {
        return 'negative'
    }
}
console.log(numero(5));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

function verificaAnguloTriangulo(ang1, ang2, ang3) {
    let somaAngulo = 0
    somaAngulo = ang1 + ang2 + ang3
    if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
        return 'Ângulo inválido';
    } else if          
        (somaAngulo === 180) {
        return true; 
    } else {
        return false;
    }
}

console.log(verificaAnguloTriangulo(150, -20 ,10))