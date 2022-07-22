console.log('Funciones')

console.warn('Escribiendo una función tradicional')

function saludar() {
    console.log('Hola Mundo')
}
saludar()
saludar()


console.warn('Escribiendo una función tradicional en un const')

const saludar1 = function () {
    console.log('Hola Mundo desde otra función')
    }
saludar1()

console.warn('Escribiendo una función flecha')

const saludar2 = () => {
    console.log('Saludando desde lamda')
}
saludar2()
 
console.warn('Escribiendo una función flecha con parametro')

const saludar3 = (nombre) => {
    console.log(`Hola ${nombre}`)
}
saludar3('Anaconda')


console.warn('Escribiendo una función flecha con retorno')

const saludar4 = (nombre) => {
    return  `Hola ${nombre}`
}

let saludo = saludar4('anastacia')

console.log(saludo)




console.warn('Función con Math.random')

const rand = () => Math.random()

console.log(rand())


