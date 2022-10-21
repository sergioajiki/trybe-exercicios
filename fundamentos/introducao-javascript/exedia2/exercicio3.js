let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalSoma = 0;
let mediaNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
    totalSoma += numbers[index];
    mediaNumbers = totalSoma / numbers.length;
  
}
// console.log(totalSoma)
// console.log(numbers.length)
// console.log('A média do Array é ' + mediaNumbers)
if (mediaNumbers > 20) {
    console.log('valor maior que 20');
}   else {
    console.log('valor menor ou igual a 20');
}

