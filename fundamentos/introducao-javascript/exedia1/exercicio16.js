const salarioBruto = 1500;
let descontoInss = 0;
let salarioBase = 0;
let descontoIr = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1554.94) {
    descontoInss = salarioBruto * 8/100; 
    salarioBase = salarioBruto - descontoInss
}   else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 9/100;
    salarioBase = salarioBruto - descontoInss
}   else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 11/100;
    salarioBase = salarioBruto - descontoInss
}   else if (salarioBruto > 5189.82) {
    descontoInss = 570.88;
    salarioBase = salarioBruto - descontoInss
}
if (salarioBase <= 1903.98) {
    descontoIr = 0;
    salarioLiquido = salarioBase - descontoIr;
}   else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    descontoIr = salarioBase * 0.075- 142.80;
    salarioLiquido = salarioBase - descontoIr;
}   else if (salarioBase >= 2856.66 && salarioBase <= 3751.05) {
    descontoIr = salarioBase * 0.15 - 354.8;
    salarioLiquido = salarioBase - descontoIr;
}   else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    descontoIr = salarioBase * 0.225 - 636.13;
    salarioLiquido = salarioBase - descontoIr;
}   else if (salarioBase >= 4664,68) {
    descontoIr = salarioBase * 0.275 - 869.36
    salarioLiquido = salarioBase - descontoIr;
}

    console.log(salarioLiquido)