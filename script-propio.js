const inputFecha = document.querySelector("#birth")

inputFecha.addEventListener("blur", (evento)=>{
    validarNacimiento(evento.target)
    console.log(validarNacimiento(evento.target))
    

})

function validarNacimiento(input){
    const inputFechaNacimiento = new Date(input.value)
    let mensaje = ""
    

    if (mayorEdad(inputFechaNacimiento) < 18){
        mensaje = "Debes tener al menos 18 años para registrarte"
        //console.log("Soy menor de edad")

    }
    input.setCustomValidity(mensaje)
    

}

function mayorEdad(fechaNacimiento){
    const fechaActual = new Date()
    let diferenciaEdadMilisegundos = Math.abs(fechaActual - fechaNacimiento)
    let diferenciaEdad = (((((diferenciaEdadMilisegundos/1000)/60)/60)/24)/365)

    //console.log(fechaNacimiento," ----- ",fechaActual)
    //console.log(diferenciaEdad)

    return diferenciaEdad

}




