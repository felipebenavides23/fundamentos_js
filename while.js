var felipe = {
    nombre : "felipe",
    apellido : "castillo",
    edad : 20,
    peso : 75
}

const peso_variable2 = 0.3

var subirpeso = persona => persona.peso += peso_variable2
var bajapeso = persona => persona.peso -= peso_variable2
const come = () => Math.random() < 0.3
const ejercicio2 = () => Math.random() < 0.4

const meta = felipe.peso - 3

console.log(`al inicio del año ${felipe.nombre} pesa ${felipe.peso}kg`)
var dias = 0
while(felipe.peso> meta){

    if(come()){
        subirpeso(felipe)
    }
    if(ejercicio2()){
        bajapeso(felipe)
    }
    dias += 1
}

console.log(`los dias que pasaron para que  ${felipe.nombre} consiga su  de ${felipe.peso.toFixed(1)} fueron ${dias}`)

console.log(`variable principal ${felipe.peso}`)


var contador = 0

const llueve = () => Math.random() < 0.1

do{
    contador++
}while(!llueve())



if(contador < 2){
    console.log(`fui a ver si llovia ${contador} vez`)
} else{
    console.log(`fui a ver si llovia ${contador} veces`)
}