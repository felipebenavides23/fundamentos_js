console.log("hola mundo");
var nombre = "felipe" , apellido = "CASTILLO" ;

console.log("hola " + nombre +" " + apellido);

// variables string

var nombreenmayusculas= nombre.toUpperCase()
var apellidoenminusculas = apellido.toLowerCase()

console.log(" nombre:"+ nombreenmayusculas +"_____ apellido: " + apellidoenminusculas)

var primeraletradelvariable = nombre.charAt(0)

console.log(" primera letra de la variable nombre : " + primeraletradelvariable)

var cantidaddeletrasdeunavariable = nombre.length;

console.log("la cantidad de letras de la vriable nombre es :" + cantidaddeletrasdeunavariable)

var concatenarvariable =`${nombre} ${apellido}`

console.log("variables concatenadas con comillas invertidas:"+ concatenarvariable)

var sudstring = nombre.substr(1 ,3)

console.log( "la seleccion de sub strings de una variable  " + sudstring)


// variable numeros

var edad =20;

//edad = edad + 1 ;
edad += 1
console.log(edad)

var peso = 73
 // peso = peso - 3

 peso-= 3
console.log(peso)

var comida = 1;

peso = peso + comida
console.log(peso)

var ejercicio = 3

peso -=  ejercicio;

console.log(peso)


var vino = 200.3

var totalmal= vino * 3;

console.log(totalmal);

 var total = Math.round(vino * 100 * 3 ) / 100

 console.log(total);

 vinostr = total.toFixed(4)

 console.log("agrega 4 caracteres despues del numero entero "+vinostr);

var totalnum = parseFloat(vinostr)

console.log(totalnum)

// funciones

var nombre = "luis", edad = 20;

function imprimiredad(n,e){
    console.log(`${n} tiene ${e} años`)
}

imprimiredad(nombre , edad);


// ---------

var nombre = "luis"

function imprimirenmayus(n){
    n = n.toUpperCase()
    console.log(n)
}

imprimirenmayus(nombre)

console.log(" variable original y sin afectar "+ nombre)

// ---- objetos

function calculofecha(){
    
        for(var i =0;i<25;i++){
            let d = new Date(2019,11)  
            var a = 7 * i
            
    d.setDate(d.getDate() + a)         
    console.log (d.toISOString().substr(0,10))
}
}

calculofecha()