// Desafio 11
function generatePhoneNumber(arrayTel) {
  let numeroTel = '(';
  if (arrayTel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayTel.length; index += 1) {
    if (arrayTel[index] > 9 || arrayTel[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 1){
      numeroTel = numeroTel + arrayTel[index] + ') ';
    } else if (index === 6){
      numeroTel = numeroTel + arrayTel[index] + '-'; 
    } else {
      numeroTel = numeroTel + arrayTel[index];
    }
  }
  return numeroTel;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let cond1 = Math.abs(lineA < lineB + lineC);
  let cond2 = Math.abs(lineB < lineA + lineC);
  let cond3 = Math.abs(lineC < lineA + lineB);
  if (cond1 === true && cond2 === true && cond3 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
