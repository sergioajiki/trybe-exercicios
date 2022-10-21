const pecaXadrez = 'Peão'

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
    console.log('Rei - Movimenta uma casa em qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo - Movimenta na diagonal.');
    break;
  case 'rainha':
    console.log('Dama - Movimenta na diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo - Movimenta em "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre - Movimenta na horizontal e vertical.');
    break;
  case 'peão':
    console.log('Peão - Movimenta uma casa para frente, no primeiro lance podem ser duas casas.');
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}