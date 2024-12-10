//Para abrir nueva venta
if (window.innerWidth > 575) {
    // Abre una nueva ventana con dimensiones 575x575 y carga el contenido de la página actual
    const nuevaVentana = window.open("", "_blank", "width=425,height=700");

    if (nuevaVentana) {
        // Inserta el contenido de la página actual en la nueva ventana
        nuevaVentana.document.write(document.documentElement.outerHTML);
        nuevaVentana.document.close(); // Finaliza la escritura para que el contenido se renderice
    } else {
        console.warn("No se pudo abrir la nueva ventana. Verifica los bloqueadores de ventanas emergentes.");
    }
}

 // Fecha objetivo
 const fechaObjetivo = new Date("2025-01-11T16:30:00");

 // Actualizar cuenta regresiva cada segundo
 setInterval(() => {
     const ahora = new Date();
     const diferencia = fechaObjetivo - ahora;

     if (diferencia > 0) {
         // Calcular días, horas, minutos y segundos restantes
         const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
         const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
         const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

         // Actualizar elementos en el DOM
         document.getElementById("dias").textContent = dias;
         document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
         document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
     } else {
         // Mostrar un mensaje cuando el tiempo se acabe
         document.getElementById("countdown").innerHTML = `
             <div class="text-center text-white">
                 <h1>¡La boda ha comenzado!</h1>
             </div>`;
     }
 }, 1000);