

const Cuadrilatero = require('./Cuadrilatero')

class Square extends Cuadrilatero{

    constructor(side){
        super(side,side)
    }

    setSide(newSide){
        this.setWidth(newSide)
        this.setWidth(newSide)
    }

    getSide(){
        return this.width
        // return this.heigth
    }

}

const square1 = new Square(10,12)
console.log(square1.calculateArea())
const square2 = new Square(15)
console.log(square2.calculateArea())
