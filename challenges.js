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
  let maiorNumero = arrayNumbers[0];
  for (let i = 0; i < arrayNumbers.length; i +=1){
    if (arrayNumbers[i] > maiorNumero) {
      maiorNumero = arrayNumbers[i];
    }
  } 
  let quantidadeRep = 0;
  for (index = 0; index < arrayNumbers.length; index += 1){
    if (maiorNumero === arrayNumbers[index]){
      quantidadeRep += 1;
    }
  }
  return quantidadeRep;
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
function encode(frase) {
  let arrayFrase = frase.split("");
  for (let i = 0; i < arrayFrase.length; i++){
    if (arrayFrase[i] === 'a'){
      arrayFrase[i] = '1';
    }
    if (arrayFrase[i] === 'e'){
      arrayFrase[i] = '2';
    }
    if (arrayFrase[i] === 'i'){
      arrayFrase[i] = '3';
    }
    if (arrayFrase[i] === 'o'){
      arrayFrase[i] = '4';
    }
    if (arrayFrase[i] === 'u'){
      arrayFrase[i] = '5';
    }
  }
  return arrayFrase.join("");
}
function decode(frase) {
  let arrayFrase = frase.split("");
  for (let i = 0; i < arrayFrase.length; i++){
    if (arrayFrase[i] === '1'){
      arrayFrase[i] = 'a';
    }
    if (arrayFrase[i] === '2'){
      arrayFrase[i] = 'e';
    }
    if (arrayFrase[i] === '3'){
      arrayFrase[i] = 'i';
    }
    if (arrayFrase[i] === '4'){
      arrayFrase[i] = 'o';
    }
    if (arrayFrase[i] === '5'){
      arrayFrase[i] = 'u';
    }
  }
  return arrayFrase.join("");
}
// Desafio 10
function techList(tecnologias, pessoa) {
  let objetos = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let tecnologia = tecnologias.sort();
  for (let index = 0; index < tecnologias.length; index += 1) {
    objetos.push({
      tech: tecnologia[index],
      name: pessoa,
    });
  }
  return objetos;
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
