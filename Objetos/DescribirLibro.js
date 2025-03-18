const libro1 = {
    titulo: "Aristóteles y Dante descubren los secretos del universo",
    autor: "Benjamin Alire Sáenz",
    anio: 2012,
    estado: "disponible",
    capitulos: [],

    describirLibro: function() {
        console.log("Libro titulado: " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ". Estado: " + this.estado);
        console.log(""); 
    },

    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
    },

    eliminarCapitulo: function(capitulo) {
        for (let i = 0; i < this.capitulos.length; i++) {
            if (this.capitulos[i] === capitulo) {
                for (let j = i; j < this.capitulos.length - 1; j++) {
                    this.capitulos[j] = this.capitulos[j + 1]; 
                }
                this.capitulos.pop(); 
                break; 
            }
        }
    },

    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("Este libro no tiene capítulos registrados.");
        } else {
            console.log("Capítulos del libro: " + this.titulo);
            for (let i = 0; i < this.capitulos.length; i++) {
                console.log(this.capitulos[i]);
            }
        }
        console.log("");
    }
};

//otro libro
const libro2 = {
    titulo: "Mentes poderosas",
    autor: "Alexandra Bracken",
    anio: 2012,
    estado: "prestado",
    capitulos: [],

    describirLibro: function() {
        console.log("Libro titulado: " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ". Estado: " + this.estado);
        console.log("");
    },

    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
    },

    eliminarCapitulo: function(capitulo) {
        for (let i = 0; i < this.capitulos.length; i++) {
            if (this.capitulos[i] === capitulo) {
                for (let j = i; j < this.capitulos.length - 1; j++) {
                    this.capitulos[j] = this.capitulos[j + 1]; 
                }
                this.capitulos.pop(); 
                break; 
            }
        }
    },

    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("Este libro no tiene capítulos registrados.");
        } else {
            console.log("Capítulos del libro: "+ this.titulo);
            for (let i = 0; i < this.capitulos.length; i++) {
                console.log(this.capitulos[i]);
            }
        }
        console.log("");
    }
};

//con el libro 1
libro1.describirLibro();
libro1.agregarCapitulo("Las reglas del verano");
libro1.agregarCapitulo("El secreto de Dante");
libro1.agregarCapitulo("La lluvia, los perros y las verdades que duelen");
libro1.mostrarCapitulos();
libro1.eliminarCapitulo("El secreto de Dante");
libro1.mostrarCapitulos();

//con el libro 2
libro2.describirLibro();
libro2.agregarCapitulo("Los colores del miedo");
libro2.agregarCapitulo("Escape en la noche");
libro2.mostrarCapitulos();