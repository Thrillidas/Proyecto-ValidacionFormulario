export function valida(input){
    const tipoInput = input.dataset.tipo
    if (validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    if(input.validity.valid){
     input.parentElement.classList.remove("input-container--invalid")
     input.parentElement.querySelector('.input-message-error').innerHTML = " "

    }

    else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoInput,input)
    }
     
}

const tipoDeError = [
    "valueMissing", 
    "typeMismatch", 
    "patternMismatch", 
    "customError"
]

function mostrarMensajeDeError(tipoInput,input){
    let mensaje = " "
    tipoDeError.forEach( (error) =>{
        if(input.validity[error]){
            mensaje = (mensajesDeError[tipoInput][error])
        }     
    })
    return mensaje 
}




const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },

    contraseha:{
        valueMissing: "El campo contraseña no puede estar vacio",
        patternMismatch: "Contraseña no valida"
    },

    nacimiento:{
        valueMissing: "El campo fecha de nacimiento no puede estar vacio",
        customError: "Debes tener almenos 18 años de edad"
    },

    telefono:{
        valueMissing: "El campo telefono no puede estar vacio",
        patternMismatch: "Solo puedes escribir numeros hasta un limite de 10 caracteres"
    },

    direccion:{
        valueMissing: "El campo dirección no puede estar vacio",
        patternMismatch: "Solo puedes escribir numeros hasta un limite de 10s a 40 caracteres"

    },

    ciudad:{
        valueMissing: "El campo ciudad no puede estar vacio",
        patternMismatch: "Solo puedes escribir numeros hasta un limite de 10 a 40 caracteres"

    },

    estado:{
        valueMissing: "El campo estado no puede estar vacio",
        patternMismatch: "Solo puedes escribir numeros hasta un limite de 10 a 40 caracteres"

    }
}

const validadores = {
    nacimiento: (input)=>validarNacimiento(input),
}



function validarNacimiento (input){
    const fechaCliente = new Date(input.value)
    let mensaje = ""
   if(!mayorEdad(fechaCliente)){
    mensaje= "Debes tener almenos 18 años de edad"

   }

    input.setCustomValidity(mensaje)
    
}

function mayorEdad (fecha){
    const fechaActual = new Date()
    const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCDate())
    return(fechaActual >= diferenciaFechas)
}