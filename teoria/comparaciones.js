var X = 4, y = "4"

// ---c ompracion de contenido 

// x == y;
// true
// x===y
// false

// ------condicionales 

var felipe = {
    nombre : "felipe",
    apellido : "castillo",
    edad : 12 ,
    programador : true

}


var mariana = {
    nombre : "mariana",
    apellido : "restrepo",
    edad : 20 ,
    programador : true

}

const mayoria_de_edad = 18

var calculodeedad = function (persona){
    return persona.edad >= mayoria_de_edad
}

function imprimir(persona) {
    console.log(`${persona.nombre} `)

    if(calculodeedad(persona)){
        console.log(`${persona.nombre} es mayoer de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimir(felipe)

imprimir(mariana)

// -------- la misma funcion pero con arrow function
const mayoria_de_edad2 = 18
// ---- ejemplo de arrow function
const calculodeedad2 = (persona) => persona.edad >= mayoria_de_edad2


function imprimir2(persona) {
    console.log(`${persona.nombre} `)

    if(calculodeedad2(persona)){
        console.log(`${persona.nombre} es mayoer de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimir2(felipe)

imprimir2(mariana)