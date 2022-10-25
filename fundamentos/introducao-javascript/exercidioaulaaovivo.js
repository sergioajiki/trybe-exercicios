// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let soma = 0;

for (let index = 1; index  <= 50; index += 1) {
    soma += index;

}
console.log(soma);

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (let i = 2; i <= 150; i += 1) {
    if (i % 3 === 0) {
    contador++ ;
        }
    } 
    if (contador === 50) {
        console.log(`parabéns o contador é ${contador}` );
    }   


// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

const carolzita = 10
const murilo = 2
const baeta = 30

if (carolzita < murilo && carolzita < baeta) {
    console.log('Carolzita é a mais nova');
} else if   (murilo < carolzita && murilo < baeta) {
    console.log('Murilo é o mais novo');
} else {
    // (baeta < carolzita && baeta < murilo)
    console.log('Baêta á a mais nova');
}



// Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Player 1 won” ou “A Ties” ou “Player 2 won”.


const player1 = 'papel';
const player2 = 'pedra';

if (player1 === 'pedra'){
    if(player2 === 'pedra'){
        console.log('A Ties');
    }else if(player2 === 'papel'){
        console.log('Player 2 won!');
    }else if(player2 === 'tesoura'){
        console.log('Player 1 won!');
    }
}
if (player1 === 'papel'){
    if(player2 === 'pedra'){
        console.log('Player 1 won!');
    }else if(player2 === 'papel'){
        console.log('A ties');
    }else if(player2 === 'tesoura'){
        console.log('Player 2 won!');
    }
}
if (player1 === 'tesoura'){
    if(player2 === 'pedra'){
        console.log('Player 2 won!');
    }else if(player2 === 'papel'){
        console.log('Player 1 won!');
    }else if(player2 === 'tesoura'){
        console.log('A ties');
    }
}





// Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// Bônus: Crie a condição utilizando operador ternário.

idade = 2

idade >= 18
    ? console.log('A pessoa é maior de idade')
    : console.log('A pessoa é menor de idade');

