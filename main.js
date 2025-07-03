let turnosDisponibles = [
    "Lunes 9:00 AM",
    "Lunes 10:00 AM",
    "Martes 11:00 AM",
    "Miércoles 3:00 PM",
    "Jueves 1:00 PM"
];

const turnosReservados = [];

let continuar = true;

function mostrarTurnos() {
    let mensaje = "Turnos disponibles:\n";
    turnosDisponibles.forEach((turno, index) => {
        mensaje += `${index + 1}. ${turno}\n`;
    });
    alert(mensaje);
}

function reservarTurno() {
    const nombre = prompt("Ingrese su nombre:");
    if (!nombre) {
        alert("Nombre inválido.");
        return;
    }

    mostrarTurnos();
    const opcion = prompt("Seleccione el número del turno que desea reservar:");
    const indice = parseInt(opcion) - 1;

    if (indice >= 0 && indice < turnosDisponibles.length) {
        const turnoElegido = turnosDisponibles.splice(indice, 1)[0];
        turnosReservados.push({ nombre, turno: turnoElegido });

        alert(`Turno reservado para ${nombre} el ${turnoElegido}`);
    } else {
        alert("Selección inválida.");
    }
}

function iniciarSimulador() {
    alert("Bienvenido al simulador de turnos médicos.");

    while (continuar && turnosDisponibles.length > 0) {
        reservarTurno();
        continuar = confirm("¿Desea reservar otro turno?");
    }

    if (turnosDisponibles.length === 0) {
        alert("No hay más turnos disponibles.");
    }

    console.log("Turnos reservados:");
    console.table(turnosReservados);

    alert("Gracias por usar el sistema. Revisa la consola para ver los turnos reservados.");
}

iniciarSimulador();
