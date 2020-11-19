var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha,alan,martin,dario,vicky,paula]

for(var i = 0 ;i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

// ------filtrar array 
const esalta = persona => persona.altura > 1.8

var personasaltas = personas.filter(esalta)

console.log(personasaltas)

const esbajo = ({altura}) => altura < 1.8

var personasbajas = personas.filter(esbajo)

console.log(personasbajas)

// ----------modificar array 

const cambia_al = persona =>{
return {
    ...persona,
    altura: persona.altura * 100
}}

var campiodeestatura= personas.map(cambia_al)

console.log(campiodeestatura)

// ------- conteo de objetos del array 
 
var acom = 0;

for (var i = 0 ; i < personas.length; i++){
    acom = acom + personas[i].altura

}

console.log(acom)

const reducer = (acum, persona) => {
    return acum + persona.altura
}

var totaldealtura = personas.reduce(reducer ,0)

console.log (totaldealtura +'jjjjjjjjjjjjjj')