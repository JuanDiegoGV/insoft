// Dado un password, usted debe inventar un algoritmo sencillo, pero efectivo para encriptar el 
// password y otro para desencriptarlo.
// No puede utilizar rutinas hechas por terceros para encriptar.
// El password solo puede contener letras, números y los símbolos de punto y underscore ‘_’ .
// Debe entregar una rutina de encriptación y otra de desencriptación, debidamente documentadas.

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

// SECRETO PARA ENCRIPTAR Y DESENCRIPTAR CONTRASEÑAS, NO PUEDE CONTENER NUMEROS
const secret = 'insoft'

// FUNCION PARA ENCRIPTAR CONTRASEÑAS
const encrypt = (password) => {

  // RECORREMOS EL SECRETO Y LE AÑADIMOS UN NUMERO RANDOM A CADA LETRA, EL NUMERO SIEMPRE EMPIEZA POR 0.
  const first = secret.split('').map(letter => letter + Math.random())

  // RECORREMOS LA CONTRASEÑA Y LE AÑADIMOS UN NUMERO RANDOM A CADA LETRA, EL NUMERO SIEMPRE EMPIEZA POR 0.
  const second = password.split('').map(letter => letter + Math.random())

  // JUNTAMOS LAS DOS PARTES SEPARADAS POR EL SIGNO /
  let encrypted = first.reduce((prev, curr) => prev + curr) + '/' + second.reduce((prev, curr) => prev + curr)

  return encrypted

}

// FUNCION PARA DESENCRIPTAR CONTRASEÑAS
const decrypt = (password) => {

  // SEPARAMOS LA PRIMERA PARTE POR EL SIGNO / Y LUEGO SEPARAMOS LA CADENA EN CADA 0.
  let first = password.split('/')[0].split('0.')

  // SEPARAMOS LA SEGUNDA PARTE POR EL SIGNO / Y LUEGO SEPARAMOS LA CADENA EN CADA 0.
  let second = password.split('/')[1].split('0.')

  // JUNTAMOS CADA ITEM QUE RESULTA DE SEPARAR LA PRIMERA PARTE POR 0.
  let secretToCompare = first.reduce((prev, curr) => prev + curr.substring(curr.length - 1))

  // JUNTAMOS CADA ITEM QUE RESULTA DE SEPARAR LA SEGUNDA PARTE POR 0.
  let decrypted = second.reduce((prev, curr) => prev + curr.substring(curr.length - 1))

  // LE QUITAMOS EL ULTIMO CARACTER, YA QUE SIEMPRE ES UN NUMERO ALEATORIO
  secretToCompare = secretToCompare.substring(0, secretToCompare.length - 1)

  // LE QUITAMOS EL ULTIMO CARACTER, YA QUE SIEMPRE ES UN NUMERO ALEATORIO
  decrypted = decrypted.substring(0, decrypted.length - 1)

  // COMPARAMOS EL SECRETO OBTENIDO CON EL SECRETO DE ENCRIPTACION, SI NO COINCIDE ENTONCES LA CONTRASEÑA ESTA MODIFICADA
  if (secretToCompare === secret) return decrypted
  else return 'password modified'

}

rl.question('Ingrese 1 para encriptar o 2 para desencriptar una contraseña: ', (option) => {

  if (option == 1) {
    rl.question('Ingrese una contraseña (solo puede contener letras, números y los símbolos de punto y underscore): ', (password) => {
      const passEncrypt = encrypt(password)

      console.log('su contraseña encriptada es:', passEncrypt);

      rl.close()
    })
  } else {
    rl.question('Ingrese una contraseña encriptada (asegurese de que no tenga saltos de linea y este bien escrita): ', (password) => {
      const passEncrypt = decrypt(password)

      console.log('su contraseña desencriptada es:', passEncrypt);

      rl.close()
    })
  }
})