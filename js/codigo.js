var oUPOHOME = new UPOHOME();

//addEventListener
//Cliente
frmAltaCliente.btnAceptarAltaCliente.addEventListener("click", altaCliente,false);
frmCargarCliente.btnCargarCliente.addEventListener("click", cargarCliente, false);
frmModificarCliente.btnAceptarModificarCliente.addEventListener("click", modificarCliente, false);
frmBajaCliente.btnAceptarBajaCliente.addEventListener("click", borrarCliente, false);

//-----------------------------------------------------------------------------------------------//
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