//
// EVENTOS BOTONES MENU
//

//CLIENTE

document.getElementById("btnMenuDarAlta").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#altaCliente").style.display = "block";
}, false);

document.getElementById("btnMenuModCliente").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarCliente").style.display = "block";
}, false);

document.getElementById("btnMenuDarBaja").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#bajaCliente").style.display = "block";
}, false);


//ALQUILER

document.getElementById("btnMenuAlquilar").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#alquilar").style.display = "block";
}, false);

document.getElementById("btnMenuModAlquier").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarAlquiler").style.display = "block";
}, false);

document.getElementById("btnMenuElimiarAlquiler").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarAlquiler").style.display = "block";
}, false);


//VIVIENDA

document.getElementById("btnMenuAgregarVivienda").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#agregarVivienda").style.display = "block";
}, false);

document.getElementById("btnMenuModVivienda").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarVivienda").style.display = "block";
}, false);

document.getElementById("btnMenuEliminarVivienda").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarVivienda").style.display = "block";
}, false);


//CITAS

document.getElementById("btnMenuCrearCita").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#asignarCita").style.display = "block";
}, false);

document.getElementById("btnMenuModCita").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarCita").style.display = "block";
}, false);

document.getElementById("btnMenuEliminarCita").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarCita").style.display = "block";
}, false);


//EMPLEADOS

document.getElementById("btnMenuContratarEmpleado").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#contratarEmpleado").style.display = "block";
}, false);

document.getElementById("btnMenuModEmpleado").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarEmpleado").style.display = "block";
}, false);

document.getElementById("btnMenuDespedirEmpleado").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#despedirEmpleado").style.display = "block";
}, false);


//LIMPIEZA

document.getElementById("btnMenuAsignarLimpieza").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#asignarLimpieza").style.display = "block";
}, false);

document.getElementById("btnMenuModLimpieza").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarLimpieza").style.display = "block";
}, false);

document.getElementById("btnMenuEliminarLimpieza").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarLimpieza").style.display = "block";
}, false);


//BOTONES MODIFICAR
//CITAS

frmCargarCita.btnCargarCita.addEventListener("click", function() {
    let idCita = frmCargarCita.txtID.value.trim();
    document.querySelector("#modificarCita").style.display = "block";
    frmModificarCita.txtId.value = idCita;
}, false);


//LIMPIEZA

frmCargarLimpieza.btnCargarLimpieza.addEventListener("click", function() {
    let idLimpieza = frmCargarLimpieza.txtID.value.trim();
    document.querySelector("#modificarLimpieza").style.display = "block";
    frmModificarLimpieza.txtId.value = idLimpieza;
}, false);



//funcion que oculta todos los formularios
function ocultarFormularios() {
    let arrayDivsFormularios = document.querySelectorAll(".divFormulario");
    arrayDivsFormularios.forEach(div => {
        div.style.display = "none";
    });
}