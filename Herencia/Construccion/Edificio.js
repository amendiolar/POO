
const Construccion = require('./Construccion')

class Edificio extends Construccion{

    constructor(numPuertas, numVentanas, numPisos,direccion,altura,largoTerreno,anchoTerreno){
        super(numPuertas, numVentanas, numPisos,direccion,altura,largoTerreno, anchoTerreno)
    }
}

const Edificio1 =  new Edificio(48,48,24,"Av Tamaulipas 1200 Col Hipodromo Condesa", 24,30,40)                                                                                                                                                                                                                                                                                                                                                                                                                       

console.log("Edificio1",Edificio1)
console.log(Edificio1.getMetrosCuadrados())
console.log(Edificio1.setDireccion("Tonala 128, Col Roma Centro"))
console.log("Edificio1",Edificio1)


