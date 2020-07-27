

class Cuenta{

    constructor(titular, saldoCuenta){
        this._titular = titular
        this._saldoCuenta = saldoCuenta
    }

    setIngresar(cantidad){
        
            if(this._saldoCuenta < 900 && (this._saldoCuenta + cantidad) < 900) {
                this._saldoCuenta = this._saldoCuenta + cantidad
                return this._titular + " ahora tiene un saldo de " + this._saldoCuenta
            } else {
                return "Lo sentimos, no puede depositar porque excederia el saldo maximo, por favor contacte a su ejecutivo"
            }
    }

    setRetirar(cantidad){
        if(this._saldoCuenta > 10 && (this._saldoCuenta - cantidad) > 10) {
            this._saldoCuenta = this._saldoCuenta - cantidad
            return this._titular + " ahora tiene un saldo de " + this._saldoCuenta
        } else {
            return "Lo sentimos, no puede retirar porque su saldo seria menor al minimo, por favor contacte a su ejecutivo"
        }
    }

}


var cuenta1 = new Cuenta("Carlos Osorio",500)

console.log("El titular de la cuenta es: "+cuenta1._titular+ " y tiene un saldo inicial de "+cuenta1._saldoCuenta)

console.log(cuenta1.setIngresar(100))

console.log(cuenta1.setIngresar(400))

console.log(cuenta1.setRetirar(150))

console.log(cuenta1.setRetirar(450))

var cuenta2 = new Cuenta("Abel Mendiola",350)

console.log("El titular de la cuenta es: "+cuenta2._titular+ " y tiene un saldo inicial de "+cuenta2._saldoCuenta)

console.log(cuenta2.setIngresar(200))


