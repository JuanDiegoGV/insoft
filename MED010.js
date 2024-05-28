// Debe hacer una función a la que se le entregue un texto no mayor a novecientos noventa y nueve y 
// lo convierta en un número entero.
// Tenga en cuenta que, por ejemplo: 17 se escribe comoo DIECISIETE, no diez y siete
// La función en notación pascal:
// function convertirLetrasANumeros(TextoEnLetras:String):Integer
// Ejemplo:
// convertirLetrasANumeros(‘Trecientos veinidos’) // retorna 322
// convertirLetrasANumeros(‘novecientos cuarenta y cinco’) // retorna 945
// convertirLetrasANumeros(‘doce’) // Retorna 12
const numeros = {
  'y': ' ',
  'uno': 1,
  'dos': 2,
  'tres': 3,
  'cuatro': 4,
  'cinco': 5,
  'seis': 6,
  'siete': 7,
  'ocho': 8,
  'nueve': 9,
  'diez': 10,
  'once': 11,
  'doce': 12,
  'trece': 13,
  'catorce': 14,
  'quince': 15,
  'dieciseis': 16,
  'diecisiete': 17,
  'dieciocho': 18,
  'diecinueve': 19,
  'veinte': 20,
  'veintiuno': 21,
  'veintidos': 22,
  'veintitres': 23,
  'veinticuatro': 24,
  'veinticinco': 25,
  'veintiseis': 26,
  'veintisiete': 27,
  'veintiocho': 28,
  'veintinueve': 29,
  'treinta': 30,
  'cuarenta': 40,
  'cincuenta': 50,
  'sesenta': 60,
  'setenta': 70,
  'ochenta': 80,
  'noventa': 90,
  'cien': 100,
  'doscientos': 200,
  'trescientos': 300,
  'cuatrocientos': 400,
  'quinientos': 500,
  'seiscientos': 600,
  'setecientos': 700,
  'ochocientos': 800,
  'novecientos': 900,
}

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

rl.question('Ingrese un numero en palabras (todo en minuscula): ', (numeroEnPalabras) => {
  const partes = numeroEnPalabras.split(' ')
  const partesEnNumeros = partes.map(parte => numeros[parte])

  let numeroEnNumeros = 0

  partesEnNumeros.map(pen => {
    if (typeof pen == 'number') numeroEnNumeros += pen
  })

  console.log(numeroEnNumeros)
  rl.close()
})