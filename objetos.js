var luis = {
    nombre : "luis",
    apellido : "castillo",
    edad : 20
}

var mariana = {
    nombre : "mariana",
    apellido : "restrepo",
    edad : 20

}

 function imprimirobjeto({nombre}){
    nombre = nombre.toUpperCase()
    console.log(nombre)
 }

 imprimirobjeto(luis)
 imprimirobjeto(mariana)

//  -----resto
var cesar = {
    nombre : "cesar",
    apellido : "castillo",
    edad : 23
}

var maria = {
    nombre : "maria",
    apellido: "benavides",
    edad : 47
}

function reto1 ({nombre , edad}){
    console.log("hola soy "+ nombre +" y tengo " + edad)
}

reto1(cesar)
reto1(maria)

function masedad(persona){
    return {
        ...persona,
        edad : persona.edad + 1
    }
}

var aniosmas = masedad(luis)

console.log ( aniosmas)