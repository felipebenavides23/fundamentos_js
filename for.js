var felipe ={
    nombre : "felipe",
    apellido : "castillo",
    edad : 20,
    peso : 75
}

const peso_variable = 0.2
const dias_del_ano = 365
var subirpeso = persona => persona.peso += peso_variable
var bajapeso = persona => persona.peso -= peso_variable

console.log(`al inicio del año ${felipe.nombre} pesa ${felipe.peso}kg`)

    for(var i = 1 ; i <= dias_del_ano ; i++) {
            var rambom = Math.random()
        if ( rambom < 0.25){
           subirpeso(felipe)
        }
        else if ( rambom < 0.5){
            bajapeso(felipe)
        }
        else{
            // no paso nada 
        }
    }


console.log(`alfinal del año ${felipe.nombre} pesa ${felipe.peso.toFixed(1)}`)

console.log(`variable principal ${felipe.peso}`)