

class Mascota {

    constructor(nombre,edad,color,raza){
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.raza = raza
    }

    comer(comida){
        // "La mascota" + this.nombre + " esta comiendo " + comida
        return `La mascota ${this.nombre} esta comiendo ${comida}` 
        // La interpolacion  puede meter variables dentro del string
    }


}

module.exports = Mascota //  Esto significa que la clase mascota es
// publica para otros archivos








