function usuarioNuevo(_nombreCompleto,edad, _empresa, _codigoPostal ){
    let nombreCompleto = prompt('Bienvenido, ingresa tu nombre y apellido');
    let edad = parseInt(prompt('Que edad tienes?'));
    let empresa = prompt('A que empresa perteneces?');
    let codigoPostal = prompt('Cual es tu codigo postal?')
    alert(`Su nombre es ${usuarioNuevo.nombreCompleto} de la empresa ${usuarioNuevo.empresa}`);

    if(edad >18){  //revisar si debo dejarle esto, sino quitarlo
        alert(`Eres mayor de edad`)
    }else{
    alert(`Eres menor de edad`)
    }
    console.log(usuarioNuevo.edad)
    
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
    //los prompt aqui ya no son necesarios porque voy a tomar los valores desde los input de html con el id que les asigne
    //esto solo usarlo en el de html
    // var nombreIngresado = document.getElementById("nombre").value;
    // console.log(nombreIngresado);
    
    // var apellidoIngresado = document.getElementById("apellido").value;
    // console.log(apellidoIngresado);
    
    // var empresaIngresada = document.getElementById("empresa").value;
    // console.log(empresaIngresada);
    
    // var nuevaPersona = new usuarioNuevo(nombreIngresado, apellidoIngresado, empresaIngresada,)
    // console.log(nuevaPersona);    
    }
    
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

    function cantidadDeProducto (productos){ 
        return prompt(`Cuantos kilos de ${productos.nombre} desea adquirir?`)
    }
    const calculo = [{precioGranulado}, {precioPulverizado}].reduce((a,b)=>a+b) //aqui me falta sustituir los productos por un ${}pero no entiendo muy bien como hacerlo
    alert(`El costo total de los productos seleccionados es $ ${productos.nombre}*${cantidadDeProducto}`)
    console.log(calculo)

    //alternativa de productos
    // class producto {
    //     constructor(nombre, precio, cantidad) {
    //         this.nombre = nombre;
    //         this.precio = precio;
    //         this.cantidad = cantidad;
    //     }
    //     costo=() => this.precio * this.cantidad;
    // }
    // const producto1 = new producto( "Caucho granulado ", "$450", 10);
    // return producto1;
    
    // const producto2 = new producto( "Caucho pulverizado ", "$650", 5);
    // return producto2;

        


