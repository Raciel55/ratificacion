/* =========================================
   ELEMENTOS
========================================= */

const seccionDatos = document.getElementById("seccionDatos");
const seccionFormato = document.getElementById("seccionFormato");

const btnSiguiente = document.getElementById("btnSiguiente");
const btnImprimir = document.getElementById("btnImprimir");

const btnNavDatos = document.getElementById("btnNavDatos");
const btnNavFormato = document.getElementById("btnNavFormato");

const navbar = document.getElementById("navbar");


/* =========================================
   INPUTS
========================================= */

const nombreCesionario = document.getElementById("nombreCesionario");
const domicilio = document.getElementById("domicilio");
const concesion = document.getElementById("concesion");
const claveElectorCesionario = document.getElementById(
    "claveElectorCesionario"
);

const fechaCesion = document.getElementById("fechaCesion");

const nombreCedente = document.getElementById("nombreCedente");

const claveElectorCedente = document.getElementById(
    "claveElectorCedente"
);

const fechaFormato = document.getElementById("fechaFormato");

/* =========================================
   FECHA ACTUAL COMO VALOR PREDETERMINADO
========================================= */

const hoy = new Date();

const anio = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, "0");
const dia = String(hoy.getDate()).padStart(2, "0");

fechaFormato.value = `${anio}-${mes}-${dia}`;


/* =========================================
   SALIDAS
========================================= */

const salidaFechaFormato = document.getElementById(
    "salidaFechaFormato"
);

const salidaNombreCesionario = document.getElementById(
    "salidaNombreCesionario"
);

const salidaDomicilio = document.getElementById(
    "salidaDomicilio"
);

const salidaConcesion = document.getElementById(
    "salidaConcesion"
);

const salidaClaveCesionario = document.getElementById(
    "salidaClaveCesionario"
);

const salidaFechaCesion = document.getElementById(
    "salidaFechaCesion"
);

const salidaNombreCedente = document.getElementById(
    "salidaNombreCedente"
);

const salidaClaveCedente = document.getElementById(
    "salidaClaveCedente"
);

const salidaConcesion2 = document.getElementById(
    "salidaConcesion2"
);

const salidaConcesion3 = document.getElementById(
    "salidaConcesion3"
);


/* =========================================
   MESES
========================================= */

const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
];


/* =========================================
   CONVERTIR FECHA
   YYYY-MM-DD
   A:
   18 DE AGOSTO DEL 2026
========================================= */

function formatearFecha(fecha) {

    if (!fecha) {
        return "";
    }

    const partes = fecha.split("-");

    const anio = partes[0];
    const mes = parseInt(partes[1], 10);
    const dia = parseInt(partes[2], 10);

    return `${dia} DE ${meses[mes - 1]} DEL ${anio}`;
}


/* =========================================
   CONVERTIR INPUT A MAYÚSCULAS
========================================= */

function limpiarTexto(texto) {

    return texto
        .trim()
        .toUpperCase();
}


/* =========================================
   LLENAR EL DOCUMENTO
========================================= */

function llenarDocumento() {

    /* -------------------------
       DATOS
    ------------------------- */

    const nombre = limpiarTexto(nombreCesionario.value);
    const domicilioValor = limpiarTexto(domicilio.value);
    const concesionValor = limpiarTexto(concesion.value);

    const claveCesionario = limpiarTexto(
        claveElectorCesionario.value
    );

    const fechaCesionValor = formatearFecha(
        fechaCesion.value
    );

    const cedente = limpiarTexto(
        nombreCedente.value
    );

    const claveCedente = limpiarTexto(
        claveElectorCedente.value
    );

    const fechaFormatoValor = formatearFecha(
        fechaFormato.value
    );


    /* -------------------------
       COLOCAR DATOS
    ------------------------- */

    salidaNombreCesionario.textContent = nombre;

    salidaDomicilio.textContent = domicilioValor;

    salidaConcesion.textContent = concesionValor;

    salidaClaveCesionario.textContent =
        claveCesionario;

    salidaFechaCesion.textContent =
        fechaCesionValor;

    salidaNombreCedente.textContent =
        cedente;

    salidaClaveCedente.textContent =
        claveCedente;

    salidaFechaFormato.textContent =
        fechaFormatoValor;


    /* CONCESIÓN REPETIDA */

    salidaConcesion2.textContent =
        concesionValor;

    salidaConcesion3.textContent =
        concesionValor;
}


/* =========================================
   MOSTRAR FORMATO
========================================= */

btnSiguiente.addEventListener("click", function () {

    /* Validar campos */

    const campos = [
        nombreCesionario,
        domicilio,
        concesion,
        claveElectorCesionario,
        fechaCesion,
        nombreCedente,
        claveElectorCedente,
        fechaFormato
    ];

    let camposValidos = true;


    campos.forEach(function (campo) {

        if (!campo.value.trim()) {

            campo.classList.add("is-invalid");

            camposValidos = false;

        } else {

            campo.classList.remove("is-invalid");

        }

    });


    if (!camposValidos) {

        alert("Por favor completa todos los campos.");

        return;
    }


    /* Generar documento */

    llenarDocumento();


    /* Cambiar sección */

    seccionDatos.classList.add("d-none");

    seccionFormato.classList.remove("d-none");


    /* Activar botón Formato */

    btnNavFormato.disabled = false;

    btnNavDatos.disabled = false;

});


/* =========================================
   NAVBAR - DATOS
========================================= */

btnNavDatos.addEventListener("click", function () {

    seccionDatos.classList.remove("d-none");

    seccionFormato.classList.add("d-none");

});


/* =========================================
   NAVBAR - FORMATO
========================================= */

btnNavFormato.addEventListener("click", function () {

    seccionDatos.classList.add("d-none");

    seccionFormato.classList.remove("d-none");

});


/* =========================================
   IMPRIMIR
========================================= */

btnImprimir.addEventListener("click", function () {

    /*
        Ocultamos inmediatamente
        navbar y botón
    */

    navbar.style.display = "none";

    btnImprimir.style.display = "none";


    /*
        Abrir ventana de impresión
    */

    window.print();

    /*
        Hacemos visibles nuevamente las secciones
    */

    navbar.style.display = "block";

    btnImprimir.style.display = "block";



});