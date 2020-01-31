var oUPOHOME = new UPOHOME();

//ADD_EVENT_LISTENER
//Cliente
frmAltaCliente.btnAceptarAltaCliente.addEventListener("click", altaCliente,false);
frmCargarCliente.btnCargarCliente.addEventListener("click", cargarCliente, false);
frmModificarCliente.btnAceptarModificarCliente.addEventListener("click", modificarCliente, false);
frmBajaCliente.btnAceptarBajaCliente.addEventListener("click", borrarCliente, false);
//Alquiler
frmAlquilar.btnAceptarAlquiler.addEventListener("click", altaAlquiler,false);
frmCargarAlquiler.btnCargarAlquiler.addEventListener("click", cargarAlquiler,false);
frmModificarAlquiler.btnAceptarModificarAlquiler.addEventListener("click", modificarAlquiler,false);
frmEliminarAlquiler.btnEliminarAlquiler.addEventListener("click", borrarAlquiler,false);
//Vivienda
frmAgregarVivienda.btnAceptarVivienda.addEventListener("click", agregarVivienda, false);
frmCargarVivienda.btnCargarVivienda.addEventListener("click", cargarVivienda, false);
frmModificarVivienda.btnModificarVivienda.addEventListener("click", modificarVivienda, false);
frmEliminarVivienda.btnEliminarVivienda.addEventListener("click", borrarVivienda, false);
//Citas
frmAsignarCita.btnAceptarCita.addEventListener("click", altaCita, false);
frmCargarCita.btnCargarCita.addEventListener("click", cargarCita, false);
frmModificarCita.btnModificarCita.addEventListener("click", modificarCita, false);
frmEliminarCita.btnEliminarCita.addEventListener("click", borrarCita, false);
//Empleados
frmcontratarEmpleado.btnAceptarContratarEmpleado.addEventListener("click", contratarEmpleado, false);
frmCargarEmpleado.btnCargarEmpleado.addEventListener("click", cargarEmpleado, false);
frmModificarEmpleado.btnAceptarModificarEmpleado.addEventListener("click", modificarEmpleado, false);
frmDespedirEmpleado.btnAceptarBajaEmpleado.addEventListener("click", borrarEmpleado, false);
//Limpieza
frmAsignarLimpieza.btnAceptarLimpieza.addEventListener("click", asignarLimpieza, false);
frmCargarLimpieza.btnCargarLimpieza.addEventListener("click", cargarLimpieza, false);
frmModificarLimpieza.btnAceptarLimpieza.addEventListener("click", modificarLimpieza, false);
frmEliminarLimpieza.btnAceptarEliminarLimpieza.addEventListener("click", borrarLimpieza, false);
//-----------------------------------------------------------------------------------------------//
//Datos de prueba
    oUPOHOME.altaCliente(new Cliente("Manuel Esteban", "Rodríguez Gómez", "1", "608995074", "Larra 29", false));
    oUPOHOME.altaCliente(new Cliente("Pablo", "Pintor Álvarez", "2", "666888111", "Roble 32", false));
    oUPOHOME.altaCliente(new Cliente("Juan", "Pérez Varela", "3", "111222333", "Arenal 14", false));

    oUPOHOME.agregarVivienda(new Vivienda("1", "Larra", "25000", true, "", "4", "aaa bbb ccc", "Roble", false, []));
    
    oUPOHOME.altaEmpleado(new Empleado("Jose", "Fernandez", "25", "111", "950","Abeto 45"));
//-----------------------------------------------------------------------------------------------//
//CLIENTE
function altaCliente(){
    // Recoger valores del formulario
    let sNombre = frmAltaCliente.txtNombre.value.trim();
    let sApellidos = frmAltaCliente.txtApellidos.value.trim();
    let sDNI = frmAltaCliente.txtDNI.value.trim();
    let iTelf = parseInt(frmAltaCliente.txtTelefono.value);
    let sDomicilio = frmAltaCliente.txtDomicilio.value.trim();

    if(sNombre == "" || sApellidos == "" || sDNI == "" || isNaN(iTelf) || sDomicilio == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        // Creamos el objeto Cliente
        let oCliente = new Cliente(sNombre, sApellidos, sDNI, iTelf, sDomicilio, false);

        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.altaCliente(oCliente);

        alert(sMensaje);
        ocultarFormularios();   
    }
}
function cargarCliente(){
    //Comprobamos si existe
    let sDni = frmCargarCliente.txtDNI.value.trim();
    let oCliente = oUPOHOME.buscarCliente(sDni);
    if(oCliente == null){
        alert("No se encuentran datos del cliente.");
    }else{
        document.querySelector("#modificarCliente").style.display = "block";
        frmModificarCliente.txtNombre.value = oCliente.nombre;
        frmModificarCliente.txtApellidos.value = oCliente.apellidos;
        frmModificarCliente.txtDNI.value = sDni;
        frmModificarCliente.txtTelefono.value = oCliente.telefono;
        frmModificarCliente.txtDomicilio.value = oCliente.domicilio;
    }
    
}
function modificarCliente(){
    let sNombre = frmModificarCliente.txtNombre.value.trim();
    let sApellidos = frmModificarCliente.txtApellidos.value.trim();
    let sDNI = frmModificarCliente.txtDNI.value.trim();
    let iTelf = parseInt(frmModificarCliente.txtTelefono.value);
    let sDomicilio = frmModificarCliente.txtDomicilio.value.trim();

    if(sNombre == "" || sApellidos == "" || sDNI == "" || isNaN(iTelf) || sDomicilio == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.modificarCliente(sNombre, sApellidos, sDNI, iTelf, sDomicilio);

        alert(sMensaje);
        if(sMensaje == "Cliente modificado correctamente."){ 
            ocultarFormularios();
        }
        
    }
}
function borrarCliente(){
    let sDni = frmBajaCliente.txtDNI.value.trim();

    if(sDni == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
        let sMensaje = oUPOHOME.borrarCliente(sDni);

        alert(sMensaje);
        if(sMensaje == "Cliente modificado correctamente."){
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//ALQUILER
function altaAlquiler(){
    let sId = parseInt(frmAlquilar.txtId.value);
    let sIdVivienda = parseInt(frmAlquilar.txtIdVivienda.value);
    let sDNI = frmAlquilar.txtDNI.value.trim();
    let sFechaInicio = frmAlquilar.fechaInicio.value.trim();
    let sFechaFin = frmAlquilar.fechaFin.value.trim();

    if( isNaN(sId) || sIdVivienda == "" ||sDNI == "" || sFechaInicio == "" || sFechaFin == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        let oCliente = oUPOHOME.buscarCliente(sDNI);
        let oVivienda = oUPOHOME.buscarVivienda(sIdVivienda);
        if(oCliente != null){
            if(oVivienda != null){
                let oAlquiler = new Alquiler(sId, sIdVivienda, sDNI, sFechaInicio, sFechaFin);

                let sMensaje = oUPOHOME.añadirAlquiler(oAlquiler);

                alert(sMensaje);
                if(sMensaje == "Alquiler realizado con éxito"){
                    ocultarFormularios();   
                }
            }else{
                alert("No existe la vivienda.");
            }
        }else{
            alert("No existe el cliente.");
        }        
    }
}
function cargarAlquiler() {
    let idAlquiler = parseInt(frmCargarAlquiler.txtID.value.trim());

    let oAlquiler = oUPOHOME.buscarAlquiler(idAlquiler);
    if(oAlquiler == null){
        alert("No se encuentran datos del alquiler.");
    }else{
        document.querySelector("#modificarAlquiler").style.display = "block";
        frmModificarAlquiler.txtId.value = idAlquiler;
        frmModificarAlquiler.txtIdVivienda.value = oAlquiler.idVivienda;
        frmModificarAlquiler.txtDNI.value = oAlquiler.dniCliente;
        frmModificarAlquiler.fechaInicio.value = oAlquiler.fechaInicio;
        frmModificarAlquiler.fechaFin.value = oAlquiler.fechaFin;
    } 
} 
function modificarAlquiler(){
    //modificarAlquiler(sIdAlquiler, sDniCliente, sIdVivienda, dFechaInicio, dFechaFin)
    let sId = parseInt(frmModificarAlquiler.txtId.value);
    let sIdVivienda = parseInt(frmModificarAlquiler.txtIdVivienda.value);
    let sDNI = frmModificarAlquiler.txtDNI.value.trim();
    let sFechaInicio = frmModificarAlquiler.fechaInicio.value.trim();
    let sFechaFin = frmModificarAlquiler.fechaFin.value.trim();

    if( isNaN(sId) || sIdVivienda == "" ||sDNI == "" || sFechaInicio == "" || sFechaFin == ""  ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        let oCliente = oUPOHOME.buscarCliente(sDNI);
        if(oCliente != null){
            let sMensaje = oUPOHOME.modificarAlquiler(sId, sIdVivienda, sDNI, sFechaInicio, sFechaFin);

            alert(sMensaje);
            if(sMensaje == "Alquiler modificado correctamente."){ 
                ocultarFormularios();
            }
        }else{
            alert("No existe el cliente.");
        }

    }
}
function borrarAlquiler(){
    //
    let sId = parseInt(frmEliminarAlquiler.txtID.value);

    if(sId == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
        let sMensaje = oUPOHOME.borrarAlquiler(sId);

        alert(sMensaje);
        if(sMensaje == "Alquiler eliminado correctamente."){
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//VIVIENDA
function agregarVivienda(){
    // Recoger valores del formulario
    let idVivienda = parseInt(frmAgregarVivienda.txtId.value.trim());
    let direccion = frmAgregarVivienda.txtDireccion.value.trim();
    let precioAlquiler = parseFloat(frmAgregarVivienda.txtPrecio.value.trim());
    let estadoDisponibilidad = frmAgregarVivienda.chkDisponible.checked;
    let imgPrincipal = "";
    let numHabitaciones = parseInt(frmAgregarVivienda.txtHabitaciones.value);
    let descripcion = frmAgregarVivienda.txtDescripcion.value.trim();
    let exterior = frmAgregarVivienda.txtExterior.value.trim();
    let climatizacion = frmAgregarVivienda.chkClimatizado.checked;
    let arrayImagen = [];

    if(isNaN(idVivienda) || direccion == "" || isNaN(precioAlquiler) || isNaN(numHabitaciones) || descripcion == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        let oVivienda = new Vivienda(idVivienda, direccion, precioAlquiler, estadoDisponibilidad, imgPrincipal, numHabitaciones, descripcion, exterior, climatizacion, arrayImagen);

        let sMensaje = oUPOHOME.agregarVivienda(oVivienda);

        alert(sMensaje);
        if(sMensaje == "La vivienda ya estaba dado de alta"){
            ocultarFormularios();   
        }    
        
    }
}
function cargarVivienda(){
    let idVivienda = parseInt(frmCargarVivienda.txtID.value.trim());

    let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
    if(oVivienda == null){
        alert("No se encuentran datos de la vivienda.");
    }else{
        document.querySelector("#modificarVivienda").style.display = "block";
        frmModificarVivienda.txtId.value = idVivienda;
        frmModificarVivienda.txtDireccion.value = oVivienda.direccion;
        frmModificarVivienda.txtPrecio.value = oVivienda.precioAlquiler;
        frmModificarVivienda.chkDisponible.checked = oVivienda.estadoDisponibilidad;
        frmModificarVivienda.txtHabitaciones.value = oVivienda.numHabitaciones;
        frmModificarVivienda.txtDescripcion.value = oVivienda.descripcion;
        frmModificarVivienda.txtExterior.value = oVivienda.exterior;
        frmModificarVivienda.chkClimatizado.checked = oVivienda.climatizacion;

    }   
}
function modificarVivienda() {
    let idVivienda = parseInt(frmModificarVivienda.txtId.value.trim());
    let direccion = frmModificarVivienda.txtDireccion.value.trim();
    let precioAlquiler = parseFloat(frmModificarVivienda.txtPrecio.value.trim());
    let estadoDisponibilidad = frmModificarVivienda.chkDisponible.checked;
    let imgPrincipal = "";
    let numHabitaciones = parseInt(frmModificarVivienda.txtHabitaciones.value);
    let descripcion = frmModificarVivienda.txtDescripcion.value.trim();
    let exterior = frmModificarVivienda.txtExterior.value.trim();
    let climatizacion = frmModificarVivienda.chkClimatizado.checked;
    let arrayImagen = [];

    if(direccion == "" || isNaN(precioAlquiler) || isNaN(numHabitaciones) || descripcion == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.modificarVivienda(idVivienda, direccion, estadoDisponibilidad, numHabitaciones, descripcion, exterior, climatizacion);

        alert(sMensaje);
        if(sMensaje == "Vivienda modificada correctamente."){ 
            ocultarFormularios();
        }
        
    }
}
function borrarVivienda() {
    let idVivienda = parseInt(frmEliminarVivienda.txtID.value);
    
    if(idVivienda == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
        let sMensaje = oUPOHOME.borrarVivivenda(idVivienda);

        alert(sMensaje);
        if(sMensaje == "Vivienda eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//CITAS
function altaCita() {
    let iId = parseInt(frmAsignarCita.txtId.value);
    let sFecha = frmAsignarCita.fecha.value.trim();
    let sHora = frmAsignarCita.txtHora.value.trim();
    let sDniCliente  = frmAsignarCita.txtDNICliente.value.trim();
    let sDniEmpleado = frmAsignarCita.txtDNI.value.trim();
    let sDescripcion = frmAsignarCita.txtDescripcion.value.trim();

    if(isNaN(iId) || sFecha == "" || sHora == "" || sDniCliente == "" || sDniEmpleado == "" || sDescripcion == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        let oCliente = oUPOHOME.buscarCliente(sDniCliente);
        let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
        if(oCliente != null){
            if(oEmpleado != null){
                let oCita = new Cita(iId, sDniCliente, sDniEmpleado, sFecha, sHora, sDescripcion);
                let sMensaje = oUPOHOME.altaCita(oCita);

                alert(sMensaje);

                ocultarFormularios();   
            }else{
                alert("No existe el empleado.");
            }
        }else{
            alert("No existe el cliente");
        }
        
    }
} 
function cargarCita() {
    //Comprobamos si existe
    let sId = frmCargarCita.txtID.value.trim();
    let oCita = oUPOHOME.buscarCita(sId);
    if(oCita == null){
        alert("No existe cita con ese ID.");
    }else{
        document.querySelector("#modificarCita").style.display = "block";
        frmModificarCita.txtId.value = sId;
        frmModificarCita.fecha.value = oCita.fecha;
        frmModificarCita.txtHora.value = oCita.hora;
        frmModificarCita.txtDNICliente.value = oCita.dniCliente;
        frmModificarCita.txtDNI.value = oCita.dniEmpleado;
        frmModificarCita.txtDescripcion.value = oCita.descripcion;
    }

} 
function modificarCita() {
    let iId = parseInt(frmModificarCita.txtId.value);
    let sFecha = frmModificarCita.fecha.value.trim();
    let sHora = frmModificarCita.txtHora.value.trim();
    let sDniCliente  = frmModificarCita.txtDNICliente.value.trim();
    let sDniEmpleado = frmModificarCita.txtDNI.value.trim();
    let sDescripcion = frmModificarCita.txtDescripcion.value.trim();

    if(isNaN(iId) || sFecha == "" || sHora == "" || sDniCliente == "" || sDniEmpleado == "" || sDescripcion == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
            let oCliente = oUPOHOME.buscarCliente(sDniCliente);
            let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
            if(oCliente != null){
                if(oEmpleado != null){
                    let sMensaje = oUPOHOME.modificarCita(iId, sDniCliente, sDniEmpleado, sFecha, sHora, sDescripcion);

                    alert(sMensaje);
                    if(sMensaje == "Cita modificada correctamente."){
                        ocultarFormularios();
                    }
                    
                }else{
                    alert("No existe el empleado.");
                }
            }else{
                alert("No existe el cliente");
            }
            
        
        
    }
} 
function borrarCita() {
    let sId = frmEliminarCita.txtID.value.trim();

    if(sId == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
        let sMensaje = oUPOHOME.borrarCita(sId);

        alert(sMensaje);
        if(sMensaje == "Cita eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//EMPLEADO
function contratarEmpleado(){
    // Recoger valores del formulario
    let sNombre = frmcontratarEmpleado.txtNombre.value.trim();
    let sApellidos = frmcontratarEmpleado.txtApellidos.value.trim();
    let sDNI = frmcontratarEmpleado.txtDNI.value.trim();
    let iTelf = parseInt(frmcontratarEmpleado.txtTelefono.value);
    let sDomicilio = frmcontratarEmpleado.txtDomicilio.value.trim();
    let fSueldo = parseFloat(frmcontratarEmpleado.txtSueldo.value);

    if(sNombre == "" || sApellidos == "" || sDNI == "" || isNaN(iTelf) || sDomicilio == "" || isNaN(fSueldo)){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        // Creamos el objeto Cliente
        let oEmpleado = new Empleado(sNombre, sApellidos, sDNI, iTelf, fSueldo,sDomicilio);

        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.altaEmpleado(oEmpleado);

        alert(sMensaje);

        ocultarFormularios();   
    }
}
function cargarEmpleado() {
    //Comprobamos si existe
    let sDni = frmCargarEmpleado.txtDNI.value.trim();
    let oEmpleado = oUPOHOME.buscarEmpleado(sDni);
    if(oEmpleado == null){
        alert("No se encuentran datos del Empleado.");
    }else{
        document.querySelector("#modificarEmpleado").style.display = "block";
        frmModificarEmpleado.txtNombre.value = oEmpleado.nombre;
        frmModificarEmpleado.txtApellidos.value = oEmpleado.apellidos;
        frmModificarEmpleado.txtDNI.value = sDni;
        frmModificarEmpleado.txtTelefono.value = oEmpleado.telefono;
        frmModificarEmpleado.txtDomicilio.value = oEmpleado.domicilio;
        frmModificarEmpleado.txtSueldo.value = oEmpleado.salario;
    }


} 
function modificarEmpleado() {
    let sNombre = frmModificarEmpleado.txtNombre.value.trim();
    let sApellidos = frmModificarEmpleado.txtApellidos.value.trim();
    let sDNI = frmModificarEmpleado.txtDNI.value.trim();
    let iTelf = parseInt(frmModificarEmpleado.txtTelefono.value);
    let sDomicilio = frmModificarEmpleado.txtDomicilio.value.trim();
    let fSueldo = parseFloat(frmModificarEmpleado.txtSueldo.value);

    if(sNombre == "" || sApellidos == "" || sDNI == "" || isNaN(iTelf) || sDomicilio == "" || isNaN(fSueldo) ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
        
    }else{
        let sMensaje = oUPOHOME.modificarEmpleado(sNombre, sApellidos, sDNI, iTelf, fSueldo, sDomicilio);

        alert(sMensaje);
        if(sMensaje == "Empleado modificado correctamente."){ 
            ocultarFormularios();
        }
        
    }
} 
function borrarEmpleado () {
    let sDni = frmDespedirEmpleado.txtDNI.value.trim();

    if(sDni == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
        let sMensaje = oUPOHOME.borrarEmpleado(sDni);

        alert(sMensaje);
        if(sMensaje == "Empleado modificado correctamente."){
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//LIMPIEZA
function asignarLimpieza() {
    let iId = parseInt(frmAsignarLimpieza.txtId.value);
    let sFecha = frmAsignarLimpieza.fecha.value.trim();
    let sHora = frmAsignarLimpieza.txtHora.value.trim();
    let sDniEmpleado = frmAsignarLimpieza.txtDNI.value.trim();
    let idVivienda = frmAsignarLimpieza.txtIDVivienda.value.trim();
    let bFinalizado = frmAsignarLimpieza.chkFinalizado.checked;
    
    if(isNaN(iId) || sFecha == "" || sHora == "" || sDniEmpleado == "" || idVivienda == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
            let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
            let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
            if(oVivienda != null){
                if(oEmpleado != null){
                    let oLimpieza = new Limpieza(iId, sDniEmpleado, idVivienda, sFecha, sHora, bFinalizado);
                    let sMensaje = oUPOHOME.añadirLimpieza(oLimpieza);
    
                    alert(sMensaje);
                    if(sMensaje == "Limpieza asignada con exito"){
                        ocultarFormularios();   
                    }    
                   
                }else{
                    alert("No existe el empleado.");
                }
            }else{
                alert("No existe la vivienda");
            }
            
        
        
    }
}
function cargarLimpieza() {
    let iIdLimpieza = parseInt(frmCargarLimpieza.txtID.value.trim());

    let oLimpieza = oUPOHOME.buscarLimpieza(iIdLimpieza);
    if(oLimpieza == null){
        alert("No se encuentran datos de la limpieza.");
    }else{
        document.querySelector("#modificarLimpieza").style.display = "block";
        frmModificarLimpieza.txtId.value = iIdLimpieza;
        frmModificarLimpieza.fecha.value = oLimpieza.fecha;
        frmModificarLimpieza.txtHora.value = oLimpieza.hora;
        frmModificarLimpieza.txtDNI.value = oLimpieza.idEmpleado;
        frmModificarLimpieza.txtIDVivienda.value = oLimpieza.idVivienda
        frmModificarLimpieza.chkFinalizado.checked = oLimpieza.finalizado;
    }   


}
function modificarLimpieza() {
    let iId = parseInt(frmModificarLimpieza.txtId.value);
    let sFecha = frmModificarLimpieza.fecha.value.trim();
    let sHora = frmModificarLimpieza.txtHora.value.trim();
    let sDniEmpleado = frmModificarLimpieza.txtDNI.value.trim();
    let idVivienda = frmModificarLimpieza.txtIDVivienda.value.trim();
    let bFinalizado = frmModificarLimpieza.chkFinalizado.checked;

    if(isNaN(iId) || sFecha == "" || sHora == "" || sDniEmpleado == "" || idVivienda == "" ){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
            let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
            let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
            if(oVivienda != null){
                if(oEmpleado != null){
                    let sMensaje = oUPOHOME.modificarLimpieza(iId, sDniEmpleado, idVivienda, sFecha, sHora, bFinalizado);

                    alert(sMensaje);
                    if(sMensaje == "Limpieza modificada correctamente."){
                        ocultarFormularios();
                    }
                    
                }else{
                    alert("No existe el empleado.");
                }
            }else{
                alert("No existe la vivienda");
            }
            
        
        
    }
}
function borrarLimpieza() {
    let sId = frmEliminarLimpieza.txtID.value.trim();

    if(sId == ""){
        alert("Debes rellenar todos los datos y debe estar correctamente");
    }else{
        
        let sMensaje = oUPOHOME.borrarLimpieza(sId);

        alert(sMensaje);
        if(sMensaje == "Limpieza eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }
}
