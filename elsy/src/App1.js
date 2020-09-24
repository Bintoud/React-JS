
class Elsy {

    constructor(salutation, welcome) { // constructeur permet d'initialiser une class
        this.salutation = salutation; // this = réfère  le conteste courant de la class, l'objet de la fonction(const);
        this.welcome = welcome;
    }

    salutation;
    welcome;

    run() {
        return 'je cour'
    }
    walk() {
        return 'je marche'
    }

    //getter
    getLastname () {
        return this.salutation
    }
     
    // setter
    setLastname() {
        this.salutation = this.salutation;
    }

}

    // héritage = lien parent enfant.
    class Elsykonexio extends Elsy {

        constructor(salutation, welcome) {
            super(salutation, welcome)
        }
    }


const tary = new Elsykonexio ('mady', 'dyma');
console.log(tary);

//composition = const request = require('request');

/*
const hola = new Elsy ('bonjour','salut');
//console.log(hola);
const Bin = new Elsy('dit','bintou');
console.log(hola.run());
console.log(Bin.walk());
*/

// const == on ne peut pas réasilier une valeur a la variable const
// par contre on peut modifier les attribut à lintérieur d'un objet;
// la différence entre let , var et const est dans le block scooper
// on dit block quand on ouvre une accolade(if, for function{}) et 
// block scooper quand on déclare une variable à l'intérieur d'une {}.
