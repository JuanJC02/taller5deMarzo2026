let opcion;
let salir = false;
 
const historiaPrincipal = () => {
    console.log("\nCargando la historia historia: ");
    for (let i = 1; i <= 10; i++) {
        console.log((i * 10) + "%");
    }
    console.log("Aqui va la historia (no se especifico que tenia que ser real o si?)");
    console.log("Yo soy Juan José. \nViví quinientos años en un mundo donde los débiles mueren y los fuertes gobiernan. Durante siglos luché, traicioné, perdí y aprendí una sola verdad: en este mundo solo existen los beneficios. No hay justicia, no hay bondad… solo supervivencia. \nAl final de mi vida fui rodeado por todos mis enemigos. Justo antes de morir activé la habilidad Spring Autumn Cicada y regresé 500 años al pasado, al cuerpo de mi yo de quince años. \nAhora tengo el conocimiento de siglos. Conozco los secretos del mundo, las herencias ocultas, las futuras guerras y las oportunidades que otros aún no ven. \nLa gente habla de moral, de amistad y de honor. Para mí esas cosas solo son herramientas. \nNo existen aliados eternos ni enemigos eternos solo beneficios eternos. \nHaré lo que sea necesario: mentir, manipular, sacrificar o destruir. \nTodo con un solo objetivo. Alcanzar la vida eterna. \nY si el mundo entero se interpone en mi camino... entonces el mundo entero puede arder.\nEste soy yo, un verdadero humano.")
};
 
const historiaRapida = () => {
    console.log("\nLa historia comienza en: ");
    let progreso = 0;
    while (progreso < 100) {
        progreso += 25;
        console.log("Progreso: " + progreso + "%");
    }
    console.log("Aqui va la historia rapida");
    console.log("Nací, hablé, comí, dormí, estudié, viajé, aprendí, estudié, estudié, estudié, estudié, aprendí")
};
 
const chiste = () => {
    console.log("\nSeccion chiste ");
    const confirmar = prompt("¿Está seguro? (si/no):");
    if (confirmar === "si") {
        console.log("Mamá, mamá, en el cole me llaman despistado. — Niño, ¡que esta no es tu casa!");
    } else {
        console.log("Operación cancelada.");
    }
};
 
while (!salir) {
    console.log("\n===== MENU HISTORIA DE VIDA =====");
    console.log("1. Historia principal");
    console.log("2. Historia rapida");
    console.log("3. chiste");
    console.log("4. Salir");
 
    opcion = Number(prompt("Seleccione una opción (1-4):"));
 
    switch (opcion) {
        case 1:
            historiaPrincipal();
            break;
        case 2:
            historiaRapida();
            break;
        case 3:
            chiste();
            break;
        case 4:
            console.log("Saliendo del programa...");
            salir = true;
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
    }
}
