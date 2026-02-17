
Docente: William montes

Alumno: Jasson Ali Ramos Guandique

Tarea: Laboratorio 2



Tabla de eventos
Tipo de evento	Elemento afectado	Resumen de lo que hace
click (toggle)	Botón 'Cambiar Estado'	Alterna entre estado activo e inactivo al presionar el botón.
click (Contador)	Botón 'Haz Click'	Cuenta la cantidad de clics realizados y los muestra en pantalla.
input	Campo de texto dinámico	Muestra en tiempo real lo que el usuario escribe.
change	Selector de tema	Cambia la apariencia de la página entre modo claro y oscuro.
dblclick	Caja de desbloqueo	Activa un mensaje especial al hacer doble clic.
dragstart / dragover / drop	Elemento arrastrable y zona de destino	Permite arrastrar un elemento y soltarlo en un área específica.
wheel	Caja interactiva de zoom	Permite hacer zoom utilizando la rueda del mouse.
scroll	Área con contenido desplazable	Detecta cuando el usuario se desplaza dentro del contenido.


b. Contestar las siguientes preguntas:
¿Utilizó listeners para sus eventos o los describió como propiedades de los
elementos? Justifique su elección
Utilize event listeners mediante el método addEventListener para todos los eventos de la tarea. Esta decisión se tomó porque permite mantener una correcta separación entre el HTML y el JavaScript, mejorando la organización y claridad del código. Además, los listeners permiten asignar múltiples eventos a un mismo elemento 

Seleccione uno de sus eventos y explique por que era la mejor eleccion
El evento seleccionado es dragstart / dragover / drop (Drag & Drop). Este tipo de evento fue la mejor elección porque permite crear una interacción visual directa, donde el usuario puede arrastrar un elemento y colocarlo en una zona específica. Es una funcionalidad utilizada en aplicaciones modernas y mejora la experiencia del usuario. Como alternativa se podría haber utilizado el evento click, pero este solo detecta una acción simple y no permite la interacción dinámica que ofrece el sistema de arrastrar y soltar.
