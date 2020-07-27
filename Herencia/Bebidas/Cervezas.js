
const Bebida = require('./Bebidas')

class Cerveza extends Bebida{

    constructor(cantidad, alcohol){
        super(cantidad)
        this._alcohol = alcohol
    }

}

const Corona = new Cerveza(355, 40)
const Superior = new Cerveza(500,40)
console.log("Corona", Corona)
console.log('Superior', Superior)