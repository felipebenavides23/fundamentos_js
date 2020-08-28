var fecha_zodiaco = {
    aries : "21 de marzo - 20 de abril",
    tauro : "21 de abril - 20 de mayo",
    geminis : "21 de mayo - 21 de junio",
    cancer: "22 de junio - 22 de julio",
    leo: "23 de julio - 22 de agosto",
    virgo:"23 de agosto - 22 de septiembre	",
    libra :"23 de septiembre - 22 de octubre",
    escorpio: "23 de octubre - 22 de noviembre",
    sagitario : "23 de noviembre - 21 de diciembre",
    capricornio : "22 de diciembre - 20 de enero",
    acuario: "21 de enero - 18 de febrero",
    piscis : "19 de febrero - 20 de marzo"
}

var tu_signo = prompt("escribe tu signo")

while(tu_signo == null || tu_signo === ""){
    tu_signo = prompt("escribe tu signo")
 }


switch(tu_signo){
    case 'aries':
        console.log(fecha_zodiaco.aries)
    break
    case 'tauro':
        console.log(fecha_zodiaco.tauro)
    break
    case 'geminis':
        console.log(fecha_zodiaco.geminis)
    break
    case 'cancer':
        console.log(fecha_zodiaco.cancer)
    break
    case 'leo':
        console.log(fecha_zodiaco.leo)
    break
    case 'virgo':
        console.log(fecha_zodiaco.virgo)
    break
    case 'libra':
        console.log(fecha_zodiaco.libra)
    break
    case 'escorpio':
        console.log(fecha_zodiaco.escorpio)
    break
    case 'sagitario':
        console.log(fecha_zodiaco.sagitario)
    break
    case 'capricornio':
        console.log(fecha_zodiaco.capricornio)
    break
    case 'acuario':
        console.log(fecha_zodiaco.acuario)
    break
    case 'piscis':
        console.log(fecha_zodiaco.piscis)
    break
    default:
        console.log("este no es un signo valido")
        break

}

/* Disable minification (remove `.min` from URL path) for more info */

