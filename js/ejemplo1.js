var frutas = ["Manzana","Uva","Pera","Piña","Melocoton","Uva Verde"] 


for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";

}

//object
var persona = { nombre: "Juan", telefono: "12345678" };

//Lista objetos
var contactos = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Carme", telefono: "87651234" },
];

for (var i = 0; i < contactos.length; i++) {
    document.getElementById("listaContactos").innerHTML += "<li>" + contactos[i].nombre + ":" + contactos[i].telefono + "</li>";
    console.log(contactos[i]);
}