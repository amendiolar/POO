
class Persona {

    constructor (name, birthday, sex, weight, height){
        this._name = name
        this._birthday = birthday
        this._sex = sex
        this._weight = weight
        this._height = height
    }

    calculeIMC (weight, height){
        return (weight / Math.pow(height, 2))
    }



}


var Persona1 = new Persona("Carlos Osorio Cervantes", "01/06/1985", "Masculino", 83, 1.75)
console.log(Persona1.calculeIMC(this._weight, this._height))


