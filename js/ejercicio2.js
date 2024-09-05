// JavaScript source code

var productos = [
    { nombre: "Papel", precio: 1.90, cantidad:2},
    { nombre: "Lapiz", precio: 0.60, cantidad:1},
    { nombre: "Libreta", precio: 2.90, cantidad: 4},
    { nombre: "Borrador", precio: 0.25, cantidad: 5},
    { nombre: "Lapicero", precio: 0.50, cantidad: 3 },
    { nombre: "Pluma", precio: 1.50, cantidad: 2 },
    { nombre: "Marcador", precio: 0.90, cantidad: 2 },
]

for (var i = 0; i < productos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + productos[i].nombre + "</td>";
    html += "       <td>" + productos[i].precio + "</td>";
    html += "       <td>" + productos[i].cantidad + "</td>";
    html += "<tr>";

    document.getElementById("tbodyProductos").innerHTML += html;

}

