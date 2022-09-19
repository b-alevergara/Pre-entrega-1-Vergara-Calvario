//tienes funciones que reciben parámetros que no necesitan y luego nunca les pasas
//variable: usuario.nombre
//objeto: ${usuario.nombre}

function usuarioNuevo(nombre,edad, empresa, codigoPostal ){
    let nombre = parseFloat(prompt(`Bienvenido, ingresa tu nombre y apellido`));
    let edad = parseInt(prompt('Que edad tienes?'));
    let empresa = prompt('A que empresa perteneces?'); //como hacer que no salga string null
    let codigoPostal = prompt('Cual es tu codigo postal?')

    alert(`Su nombre es `+ usuarioNuevo.nombre +` de la empresa `+ usuarioNuevo.empresa `)`;
    console.log(usuarioNuevo())
}




//alternativa de datos de usuario para poder enlazarlo con html
function Enviar(){
    //aqui iria el boton
    console.log("Enviado")

    class Persona {
        constructor(nombre, edad, empresa, codigoPostal) {
            this.nombre = nombre;
            this.edad = edad;
            this.empresa = empresa;
            this.codigoPostal = codigoPostal;
        }
        informacion(){
            console.log("El usuario se llama "+ this.nombre + "y pertenece a la empresa " + this.empresa)
        }
    }
        }
const nuevaPersona = new Persona( 
    {nombre: prompt("Bienvenido, ingresa tu nombre"), 
    edad: parseInt(prompt('Que edad tienes?')), 
    empresa: prompt("A que empresa perteneces?"), 
    codigoPostal: parseInt(prompt("Cual es tu codigo postal?"))
    });
    nuevaPersona.informacion();
    
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

        for(let producto of productos){ //por que no lo lee?no lo llamo en ningun lado
            mensaje += `\n${enumerador}.- ${productos.nombre} - $ ${productos.precio}`
            enumerador++
        }
        mensaje += `\n${enumerador}.- Salir`
        return mensaje
    }
    prompt(iniciarCompra())
//poner esto a prueba y ver que sucede, si sigue pidientole al cliente que seleccione productos
//o solo lo pide una vez?
    function cantidadDeProducto (productos){ 
        return parseInt(prompt(`Cuantos kilos de ${productos.nombre} desea adquirir?`))
    }console.log(cantidadDeProducto)

    function total(cantidadDeProducto, productos){
        let calculo = cantidadDeProducto*productos.precio
        alert(`El total de su compra es de $` + total.calculo)
        return calculo
    }
    console.log(total)