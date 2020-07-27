
class Padawan {

    // Scope ---> es donde viven las variables
    // this ---> vive en todo el objeto
   /* this.name = "Hector" // Estos son los atributos de mi clase
    this.age = 25
    this.number_lectures = 160 */

    constructor(name,age,number_lectures){
        this.name = name // Estos son los atributos del objeto
        this.age = age
        this.number_lectures = number_lectures
    }

    codear() { // Metodos ---> las cosas que puede hacer mi objeto
        console.log("Estoy codeando bien chido")
    }

    sleep(){
        console.log("Estoy durmiendo")
    }

    eat(comida){
        console.log("Estoy comiendo  " + comida)
    }

    greeting(){
        console.log("Hola soy "+this.name)
    }

  /*  obtenerCalificacion(){
        // logica para obtener calificacion
    } */



}

var padawan1 = new Padawan("Hector Mercado", 25, 160)
console.log("padawan1", padawan1)
console.log("padawan1", padawan1.name)
var padawan2 = new Padawan("Jose Fabio", 18, 150)
console.log("padawan2", padawan2)
console.log("padawan2", padawan2.name)

console.log(padawan1 === padawan2)

padawan1.greeting()
padawan2.greeting()

padawan1.codear()

padawan2.sleep()

padawan1.eat("Pizza")

padawan2.eat("Sushi")










