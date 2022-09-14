function usuarioNuevo(_nombreCompleto,edad, _empresa, _codigoPostal ){
    let nombreCompleto = prompt('Bienvenido, ingresa tu nombre y apellido');
    let edad = parseInt(prompt('Que edad tienes?'));
    let empresa = prompt('A que empresa perteneces?');
    let codigoPostal = prompt('Cual es tu codigo postal?')
    alert(`Su nombre es ${usuarioNuevo.nombreCompleto} de la empresa ${usuarioNuevo.empresa}`);
}
console.log(usuarioNuevo())


//alternativa de datos de usuario para poder enlazarlo con html
function Enviar(){
    console.log("Enviado")

    class usuarioNuevo {
        constructor(nombre, apellido, edad, codigoPostal) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.codigoPostal = codigoPostal;
        }
    }console.log(usuarioNuevo) 
    }

    //inicio de seleccion de productos
    let productos =[
        {nombre: `Caucho granulado`,
        precio: 450},
        {nombre: `Caucho pulverizado`,
        precio: 650},
]
    function iniciarCompra (){  
        let mensaje = `Que producto desea comprar?`
        let enumerador = 1   

        for(let {} of productos){
            mensaje += `\n${enumerador}.- ${productos.nombre} - $ ${productos.precio}`
            enumerador++
        }
        mensaje += `\n${enumerador}.- Salir`
        return mensaje

    }prompt(iniciarCompra())

    //el usuario selecciona la cantidad de kilos que desea
    function cantidadDeProducto (productos){ 
        return prompt(`Cuantos kilos de ${productos.nombre} desea adquirir?`)
    }

    //despues se le arroja el mensaje que le indica cuanto va a pagar
    const calculo = [{precioGranulado}, {precioPulverizado}].reduce((a,b)=>a+b) //aqui me falta sustituir los productos por un ${}pero aun no entiendo muy bien como hacerlo
    alert(`El costo total de los productos seleccionados es $ ${productos.nombre}*${cantidadDeProducto}`)
    console.log(calculo)

    //



