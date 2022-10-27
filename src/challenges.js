// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) { 
    return true;
  } else { 
    return false;}
}
// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}
// Desafio 3
function splitSentence(arrayDestring) {
  return arrayDestring.split(' ');
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
function highestCount(arrayNumbers) {
  let maiorNumero = 0;
  let quantidade = 0;

  for (let i = 0; i < arrayNumbers.length; i +=1){
    if (arrayNumbers[i] > maiorNumero) {
      maiorNumero = arrayNumbers[i];
      quantidade = 1;
    } else if (arrayNumbers[i] === maiorNumero) {
      quantidade ++;
    }
  }
  return quantidade;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 > distancia2){
    return 'cat2';
  } else if (distancia2 > distancia1){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(numeros) {
  let arrayString = [];
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
        arrayString.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
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
