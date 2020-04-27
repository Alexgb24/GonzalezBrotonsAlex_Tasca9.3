const fs = require('fs');
const readline = require("readline-sync");
const Alumne = require('./alumne');

var opcio = 0;

var listaAlumnos = []; 
leerAlumnos();

function cargarlista() {
    fs.writeFileSync('./alumnes.json', JSON.stringify(listaAlumnos, null, 2));
}

function eliminarAlumno() {
    let borrarDNI = readline.question("DNI del alumno a eliminar:");
    borrado = false;
    for (let alumno in listaAlumnos) {
        if (listaAlumnos[alumno].DNI == borrarDNI) {
            listaAlumnos.splice(alumno, 1);
            console.log("El alumno ha sido eliminado");
            borrado = true;
            }
        else {
            console.log('El alumno seleccionado no existe');
        }
    }
}

function crearAlumnos(añadir) {
    let alumno;
    for (indice in añadir) {
        persona = añadir[indice];
        let DNI = persona['DNI'];
        let nombre = persona['Nombre'];
        let apellidos = persona['Apellido'];
        let edad = persona['Edad'];
        let asignaturas = persona['Asignaturas'];
        let notas = persona['Notas'];
        alumno = new Alumne(DNI, nombre, apellidos, edad, asignaturas, notas);
        listaAlumnos.push(alumno);
    }
}

function leerAlumnos() {
    let AluJso = fs.readFileSync('./alumnes.json');
    let contAluJso = JSON.parse(AluJso);
    crearAlumnos(contAluJso);
}

function añadirAlumno() {
    let DNI = readline.question("DNI:");
    let nombre = readline.question("nombre:");
    let apellidos = readline.question("apellidos:");
    let edad = Number(readline.question("edad:"));
    let asignaturas = readline.question("asignaturas:");
    let notas = Number(readline.question("notas por asignatura:"));
    alumnoNuevo = new Alumne(DNI, nombre, apellidos, edad, asignaturas, notas);
    listaAlumnos.push(alumnoNuevo);
}

do {
    console.log('1. Mostrar lista de alumnos');
    console.log('2. Añadir un alumno');
    console.log('3. Borrar un alumno');
    console.log('4. Salir de la aplicacion\n');
    opcio = readline.question('Elige una opcion: ');
        switch (opcio) {
        case '1':
            console.log('\nLista de alumnos\n');
            var content = fs.readFileSync("alumnes.json");
            console.log("" + content + "\n");
            break;
        case '2':
            console.log('\nAñadir alumno\n')
            añadirAlumno();
            break;
        case '3':
            console.log('\nBorrar alumno\n');
            eliminarAlumno();
            break;
        case '4':
            console.log('\nSaliendo de la aplicación\n');
            cargarlista()
            process.exit()
            break;
        default:
            console.log('La opción elegida no es valida');
        }
    } while (opcio != 4);