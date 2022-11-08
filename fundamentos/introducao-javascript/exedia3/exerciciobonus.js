let n = 5
let symbol = '#'
let inputLine = '';

// for (let index = 0; index < n; index += 1) {
//     inputLine = inputLine + symbol;
// }
// for (let index = 0; index < n; index += 1) {
//     console.log(inputLine);
// }

// console.log(" ")
// let inputLine2 = '';

// for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
//     console.log(inputLine2);
//     inputLine2 = inputLine2 + symbol;
// };
console.log(" ")

let inputPosition = n - 1;

for (let lineIndex2 = 0; lineIndex2 < n; lineIndex2 += 1) {
    for (let colunaIndex = 0; colunaIndex < n; colunaIndex += 1) {
        if (colunaIndex < inputPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}