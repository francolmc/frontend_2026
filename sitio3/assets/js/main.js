function saludar() {
    const nombre = document.getElementById("nombre").value;

    // Validar que el nombre tenga un texto
    if (nombre) {
        // Esto me permite mostrar un mensaje usando las alertas del navegador
        alert(`Hola ${nombre}, bienvenido a mi portal!!!`);
    } else {
        alert("Por favor ingresar un nombre para ser saludado.");
    }
}

const botonSaludar = document.getElementById("botonSaludar");
botonSaludar.addEventListener("click", saludar);