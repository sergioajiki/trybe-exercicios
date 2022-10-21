const angA = 10;
const angB = 220;
const angC = 15;

if (angA < 0 || angB < 0|| angC < 0) {
    console.log('Angulo inválido')
}   else if (angA + angB + angC === 180) {
    console.log(true);
}   else if (angA + angB + angC !== 180) {
    console.log(false);
}