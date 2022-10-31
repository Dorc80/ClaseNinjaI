function Ninja(nombre, vida, velocidad_ = 3, fuerza_ = 3) {

    this.nombre = nombre;
    this.vida = vida;
    let velocidad = velocidad_;
    let fuerza = fuerza_;

    this.sayName = function () {
        console.log('El nombre de mi ninja es ' + this.nombre);
    }

    this.showStats = function () {
        console.log(`Nombre: ${this.nombre}, vida: ${this.vida}, velocidad: ${velocidad}, fuerza: ${fuerza}`)
    }

    this.drinkSake = function () {
        this.vida += 10;
    }

}

let ninja1 = new Ninja('Hyabusa', 100, 3, 3);
ninja1.sayName();
ninja1.showStats();