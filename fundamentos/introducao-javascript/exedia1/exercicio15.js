const valorCusto = 1;
const valorVenda = -13;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('Valor não pode ser negativo!')
} else {
    const valorCustoTotal = valorCusto + valorCusto*20/100;
    const lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro);
}
