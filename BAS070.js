// Crear un programa donde se pregunten por los lados de un triángulo rectángulo y se calcule la hipotenusa.
// Hipotenusa al cuadrado es igual a la suma del cuadrado de sus catetos.

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

rl.question('Cual es el lado 1?, (Debe ser un numero entero)', (lado1) => {
  rl.question('Cual es el lado 2?, (Debe ser un numero entero)', (lado2) => {

    lado1 = lado1 * lado1
    lado2 = lado2 * lado2

    let aux = lado1 + lado2

    const hipotenusa = Math.sqrt(aux)

    console.log('la hipotenusa de su triangulo es:', hipotenusa)

    rl.close()
  })
})