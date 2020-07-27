
class Cliente{

    constructor(name,rfc, saldo){
        this.name = name
        this.rfc = rfc
        this.saldo = saldo
    }

    comprar(productos){
        var total = 0
        for(var i = 0; i < productos.length; i++){
            total = total + productos[i].getPrice()
        }
        if(total <= this.saldo){
            for(var i = 0; i < productos.length; i++){
                console.log("Compraste: "+productos[i].getName())
            }
        } else{
            console.log("Tas pobre :(")
        }
    }

    emitirFactura(){
        
    }

}

class Producto{

    constructor(name,price,quantity,sku){
        this._name = name // Si agrego un guion bajo es una senal que este atributo no debe ser modificado
        this._price = price
        this._quantity = quantity
        this._sku = sku
    }

// getters and setters

    getName(){
        return this._name
    }

    getPrice(){
        return this._price
    }

    getQuantity(){
        return this._quantity
    }

    getSku(){
        return this._sku
    }

    setPrice(newPrice){
        this._price = newPrice
    }


}

var cliente = new Cliente("Edwin Salgado", "SAFL930610", 10000  )
var play = new Producto("Playstation 5", 16500, 1000, "912371224793214")
var nintendo = new Producto("Nintendo Switch", 7500, 200, '362518264')

console.log("Cliente: ", cliente.name)
const carrito1 = [play, nintendo]
cliente.comprar(carrito1)


/*
var carrito = [play, nintendo] // un arreglo de objetos producto

cliente.comprar(carrito)
*/

// O --> Open close principle  --> encapsulacion
// Toda clase esta abierta para extension pero cerrada para modificacion

play.price = 10
nintendo.price = 500

const carrito2 = [play, nintendo]
cliente.comprar(carrito2)

// Extendiendo el objeto
// Agregand
play.description = "Playstation 5 de 1 Tb"
nintendo.description = "Nintendo Switch de 16 gb"
play.getDescription = function () {
    return this.description
}

console.log(play)

console.log(nintendo)

// Esto no se debe hacer
// play._price = 1500

// Esto si se puede hacer
play.setPrice(17500) // Esto me da certeza de este es el nuevo precio






