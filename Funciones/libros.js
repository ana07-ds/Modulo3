let librosLeidos = [];

function agregarLibro(titulo) {
        librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("No he leído ningún libro");
    } 
    else {
        console.log("Libros que he leído:");
        for (let i = 0; i < librosLeidos.length; i++) {
        console.log((i + 1) + ". " + librosLeidos[i]);
        }
    }
}

agregarLibro("Yo antes de ti");
agregarLibro("Divergente");

mostrarLibrosLeidos();