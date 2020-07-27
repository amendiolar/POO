class Persona {
    constructor(nombre, fechaNacimiento, sexo, peso, altura) {
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
    }

    calcularIMC() {

        var resultado = (this._peso / Math.pow(this._altura, 2))

        return resultado;

    }
    mayorEdad() {
        var edad = this._fechaNacimiento.split("/")

        edad = parseInt(edad[2]);
        var resultado = 2020 - edad;

        if (resultado < 18) {
            return "Eres menor de edad";
        } else {
            return "Eres Mayor de edad";
        }
    }

    generarRFC() {
        var datos = this._nombre.split(" ");
        let dato1 = datos[1];
        let dato2 = datos[2];
        let dato3 = datos[0];
        var edad = this._fechaNacimiento.split("/")
        var aniorfc = edad[2].substring(2, 4);

        let temp = []
        for (let i = 1; i < dato1.length; i++) {

            if (dato1[i] === "a" || dato1[i] === "e" || dato1[i] === "i" || dato1[i] === "o" || dato1[i] === "u")

                temp.push(dato1[i]);

        }

        return dato1.substring(0, 1) + temp[0].toUpperCase() + dato2.substring(0, 1) + dato3.substring(0, 1) + aniorfc + edad[1] + edad[0];

    }

}



var persona1 = new Persona("Carlos Osorio Cervantes", "01/06/1985", "Masculino", 83, 1.75);

var persona2 = new Persona("Sandra Lara Perez", "28/01/1986", "Femenino", 54, 1.57);

console.log("tu indice de masa corporal es", persona1.calcularIMC());

console.log(persona1.mayorEdad());

console.log("tu RFC es:", persona1.generarRFC());


console.log("tu indice de masa corporal es", persona2.calcularIMC());

console.log(persona2.mayorEdad());

console.log("tu RFC es:", persona2.generarRFC());