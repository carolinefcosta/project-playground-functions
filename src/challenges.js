// Desafio 1
function compareTrue(idade, cnh) {
  if (idade >= 18 && cnh === 'sim'){
    console.log((true) + ', você pode dirigir!');
  } else {
    console.log((false) + ', você não pode dirigir');
  }
}
console.log(compareTrue(22, 'sim'));

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
