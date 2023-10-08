var contadorElement = document.getElementById("contador");
var horaInput = document.getElementById("hora");
var minutosInput = document.getElementById("minutos");
var calcularButton = document.getElementById("calcular");

var tiempoRestante = 0;
var horaObjetivo = null;

function formatearFechaYHora(fecha) {
        var fechaFormateada = fecha.toLocaleDateString();
        var horaFormateada = fecha.toLocaleTimeString();
        return fechaFormateada + ' ' + horaFormateada;
}

function actualizarContador() {
        var horas = Math.floor(tiempoRestante / 3600);
        var minutos = Math.floor((tiempoRestante % 3600) / 60);
        var segundos = tiempoRestante % 60;

        var tiempoFormateado = horas.toString().padStart(2, "0") + ":" +
                minutos.toString().padStart(2, "0") + ":" +
                segundos.toString().padStart(2, "0");

        var horaObjetivoFormateada = formatearFechaYHora(horaObjetivo);

        contadorElement.textContent = `Hora Objetivo: ${horaObjetivoFormateada} - Tiempo Restante: ${tiempoFormateado}`;
}

function calcularHoraObjetivo() {
        var horaSeleccionada = parseInt(horaInput.value, 10);
        var minutosSeleccionados = parseInt(minutosInput.value, 10);

        if (isNaN(horaSeleccionada) || isNaN(minutosSeleccionados) ||
                horaSeleccionada < 0 || horaSeleccionada > 23 ||
                minutosSeleccionados < 0 || minutosSeleccionados > 59) {
                alert("Por favor, ingrese valores válidos para la hora y los minutos.");
                return;
        }

        var horaActual = new Date();
        horaActual.setHours(horaSeleccionada, minutosSeleccionados, 0, 0);

        horaObjetivo = horaActual;

        // Calcula el tiempo restante en segundos
        var tiempoRestanteEnSegundos = Math.floor((horaActual - new Date()) / 1000);
        tiempoRestante = Math.max(tiempoRestanteEnSegundos, 0);

        actualizarContador();
}

calcularButton.addEventListener("click", calcularHoraObjetivo);
