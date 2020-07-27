

class Construccion {

    constructor(numPuertas, numVentanas, numPisos,direccion,altura,largoTerreno, anchoTerreno){
        this._numPuertas = numPuertas
        this._numVentanas = numVentanas
        this._numPisos = numPisos
        this._direccion = direccion
        this._altura = altura
        this._largoTerreno = largoTerreno
        this._anchoTerreno = anchoTerreno
    }

    getMetrosCuadrados (){
        return `Los metros cuadrados del terreno son: ${this._largoTerreno * this._anchoTerreno}`
    }

    getDireccion(){
        return `La direecion es: ${this._direccion}`
    }

    setDireccion(newDirection){
        this._direccion = newDirection
        return `La direccion modificada es: ${this._direccion}`
    }


}


module.exports = Construccion
