// Desafio 1
function compareTrue(animal1, animal2) {

    if (animal1 === 'cachorro' && animal2 === 'leão'){
        console.log('Eles são mamíferos!');
    } else {
        console.log('Huumm.. não são mamíferos');
    }
}
console.log(compareTrue('cachorro', 'leão'));

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;

  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(splits) {
    let frase = 'vamo que vamo';
    let arrayDeFrase = frase.split(" ");
  
    return arrayDeFrase;
  };
  console.log(splitSentence());

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
