
const Bebida = require('./Bebidas')

class Refresco extends Bebida{
    
    constructor(cantidad,azucar){
        super(cantidad)
        this._azucar = azucar
    }

}

const RedCola = new Refresco(355,100)
const RedColaM = new Refresco(600,300)

console.log('RedCola', RedCola)
console.log('RedColaM', RedColaM)