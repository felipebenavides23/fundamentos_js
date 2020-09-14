const API_URL = "https://swapi.dev/api/"
const PERSO_URL = "people/:id"
const OPTS ={crossDomain:true}


function escogerpersonaje (id , callback){
    const URL =`${API_URL}${PERSO_URL.replace(':id',id)}`

    $
    .get(URL,OPTS, callback)
    .fail (() => {
        console.log(`sucedio un error con la canexion del servidor no se pudo optener el personaje con el id ${id}`)
    }) 

    

}

escogerpersonaje(1 ,function(persona){
    console.log(` hola soy: ${persona.name}`)
    escogerpersonaje(2 ,function(persona){
        console.log(` hola soy: ${persona.name}`)
        escogerpersonaje(3 ,function(persona){
            console.log(` hola soy: ${persona.name}`)
            escogerpersonaje(4 ,function(persona){
                console.log(` hola soy: ${persona.name}`)
                escogerpersonaje(5, function(persona){
                    console.log(` hola soy: ${persona.name}`)
                })              
            })
        })
    })
})




