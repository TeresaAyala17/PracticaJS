//Array de objetos
var contactos = [
    { nombre: "Luis", telefono: "8765-4321" },
    { nombre: "Carmen", telefono: "1234-5678" }
];

for (var i = 0; i < contactos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + contactos[i].nombre + "</td>";
    html += "       <td>" + contactos[i].telefono + "</td>";
    html += "<tr>";

    document.getElementById("tbodyContactos").innerHTML += html;

}