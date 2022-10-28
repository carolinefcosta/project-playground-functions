// Desafio 11
function generatePhoneNumber(arrayTel) {
  let numeroTel = '(84) 99614-5856';
  if (arrayTel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayTel.length; index += 1) {
    if (arrayTel[index] > 9 || arrayTel[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    numeroTel = numeroTel.replace('1', arrayTel[index]);
  }
  return numeroTel;
}
// Desafio 12
function triangleCheck() {
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
