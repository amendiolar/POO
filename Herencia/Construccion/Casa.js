
const Construccion = require('./Construccion')

class Casa extends Construccion{

    constructor(numPuertas, numVentanas, numPisos,direccion,altura,largoTerreno,anchoTerreno){
        super(numPuertas, numVentanas, numPisos,direccion,altura,largoTerreno, anchoTerreno)
    }
}


const Casa1 =  new Casa(4,4,2,"Alvaro Obregon 10, Col Roma Centro", 2,14,7)                                                                                                                                                                                                                                                                                                                                                                                                                       

console.log("Casa1",Casa1)
console.log(Casa1.getMetrosCuadrados())
console.log(Casa1.setDireccion("Tonala 128, Col Roma Centro"))
console.log("Casa1",Casa1)

