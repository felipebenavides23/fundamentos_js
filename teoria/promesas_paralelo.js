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


var ids= [1,2,3,4,5,6,7]
 
var promesas = ids.map(id=> escogerpersonaje(id))

    Promise
    .all(promesas)
    .then(personajes => {
        for(var i = 0 ; i < ids.length;i++)
        {
             console.table(personajes[i].name)
            }})
    .catch(onerror)








