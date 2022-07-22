console.log('Objetos Literales')

console.warn('Creando un objeto literal')

const personaje = {
nombre: 'Tony Stark',
codeName: 'Ironman',
estaVivo: 'False',
edad: 40,
coords: {
    lat: 34.034,
    ing: -118.7,
},
trajes: ['mark I', 'Mark V', 'Hulkbuster'],
direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu California',
},
'ultima-pelicula': 'End Game'
}

console.warn('Accediendo al objeto y sus propiedades')

console.log(personaje)
console.log(`nombre: ${personaje.nombre}`)
console.log(`apodo: ${personaje['codeName']}`)
console.log(`edad: ${personaje.edad}`)
console.log(`latitud: ${personaje.coords.lat}`)


let x = 'estaVivo'
console.log(`está vivo: ${personaje[x]}`)
console.log(`ultima pelicula: ${personaje['ultima-pelicula']}`)

console.warn('Borrando uan propiedad del objeto')
 
delete personaje.edad
console.log({ personaje })

console.warn('Creando una nueva propiedad del objeto')
personaje.casado = false

console.log( personaje )

console.log(`Cantidad de trajes: ${(personaje.trajes.length)}`)
console.log(`Cantidad de trajes: ${(personaje.trajes[2])}`)



