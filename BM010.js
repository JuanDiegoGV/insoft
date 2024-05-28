// Crear una tabla con el mayor número de registros posible, que cumplan con las condiciones 
// siguientes:
// a. Cada registro debe contener identificación, nombre, empresa, teléfono y profesión.
// b. La tabla debe tener nombres y apellidos simulados a partir de nombres y apellidos base.
// c. Los nombres base son 10: Luis, Daniel, Pedro, Gustavo, Alberto, Gabriel, Oscar, Carlos, 
// Marino, Diego.
// d. Los apellidos son 10: Osorio, Serna, Menjura, Zapata, Idárraga, Lara, Jaramillo, Zamora, 
// Ocampo, Victoria.
// e. Con ellos debe construir el máximo número de nombres y apellidos que no se repitan. Es 
// decir, primer nombre + segundo nombre + primer apellido + segundo apellido no se pueden 
// repetir, por ejemplo: Luis Alberto Jaramillo Ocampo solo podrá estar en la tabla una vez.
// f. Los apellidos deben ser dos y los nombres pueden ser uno o máximo dos.
// g. Los campos empresa, teléfono y profesión deben ser generados aleatoriamente.
// h. Finalmente, deberá quedar una lista en memoria con todos los registros generados y 
// mostrar en pantalla los registros y el número total de registros generados donde se garantiza 
// que no hay ninguno repetido.

const nombres = ['Luis', 'Daniel', 'Pedro', 'Gustavo', 'Alberto', 'Gabriel', 'Oscar', 'Carlos', 'Marino', 'Diego']
const apellidos = ['Osorio', 'Serna', 'Menjura', 'Zapata', 'Idárraga', 'Lara', 'Jaramillo', 'Zamora', 'Ocampo', 'Victoria']

const registros = () => {

  let nombresConApellidos = []

  nombres.map(nombre1 => {
    apellidos.map(apellido1 => {
      nombres.map(nombre2 => {
        apellidos.map(apellido2 => {

          let nombreCompleto1 = nombre1 + nombre2
          let nombreCompleto2 = nombre2 + nombre1
          let nombreIgual1 = nombre1 + nombre1
          let nombreIgual2 = nombre2 + nombre2
          let apellidoCompleto1 = apellido1 + apellido2
          let apellidoCompleto2 = apellido2 + apellido1
          let apellidoIgual1 = apellido1 + apellido1
          let apellidoIgual2 = apellido2 + apellido2

          if (!nombresConApellidos.includes(nombre1 + apellidoCompleto1)) nombresConApellidos.push(nombre1 + apellidoCompleto1)
          if (!nombresConApellidos.includes(nombre1 + apellidoCompleto2)) nombresConApellidos.push(nombre1 + apellidoCompleto2)
          if (!nombresConApellidos.includes(nombre1 + apellidoIgual1)) nombresConApellidos.push(nombre1 + apellidoIgual1)
          if (!nombresConApellidos.includes(nombre1 + apellidoIgual2)) nombresConApellidos.push(nombre1 + apellidoIgual2)

          if (!nombresConApellidos.includes(nombre2 + apellidoCompleto1)) nombresConApellidos.push(nombre2 + apellidoCompleto1)
          if (!nombresConApellidos.includes(nombre2 + apellidoCompleto2)) nombresConApellidos.push(nombre2 + apellidoCompleto2)
          if (!nombresConApellidos.includes(nombre2 + apellidoIgual1)) nombresConApellidos.push(nombre2 + apellidoIgual1)
          if (!nombresConApellidos.includes(nombre2 + apellidoIgual2)) nombresConApellidos.push(nombre2 + apellidoIgual2)

          if (!nombresConApellidos.includes(nombreCompleto1 + apellidoCompleto1)) nombresConApellidos.push(nombreCompleto1 + apellidoCompleto1)
          if (!nombresConApellidos.includes(nombreCompleto1 + apellidoCompleto2)) nombresConApellidos.push(nombreCompleto1 + apellidoCompleto2)
          if (!nombresConApellidos.includes(nombreCompleto1 + apellidoIgual1)) nombresConApellidos.push(nombreCompleto1 + apellidoIgual1)
          if (!nombresConApellidos.includes(nombreCompleto1 + apellidoIgual2)) nombresConApellidos.push(nombreCompleto1 + apellidoIgual2)

          if (!nombresConApellidos.includes(nombreCompleto2 + apellidoCompleto1)) nombresConApellidos.push(nombreCompleto2 + apellidoCompleto1)
          if (!nombresConApellidos.includes(nombreCompleto2 + apellidoCompleto2)) nombresConApellidos.push(nombreCompleto2 + apellidoCompleto2)
          if (!nombresConApellidos.includes(nombreCompleto2 + apellidoIgual1)) nombresConApellidos.push(nombreCompleto2 + apellidoIgual1)
          if (!nombresConApellidos.includes(nombreCompleto2 + apellidoIgual2)) nombresConApellidos.push(nombreCompleto2 + apellidoIgual2)

          if (!nombresConApellidos.includes(nombreIgual1 + apellidoCompleto1)) nombresConApellidos.push(nombreIgual1 + apellidoCompleto1)
          if (!nombresConApellidos.includes(nombreIgual1 + apellidoCompleto2)) nombresConApellidos.push(nombreIgual1 + apellidoCompleto2)
          if (!nombresConApellidos.includes(nombreIgual1 + apellidoIgual1)) nombresConApellidos.push(nombreIgual1 + apellidoIgual1)
          if (!nombresConApellidos.includes(nombreIgual1 + apellidoIgual2)) nombresConApellidos.push(nombreIgual1 + apellidoIgual2)

          if (!nombresConApellidos.includes(nombreIgual2 + apellidoCompleto1)) nombresConApellidos.push(nombreIgual2 + apellidoCompleto1)
          if (!nombresConApellidos.includes(nombreIgual2 + apellidoCompleto2)) nombresConApellidos.push(nombreIgual2 + apellidoCompleto2)
          if (!nombresConApellidos.includes(nombreIgual2 + apellidoIgual1)) nombresConApellidos.push(nombreIgual2 + apellidoIgual1)
          if (!nombresConApellidos.includes(nombreIgual2 + apellidoIgual2)) nombresConApellidos.push(nombreIgual2 + apellidoIgual2)

        })
      })
    })
  })


  return nombresConApellidos

}

const nombresParaTabla = registros()

console.log('total de registros: ', nombresParaTabla.length)
nombresParaTabla.map((nombre, index) => {
  console.log('nombre: ' + nombre, 'empresa: ' + index, 'teléfono: +578888' + index, 'profesión: ' + 'ingeniero' + index);
})