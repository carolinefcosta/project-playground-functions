// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) { 
    return true;
  } else { 
    return false;}
}
// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  let espaco = ', ';
  let junto = array[array.length - 1].concat(espaco, array[0]);
  return junto;
}
// Desafio 5
function footballPoints(wins, ties) {
    let resultado = 0;
    resultado = (wins * 3) + ties;
    return resultado;
}
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
