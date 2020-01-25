//clase contenedora  UPOHOME
class UPOHOME{

    //contructor con arrays
    constructor(){
        this.arrayClientes = [];
        this.arrayAlquileres = [];
        this.arrayCitas = [];
        this.arrayEmpleados = [];
        this.arrayLimpiezas = [];
        this.arrayViviendas = [];
    }

    //metodos

}

class Cliente{
    
    constructor(nombre, apellidos, dni, telefono, domicilio, esPropierario){
        this.nombre = nombre;               //string
        this.apellidos = apellidos;         //string
        this.dni = dni;                     //string
        this.telefono = telefono;           //int
        this.domicilio = domicilio;         //string
        this.esPropierario = esPropierario; //boolean
    }

    //metodos


}

class Alquiler{

    constructor(idAlquiler, fechaInicio, fechaFin){
        this.idAlquiler = idAlquiler;       //int
        this.fechaInicio = fechaInicio;     //Date
        this.fechaFin = fechaFin;           //Date
    }

    //metodos


}

class Imagen{

    constructor(imagen, descripcion){
        this.imagen = imagen;               //string (ruta de la imagen)
        this.descripcion = descripcion;     //string
    }

    //metodos


}

class Vivienda{

    constructor(idVivienda, direccion, precioAlquiler, estadoDisponibilidad, imgPrincipal, numHabitaciones, descripcion, exterior, climatizacion){
        this.idVivienda = idVivienda;                       //int
        this.direccion = direccion;                         //string
        this.precioAlquiler = precioAlquiler;               //float
        this.estadoDisponibilidad = estadoDisponibilidad;   //boolean
        this.imgPrincipal = imgPrincipal;                   //Imagen
        this.numHabitaciones = numHabitaciones;             //int
        this.descripcion = descripcion;                     //string
        this.exterior = exterior;                           //string
        this.climatizacion = climatizacion;                 //boolean
    }

    //metodos



}

class Cita{

    constructor(idCita, fecha, hora, descripcion){
        this.idCita = idCita;               //int
        this.fecha = fecha;                 //date
        this.hora = hora;                   //string
        this.descripcion = descripcion;     //string
    }

    //metodos

    

}

class Empleado{

    constructor(nombre, apellidos, dni, telefono, salario, domicilio){
        this.nombre = nombre;           //string
        this.apellidos = apellidos;     //string
        this.dni = dni;                 //dni
        this.telefono = telefono;       //int
        this.salario = salario;         //float
        this.domicilio = domicilio;     //string
    }

    //metodos



}

class Limpieza{

    constructor(idLimpieza, fecha, hora, finalizado){
        this.idLimpieza = idLimpieza    //int
        this.fecha = fecha;             //Date
        this.hora = hora;               //string
        this.finalizado = finalizado;   //boolean
    }

    //metodos



}