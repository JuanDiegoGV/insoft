// Se tiene una carpeta con un conjunto de archivos de código de programación, escritos en
// python(.py), javascript(.js), pascal(.pas).
// La empresa quiere saber cuántas líneas hay en cada programa, cuántas de código, cuántas de 
// comentarios y cuántas líneas en blanco.
// Si una misma línea tiene código y luego comentario, se cuenta como solo código.
// Debe desarrollar una función a la que se le pase como parámetro la ruta una carpeta.La función 
// internamente debe leer cada uno de los archivos y les debe contar las líneas de comentarios, las 
// líneas de código y las líneas en blanco.
// Para el ejercicio no tiene que considerar comentarios en bloque, únicamente comentarios de línea
// única
// De esta manera, en python los comentarios inician con'#', es javascript con '//' y en pascal con '//'
// A este nivel, no tiene que leer los subdirectorios, solo los archivos que estén en la ruta dada.
// Trate de estructurar su programa en funciones que lo hagan de fácil lectura y entendimiento.
// Regularmente los archivos de código son texto plano, pero recomendamos usar un encoding = 'utf-8' 
// por si se encuentran caracteres especiales en la lectura del archivo:
// with open(archivoConPath, 'r', encoding = 'utf-8', errors = 'ignore') as f:
// Debe imprimir al final los totales solicitados por cada extensión.Mejor si presenta también el detalle 
// de líneas por cada archivo.
// No se espera el uso de estructuras try except.Sin embargo, se pueden usar si se desea.
// Este es un programa sencillo.No tiene trucos.Solo es hacerlo.

const { readdirSync } = require('node:fs')
const { open } = require('node:fs/promises')

// RUTA EXACTA DEL DIRECTORIO
const ruta = 'C:/Users/jdieg/Desktop/Guni/code/insoft'

const archivosDelDirectorio = readdirSync(ruta)

const archivos = {}

const leerArchivo = async (rutaCompleta, extension) => {
  const file = await open(rutaCompleta)

  const comentario = extension == 'js' || 'pas' ? '//' : '#'

  let totalLineas = 0
  let totalComentarios = 0
  let totalEnBlanco = 0
  let totalCodigo = 0

  for await (const line of file.readLines()) {
    totalLineas++
    if (line.substring(0, 2) == comentario) totalComentarios++
    else if (line == '') totalEnBlanco++
    else totalCodigo++
  }

  return { totalLineas, totalComentarios, totalEnBlanco, totalCodigo }
}

const MostrarArchivos = async () => {
  for (const archivo of archivosDelDirectorio) {
    const nombre = archivo.split('.')[0]
    const extension = archivo.split('.')[1]
    const rutaCompleta = `${ruta}/${archivo}`

    const detalles = await leerArchivo(rutaCompleta, extension)

    archivos[nombre] = {
      extension,
      totalLineas: detalles.totalLineas,
      totalComentarios: detalles.totalComentarios,
      totalEnBlanco: detalles.totalEnBlanco,
      totalCodigo: detalles.totalCodigo,
      rutaCompleta
    }

  }
  console.log(archivos)
}


MostrarArchivos()