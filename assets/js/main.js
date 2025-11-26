let listaDeTareas = [];
let continuar;

do {
    let tarea = prompt("Ingresa una tarea:");

    if (tarea && tarea.trim() !== "") {
        listaDeTareas.push(tarea);
    } else {
        alert("Debes ingresar una tarea válida.");
    }

    continuar = confirm("¿Quieres agregar otra tarea?");
} while (continuar);

console.log("--- Lista de Tareas ---");
listaDeTareas.forEach((tarea, i) => {
    console.log(`${i + 1}. ${tarea}`);
});