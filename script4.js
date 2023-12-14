document.write("<h1>Ejercicio 4</h1>");
let final = parseInt(prompt("Cuantos elementos tiene el arreglo?"));
var e = [];
for (let i=0; i<=final-1;i++) {
    var element = prompt ("Ingresa el elemento " + i);
    e[i]=element;
}
for(let f=0; f<=final-1; f++) {
    console.log(e[f]);
}