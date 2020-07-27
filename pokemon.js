
// CREAR CLASE POKEMON

class Pokemon {

    constructor(name,type,attack){
        this.name = name // Estos son los atributos del objeto
        this.type = type
        this.attack = attack
    }

    say(){
        console.log("Hola me llamo " + this.name)
    }


    attack(){
        console.log("Te ataco con " + this.attack)
    }

}


    var Pokemon1 = new Pokemon("Venusaur", 10, 90)
    var Pokemon2 = new Pokemon("Picachu", 8, 100)

Pokemon1.say()
Pokemon2.say()







