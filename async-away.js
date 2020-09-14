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

async function obtenerpersonajes() {
var ids= [1,2,3,4,5,6,7]
 
var promesas = ids.map(id=> escogerpersonaje(id))
try{
var personajes = await Promise.all(promesas)
console.log(personajes)
} catch(id){
    onerror(id)
}
    Promise
    .all(promesas)
    .then(personajes => console.table(personajes))
    .catch(onerror)
}

obtenerpersonajes()






