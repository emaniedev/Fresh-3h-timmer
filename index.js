var contadorElement = document.getElementById("contador");

// Obtiene la hora actual
var horaActual = new Date();
var horaActualEnHoras = horaActual.getHours();
var minutosActuales = horaActual.getMinutes();
var segundosActuales = horaActual.getSeconds();

// Calcula la próxima hora múltiplo de 3
var horaObjetivoEnHoras = (Math.floor(horaActualEnHoras / 3) + 1) * 3;

// Ajusta la hora objetivo si ya pasó la próxima hora múltiplo de 3
if (horaActualEnHoras >= horaObjetivoEnHoras) {
        horaObjetivoEnHoras += 3;
}

// Calcula el tiempo restante en segundos
var tiempoRestante = ((horaObjetivoEnHoras - horaActualEnHoras) * 3600) -
        (minutosActuales * 60) - segundosActuales;

// Calcula la hora objetivo
var horaObjetivo = new Date();
horaObjetivo.setHours(horaObjetivoEnHoras, 0, 0, 0);

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