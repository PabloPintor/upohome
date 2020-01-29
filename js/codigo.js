var oUPOHOME = new UPOHOME();

//ADD_EVENT_LISTENER
//Cliente
frmAltaCliente.btnAceptarAltaCliente.addEventListener("click", altaCliente,false);
frmCargarCliente.btnCargarCliente.addEventListener("click", cargarCliente, false);
frmModificarCliente.btnAceptarModificarCliente.addEventListener("click", modificarCliente, false);
frmBajaCliente.btnAceptarBajaCliente.addEventListener("click", borrarCliente, false);
//Alquiler

//Vivienda
frmAgregarVivienda.btnAceptarVivienda.addEventListener("click", agregarVivienda, false);
frmCargarVivienda.btnCargarVivienda.addEventListener("click", cargarVivienda, false);
frmModificarVivienda.btnModificarVivienda.addEventListener("click", modificarVivienda, false);
frmEliminarVivienda.btnEliminarVivienda.addEventListener("click", borrarVivienda, false);
//Citas

//Empleados
frmcontratarEmpleado.btnAceptarContratarEmpleado.addEventListener("click", contratarEmpleado, false);
frmCargarEmpleado.btnCargarEmpleado.addEventListener("click", cargarEmpleado, false);
frmModificarEmpleado.btnAceptarModificarEmpleado.addEventListener("click", modificarEmpleado, false);
frmDespedirEmpleado.btnAceptarBajaEmpleado.addEventListener("click", borrarEmpleado, false);
//Limpieza
//-----------------------------------------------------------------------------------------------//
//Datos de prueba
    oUPOHOME.altaCliente(new Cliente("Manuel Esteban", "Rodríguez Gómez", "1", "608995074", "Larra 29", false));
    oUPOHOME.altaCliente(new Cliente("Pablo", "Pintor Álvarez", "2", "666888111", "Roble 32", false));
    oUPOHOME.altaCliente(new Cliente("Juan", "Pérez Varela", "3", "111222333", "Arenal 14", false));

    oUPOHOME.agregarVivienda(new Vivienda("1", "Larra", "25000", true, "", "4", "aaa bbb ccc", "Roble", false, []));
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
        document.querySelector("form[name='frmAltaCliente']").reset();

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
            document.querySelector("form[name='frmCargarCliente']").reset();
            document.querySelector("form[name='frmModificarCliente']").reset();

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
            document.querySelector("form[name='frmBajaCliente']").reset();
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//ALQUIERA

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
            document.querySelector("form[name='frmAgregarVivienda']").reset();
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
            document.querySelector("form[name='frmCargarVivienda']").reset();
            document.querySelector("form[name='frmModificarVivienda']").reset();

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
            document.querySelector("form[name='frmEliminarAlquiler']").reset();
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//CITAS

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
        document.querySelector("form[name='frmcontratarEmpleado']").reset();

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
            document.querySelector("form[name='frmCargarEmpleado']").reset();
            document.querySelector("form[name='frmModificarEmpleado']").reset();

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
            document.querySelector("form[name='frmDespedirEmpleado']").reset();
            ocultarFormularios();   
        }
        
    }
}
//-----------------------------------------------------------------------------------------------//
//LIMPIEZA

