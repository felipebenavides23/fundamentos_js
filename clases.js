class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido= apellido
        this.altura = altura
    }
    saludar(fn){
         console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
         if(fn){
             fn(this.nombre,this.apellido, false)
         }
    }
    soyalto(){
        if(this.altura >= 1.8){
            console.log(`${this.nombre} ${this.apellido} :esta persona es alta porque su estatura es de ${this.altura}`)
            console.log(`${this.nombre} ${this.apellido} :esta persona es alta porque su estatura es de ${this.altura}`)
        }else{
           console.log(`${this.nombre} ${this.apellido} :esta persona no es alta porque su estatura es de ${this.altura}`)       
        }
    }
    soyaltor(){
        return this.altura >= 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido,altura) {
        super(nombre,apellido,altura)       
    }
    saludar(fn){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)

    if(fn){
        fn(this.nombre,this.apellido, true)
    }
    }


}

function respondersaludo (nombre,apellido,esdev) {
        console.log(`buen dia ${nombre} ${apellido}`)
        if(esdev){
            console.log(`no sabia que eras desarrolador/a`)
        }
}
var ivet = new Persona( 'ivet', 'restrepo' , 1.85)
var mariana = new Desarrollador( 'mariana', 'garcia' , 1.65)
ivet.saludar(respondersaludo)
mariana.saludar(respondersaludo)

ivet.soyalto()
mariana.soyalto()

ivet