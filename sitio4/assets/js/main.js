let personas = [];
let indexEdit = -1;

class Persona {
    nombre = "";
    apellido = "";
    email = "";

    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    mostrar() {
        return `Persona: ${this.nombre} ${this.apellido}, con email: ${this.email}`;
    }
}

function loadData() {
    const persona1 = new Persona("Pedro", "Suarez", "pedro.suarez@inacapmail.cl");
    personas.push(persona1);
}

function crear() {
    const nombre = document.getElementById("nombre").value;
    const apelido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;

    if (!nombre || !apelido || !email) {
        alert('Por favor ingresa todos los campos.');
        return;
    }

    personas.push(new Persona(nombre, apelido, email));

    // Limpiar los campos
    limpiarCampos();
    // renderizar la tabla
    renderTable();
}

function limpiarCampos() {
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("email").value = '';
}

function editar(index) {
    indexEdit = index;
    const persona = personas[index];

    limpiarCampos();

    document.getElementById('nombre').value = persona.nombre;
    document.getElementById('apellido').value = persona.apellido;
    document.getElementById('email').value = persona.email;
}

function modificar(index) {
    const nombre = document.getElementById("nombre").value;
    const apelido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;

    personas[index].nombre = nombre;
    personas[index].apelido = apelido;
    personas[index].email = email;

    limpiarCampos();
    renderTable();
    indexEdit = -1;
}

function guardar() {
    if (indexEdit === -1) {
        crear();
    } else if (indexEdit !== -1) {
        modificar(indexEdit);
    }    
}

function eliminar(index) {
    const persona = personas[index];
    if(confirm(`Esta apunto de eliminar a '${persona.email}', esta seguro?`)) {
        personas.splice(index, 1);
        renderTable();
        alert('La persona fue eliminada 🫣');
    }
}

function renderTable() {
    const tbody = document.getElementById('tabla-body');
    tbody.innerHTML = '';

    if (personas.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty-msg">No hay registros.</td></tr>';
        return;
    }

    personas.forEach(function(item, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.email}</td>
            <td class="acciones">
                <button onclick="editar(${index})">Editar</button>
                <button class="eliminar" onclick="eliminar(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById('guardar').addEventListener('click', guardar);

// loadData();
renderTable();