/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function guardar() {

    var boton = document.getElementById('btnenviar');

    var equipo = {}; //declarando un objeto
    var jugadores = [];
    equipo.jugadores = jugadores;
    //console.log(nuncamis +" es la camisera");

    //console.log('hola estoy enviando a la consola'); para ver desde el controlador

    var dorsal = document.getElementById("txtDorsal").value;
    //console.log(nuncamis +" es la camisera");
    var nombre = document.getElementById("txtNombre").value;
    var edad = document.getElementById("txtEdad").value;
    //document.getElementById("txtDorsal").value = "5";
    //document.getElementById("txtNombre").value = "Iniesta";
    //document.getElementById("txtEdad").value="30";
    var jugador = {
        "dorsal": dorsal,
        "nombre": nombre,
        "edad": edad
    };

    equipo.jugadores.push(jugador);
    var jsonString = JSON.stringify(equipo);

}