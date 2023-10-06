// Obtén el elemento del contador y el botón de reset
        var contadorElement = document.getElementById("contador");
                var botonReset = document.getElementById("botonReset");

                        // Inicializa el tiempo en 3 horas
                                var tiempoRestante = 3 * 60 * 60; // 3 horas en segundos

                                        // Función para actualizar el contador
                                                function actualizarContador() {
                                                            var horas = Math.floor(tiempoRestante / 3600);
                                                                        var minutos = Math.floor((tiempoRestante % 3600) / 60);
                                                                                    var segundos = tiempoRestante % 60;

                                                                                                // Formatea el tiempo en HH:MM:SS
                                                                                                            var tiempoFormateado = horas.toString().padStart(2, "0") + ":" +
                                                                                                                                                minutos.toString().padStart(2, "0") + ":" +
                                                                                                                                                                                    segundos.toString().padStart(2, "0");

                                                                                                                                                                                                contadorElement.textContent = tiempoFormateado;
                                                                                                                                                                                                        }

                                                                                                                                                                                                                // Llama a la función para mostrar el tiempo inicial
                                                                                                                                                                                                                        actualizarContador();

                                                                                                                                                                                                                                // Cada segundo, actualiza el contador y reduce el tiempo restante
                                                                                                                                                                                                                                        var intervalo = setInterval(function() {
                                                                                                                                                                                                                                                    tiempoRestante--;
                                                                                                                                                                                                                                                                actualizarContador();

                                                                                                                                                                                                                                                                            // Si el tiempo llega a cero, detén el contador
                                                                                                                                                                                                                                                                                        if (tiempoRestante <= 0) {
                                                                                                                                                                                                                                                                                                        clearInterval(intervalo);
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                            }, 1000);

                                                                                                                                                                                                                                                                                                                                    // Agrega un event listener al botón de reset
                                                                                                                                                                                                                                                                                                                                            botonReset.addEventListener("click", function() {
                                                                                                                                                                                                                                                                                                                                                        // Reinicia el tiempo a 3 horas y actualiza el contador
                                                                                                                                                                                                                                                                                                                                                                    tiempoRestante = 3 * 60 * 60;
                                                                                                                                                                                                                                                                                                                                                                                actualizarContador();
                                                                                                                                                                                                                                                                                                                                                                                        });