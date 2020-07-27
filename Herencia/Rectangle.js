
const Cuadrilatero = require('./Cuadrilatero')

class Rectangle extends Cuadrilatero{

    constructor(width, heigth){
        super(width,heigth)
    }

    calculateArea(){
        this.area = this.width * this.heigth
        return `El area del rectangulo es: ${this.area}`
    }

}

const rec1 = new Rectangle(10,12)
console.log(`El area del rectangulo es ${rec1.calculateArea()}`)


