const API_URL = "https://swapi.dev/api/"
const PERSO_URL = "people/:id"
const OPTS ={crossDomain:true}


function escogerpersonaje (id){

    return new Promise(function(resolve,reject){
        const URL =`${API_URL}${PERSO_URL.replace(':id',id)}`
        $
        .get(URL,OPTS,function(data){
            resolve(data)
        })
        .fail(() => reject(id)) 
    })
}

function onerror (id) {
    console.log(`ocurrio un problema al llamar el personaje  ${id}`)
}

escogerpersonaje(1)
    .then(function(personaje){
        console.log(`el personaje 1  es ${personaje.name}`)
        return escogerpersonaje(2)
    })
    .then(function(personaje){
        console.log(`el personaje 2  es ${personaje.name}`)
        return escogerpersonaje(3)
    }).then(function(personaje){
        console.log(`el personaje 3 es ${personaje.name}`)
        return escogerpersonaje(4)
    }).then(function(personaje){
        console.log(`el personaje 4 es ${personaje.name}`)
        return escogerpersonaje(5)
    }).then(function(personaje){
        console.log(`el personaje 5 es ${personaje.name}`)
        return escogerpersonaje(6)
    })
    .then(function(personaje){
        console.log(`el personaje 6 es ${personaje.name}`)
     
    })
    .catch(onerror)







