
const Mascota = require('./Mascota.js') // requiere palabra reservada de node

class Gato extends Mascota{

    constructor(nombre,edad,color,raza,tipo_patas){
        super(nombre,edad,color,raza)// Ejecuta el constructor del padre
        this.tipo_patas = tipo_patas
    }    

    maullar(){
        return `Miau Miau`
    }

    // podemos sobre-escribir la funcionalidad de comer en gato
    comer(comida, porciones){
        return `El gato ${this.nombre} come ${porciones} porciones de ${comida}`
    }


}

const garfield = new Gato("Garfield",3,"Naranja con negro","Tragona","Gorditas")
const tom = new Gato("Tom",5,"Gris","Grisesito","Flaquitas")

console.log("tom", tom)
console.log("garfield", garfield)
console.log(tom.maullar())
console.log(garfield.comer("Lasagna",4))





