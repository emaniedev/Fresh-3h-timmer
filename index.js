var contadorElement = document.getElementById("contador");

// Obtiene la hora actual
var horaActual = new Date();
var minutosActuales = horaActual.getMinutes();
var segundosActuales = horaActual.getSeconds();

// Calcula el tiempo restante hasta la próxima hora múltiplo de 3
var minutosRestantes = 60 - minutosActuales;
var segundosRestantes = 60 - segundosActuales;
var tiempoRestante = (minutosRestantes * 60 + segundosRestantes) % (3 * 60);

// Calcula la hora objetivo
var horaObjetivo = new Date();
horaObjetivo.setHours(horaObjetivo.getHours() + Math.floor(tiempoRestante / 3600));
horaObjetivo.setMinutes(horaObjetivo.getMinutes() + Math.floor((tiempoRestante % 3600) / 60));
horaObjetivo.setSeconds(horaObjetivo.getSeconds() + (tiempoRestante % 60));

// Función para formatear una fecha y hora
function formatearFechaYHora(fecha) {
        var fechaFormateada = fecha.toLocaleDateString();
        var horaFormateada = fecha.toLocaleTimeString();
        return fechaFormateada + ' ' + horaFormateada;
}

// Función para actualizar el contador
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

// Actualiza el contador inicial
actualizarContador();

// Inicia la cuenta regresiva
var intervalo = setInterval(function () {
        tiempoRestante--;

        if (tiempoRestante < 0) {
                clearInterval(intervalo);
                contadorElement.textContent = "¡Tiempo cumplido!";
        } else {
                actualizarContador();
        }
}, 1000);