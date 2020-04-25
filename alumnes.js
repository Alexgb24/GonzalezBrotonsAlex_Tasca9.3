  
class Alumne {
    constructor(DNI, nombre, apellidos, edad, asignaturas, notas) {
        this.DNI = DNI;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.asignaturas = asignaturas;
        this.notas = notas;
    }

    ver() {
        console.log(`DNI: ${this.DNI}`);
        console.log(`nombre: ${this.nombre}`);
        console.log(`apellidos: ${this.apellidos}`);
        console.log(`edad: ${this.edad}`);
        console.log(`asignaturas: ${this.asignaturas}`);
        console.log(`notas: ${this.notas}`);
        }
}
module.exports = Alumne;