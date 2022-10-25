// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
// console.log(
//     `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log(
    'A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.'
)

console.log(
    'A jogadora possui ' + player.medals.golden + 'de ouro e ' + player.medals.silver + ' medalhas de prata.'
)