/**
 * Coleção chaveada
 * Sets
 * Dados o array {30, 30, 40 ,5, 223, 5, 2049,3034, 5] retorne outro array apenas com valores únicos.
 */

const meuArray = [30, 30, 40, 5, 223, 5, 2049, 3034, 5]
function valoresUnicos(arr) {
  const mySet = new Set(arr)

  // para solução foi utilizado argumento rest
  // return mySet  Set(6) { 30, 40, 5, 223, 2049, 3034 }
  return [...mySet]
}

console.log(valoresUnicos(meuArray))
// [ 30, 40, 5, 223, 2049, 3034 ]
