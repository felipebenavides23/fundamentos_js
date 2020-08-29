function heredade(prototipohijo, prototipopadre){
    var fn = function(){}
    fn.prototype = prototipopadre.prototype
    prototipohijo.prototype = new fn
    prototipohijo.prototype.constructor = prototipohijo
}

function persona(nombre, apellido,altura){
 this.nombre = nombre
 this.apellido= apellido
 this.altura = altura

}

 persona.prototype.saludar = function(){
     console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
 }

 persona.prototype.soyalto = function() {
     if(this.altura >= 1.8){
         console.log(`${this.nombre} ${this.apellido} :esta persona es alta porque su estatura es de ${this.altura}`)
     }else{
        console.log(`${this.nombre} ${this.apellido} :esta persona no es alta porque su estatura es de ${this.altura}`)       
     }
 }

 persona.prototype.soyaltor = function() {
     return this.altura >= 1.8
 }

 function desarrolaldor (nombre, apellido) {
     this.nombre = nombre
     this.apellido =apellido
 }

 heredade(desarrolaldor,persona)

 desarrolaldor.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}



var ivet = new persona( 'ivet', 'restrepo' , 1.85)
var mariana = new persona( 'mariana', 'garcia' , 1.65)
ivet.saludar()
mariana.saludar()

ivet.soyalto()
mariana.soyalto()
persona()