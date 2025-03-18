
let frutas = ["naranja", "fresa", "sandia", "manzana", "fresa", "sandia", "fresa", "naranja", "naranja", "fresa"];

const contadorFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++; 
    } else {
        contadorFrutas[fruta] = 1; 
    }
}

console.log("Conteo de frutas con for:", contadorFrutas);
