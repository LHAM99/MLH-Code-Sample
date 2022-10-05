class platillo{
    constructor(ID, Nombre, Descripcion, Precio, TipoComida){
    this.ID=ID;
    this.Nombre=Nombre;
    this.Descripcion=Descripcion;
    this.Precio=Precio;
    this.TipoComida=TipoComida;
    }
}

class pedido{
    constructor(ID,Nombre,Precio,veces){
        this.ID=ID;
        this.Nombre=Nombre;
        this.Precio=Precio;
        this.veces=veces;
        this.subtotal=0;
    }
}
class orden{
    constructor(){
        this.totalOrden=0;
        this.pedidos=[];
    }
}

class cuentaDia{
    constructor(){
        this.totalDia=0;
        this.ordenesDia=[];
    }
}
var ordenActual=new orden();
var cuentaDiaActual = new cuentaDia();


platillo.prototype.toString = function toString() {return "Nombre: " + this.Nombre + " Descripción: " + this.Descripcion + " Precio: $" + this.Precio + " Tipo de Comida: " + this.TipoComida;}
var ArregloPlatillos =[];
function inicioDia(){
    var platilloTbone= new platillo(001,"Tbone","Filete generalmente elaborado a la parrilla y de corte típico en el que puede verse el hueso en forma de T.",1000,"carne");
    ArregloPlatillos.push(platilloTbone);
    var platilloRibeye= new platillo(002,"Ribeye","Tiempo aprox. 40min \n El ojo de costilla es un filete extraído de la sección de la costilla de ternera, entre las costillas seis y la doce.",500,"carne");
    ArregloPlatillos.push(platilloRibeye);
    var platillocoteRotie= new platillo(003,"Côterôtie","Tiempo aprox. 50min \n La costilla asada es una preparación culinaria típica de la gastronomía francesa que consiste en costilla de ternera o de cerdo entera.",2000,"carne");
    ArregloPlatillos.push(platillocoteRotie);
    var platilloChateaubriand= new platillo(004,"Chateaubriand", "Tiempo aprox. 40min \n Filete elaborado a la parrilla y de corte típico en el que puede verse el hueso en forma de T.",750,"carne");
    ArregloPlatillos.push(platilloChateaubriand);
    var platilloPapasFritas= new platillo(011,"PapasFritas", "Tiempo aprox. 5min Clasicas y elegantes las amadas papas fritas a las que nadie puede resistirse",150,"aperitivo");
    ArregloPlatillos.push(platilloPapasFritas);
    var platilloTarte= new platillo(021,"TarteD'Hiver", "Una tarta ligera de sabores dulces y colores que alegrarán los corazones.",200,"postre");
    ArregloPlatillos.push(platilloTarte);
    var platilloPescadoVeracruzano= new platillo(031,"PescadoVeracruzana", "Tiempo aprox. 20min \n Pensado para usted, este platillo mas ligero resalta el sabor del buen gusto",1200,"pescado");
    ArregloPlatillos.push(platilloPescadoVeracruzano);
    var platilloPescadoBullabesa= new platillo(032,"PescadoBullabesa", "Tiempo aprox. 10min \n Pescado blanco(variedad), langostinos , mejillones",1500,"pescado");
    ArregloPlatillos.push(platilloPescadoBullabesa);
    var platilloScargots = new platillo(012,"Scargots", "Tiempo aprox. 5 min \n De lo mejor de la gastronomía mundial, simplemente una de las mayores delicias del mundo", 1000, "aperitivo");
    ArregloPlatillos.push(platilloScargots);
    var platilloMacaron= new platillo(022,"Macarons", "Tipo de galleta tradicional, hecha de clara de huevo, almendra molida, azúcar glas y azúcar.",500,"postre");
    ArregloPlatillos.push(platilloMacaron);
}
console.log(ArregloPlatillos);



function eliminarPlato(){
    var aEliminar = document.getElementById("deletePlato").value;
	var result = ArregloPlatillos.some(element => element.ID == aEliminar);
    var i, index = 0;

	if (result == true) { /* result toma valores booleanos */
        index = ArregloPlatillos.map(element => element.ID).indexOf(parseInt(aEliminar));
        ArregloPlatillos.splice(index,1);
        actualizarCarta();
        alert("¡Platillo Eliminado!\n\nID: "+aEliminar);
        console.log(ArregloPlatillos);

    }
    else{
        alert("Platillo no encontrado");
    }
}


function agregarPlato(){

    var a = document.getElementById("id").value;
    var b = document.getElementById("nombre").value;
    var c = document.getElementById("descripcion").value;
    var d = document.getElementById("precio").value;
    var e = document.getElementById("tipoComida").value;

    var resultID = ArregloPlatillos.some(element => element.ID == a);
    var resultNombre= ArregloPlatillos.some(element => element.Nombre == b);
    
    if(resultID==true)
        alert("Ya existe un platillo con este ID, ingrese otro.");
    else if(resultNombre==true)
        alert("Ya existe un platillo con este nombre, ingrese otro.");
    else if(a=="")
        alert("Ingrese un ID válido");
    else if(b=="")
        alert("Ingrese un nombre válido");
    else if(d=="")
        alert("Ingrese el precio");
    else if(e=="")
        alert("Ingrese el tipo de comida");
    else{
        ArregloPlatillos.splice(ArregloPlatillos.length,0, nuevo = new platillo(a,b,c,d,e));
        actualizarCarta();
        alert("Platillo agregado con éxito");
    }
}

/******   Esta función presenta los 10 primeros platillos pero no funciona para actualizar la carta   *******/
function mostrarCarta(){
    var lista =document.getElementById("mostrarPlatillos");
    ArregloPlatillos.forEach(function(current){
        var contenedor= document.createElement("div");
        var contenido = document.createTextNode("ID: "+current.ID+"; '"+current.Nombre+"' "+current.Descripcion+" $"+current.Precio+" ("+current.TipoComida+")");
        contenedor.appendChild(contenido);
        lista.appendChild(contenedor);
    })
}

function modificarPPlato(){
    var aCambiar =document.getElementById("modificarPlato").value;
    var resultID = ArregloPlatillos.some(element => element.ID == aCambiar);
    if(resultID == false){
        alert("De un ID valido");
    }else{
        var index = ArregloPlatillos.map(element => element.ID).indexOf(parseInt(aCambiar));
        var nuevoPrecio = prompt('Introduzca el nuevo precio del producto: ');
        ArregloPlatillos[index].Precio=nuevoPrecio;
        alert("Cambio de precio ID: " +ArregloPlatillos[index].ID +" Nombre comercial: '"+ ArregloPlatillos[index].Nombre+"' a $ "+nuevoPrecio );
        console.log(ArregloPlatillos);
    }
    actualizarCarta();
}


function actualizarCarta(){
    var lista =document.getElementById("mostrarPlatillos");
    lista.innerHTML = "";
    ArregloPlatillos.forEach(function(current){
        var contenedor= document.createElement("div");
        var contenido = document.createTextNode("ID: "+ current.ID+"; '"+current.Nombre+"' "+current.Descripcion+" $"+current.Precio+" ("+current.TipoComida+")");
        contenedor.appendChild(contenido);
        lista.appendChild(contenedor);
    })
}


/***************************** PEDIDOS *******************/

function hacerPedido(){
    var a = document.getElementById("IDPEDIDO").value;
    var b = document.getElementById("NUMPEDIDOS").value;
    var resultID = ArregloPlatillos.some(element => element.ID == a);

    if(resultID!=true)
        alert("Ingrese un ID existente");
    else if(b=="" || b==0)
        alert("Ingrese número de platillos");
    else{
        var indexPlato = ArregloPlatillos.findIndex(current => current.ID == a);
        ordenActual.pedidos.push(new pedido(ArregloPlatillos[indexPlato].ID,ArregloPlatillos[indexPlato].Nombre,ArregloPlatillos[indexPlato].Precio,b));
        ordenActual.totalOrden=ordenActual.totalOrden+(ArregloPlatillos[indexPlato].Precio*b);
        mostrarPlatillosOrden();
        console.log(ordenActual.pedidos);
    }
}

function terminarOrden(){
    cuentaDiaActual.ordenesDia.push(JSON.parse(JSON.stringify(ordenActual)));
    cuentaDiaActual.totalDia=cuentaDiaActual.totalDia+ordenActual.totalOrden;
    mostrarPlatillosOrden();
    alert("Orden terminada, Total de orden: $" + ordenActual.totalOrden);
    ordenActual.totalOrden=0;
    ordenActual.pedidos=[];
    mostrarPlatillosOrden();
}

function mostrarPlatillosOrden(){
    var lista =document.getElementById("mostrarPlatillosOrden");
    lista.innerHTML = "";
    ordenActual.pedidos.forEach(function(current){
        var contenedor= document.createElement("div");
        current.subtotal=current.Precio*current.veces;
        var contenido = document.createTextNode("ID: "+ current.ID+"; '"+current.Nombre+"' $"+current.Precio +" cantidad: " +current.veces+" Subtotal: "+current.subtotal);
        contenedor.appendChild(contenido);
        lista.appendChild(contenedor);
    })

    var lista2 =document.getElementById("mostrarTotalOrden");
    lista2.innerHTML = "";
    var contenedor= document.createElement("div");
    var contenido = document.createTextNode("Total: $"+ ordenActual.totalOrden);
    contenedor.appendChild(contenido);
    lista2.appendChild(contenedor);

}

function terminarDia(){
    var lista =document.getElementById("mostrarCierreDia");
    lista.innerHTML = "";
    cuentaDiaActual.ordenesDia.forEach(function(current){
        var contenedor= document.createElement("div");
        var contenido = document.createTextNode("Total de orden: $" +current.totalOrden);
        contenedor.appendChild(contenido);
        lista.appendChild(contenedor);
    })
    var lista1 =document.getElementById("mostrarTotalDia");
    lista1.innerHTML = "";
    var contenedor= document.createElement("div");
    var contenido = document.createTextNode("Cuenta del dia Total: $"+ cuentaDiaActual.totalDia);
    contenedor.appendChild(contenido);
    lista1.appendChild(contenedor);
    alert("!Dia TERMINADO, Total GANANCIAS: $" + cuentaDiaActual.totalDia +"");
}