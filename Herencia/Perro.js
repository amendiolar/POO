
const Mascota = require('./Mascota.js') // requiere palabra reservada de node

class Perro extends Mascota{

    constructor(nombre,edad,color,raza,tipo_orejas){
        super(nombre,edad,color,raza)// Ejecuta el constructor del padre
        this.tipo_orejas = tipo_orejas
    }

    ladra(){
        return "Gua Gua"
    }    

}


const snoopy = new Perro("Snoopy",5,"Blanco con Negro","Beagle","Orejas Caidas")
const scooby = new Perro("Scooby Doo",10,"Cafe con Negro","Gran Danes","Orejas puntiagudas")

console.log(snoopy.comer("Pollo"))


/*
class Pug extends Perro{
    constructor(nombre,edad,color,raza,tipo_orejas){
        super()
    }
}
*/





