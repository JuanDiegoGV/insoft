// Se debe hacer un programa para que lea una serie de datos y calcule el número de datos, la suma, el 
// promedio y la desviación estándar.
// Utilice el método que quiera para leer la serie.
// El promedio se calcula como la suma dividida por el número de datos.
// La desviación estándar se calcula como:
// Std = RaizCuadrada(sumatoria(x(i) - Xm) ** 2 / (n - 1))
// Donde X(i) son cada uno de los datos.
// Xm es el promedio.
// N es el número de datos de la serie.
// Imprima los resultados.

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

rl.question('Ingrese una lista de numeros enteros separados por el signo : (es decir 1:34:65:8) ', (serie) => {
  serie = serie.split(':')
  const total = serie.length
  const suma = serie.reduce((prev, curr) => parseInt(prev) + parseInt(curr))
  const promedio = suma / total
  const desviacionEstandar = Math.sqrt((suma - promedio) ** 2 / (total - 1))
  console.log('La desviacion estandar es:', desviacionEstandar)

  rl.close()
})