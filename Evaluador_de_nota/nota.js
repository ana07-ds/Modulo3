
let nota = 74;

if (nota>0){
    if(nota>=90){
        console.log("Excelente")
    }
    else if (75<=nota){
        console.log("Bien")
    }
    else if (60<=nota){
        console.log("Suficiente")
    }
    else if(nota<60){
        console.log("Nota no aprobatoria")
    }
}
else {
    console.log("Nota no valida")
}