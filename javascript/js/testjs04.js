//Déclaration d'une fonction constucteur de Pokemon
function Pokemon(name, type, weight, height, ) {
    
    //Propriétés de l'objet
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.height = height;

    this.introduceMySelf = function() {
        console.log("Je m'appelle ", this.name, "Je suis un Pokemon de type", this.type);
    }
}

//Création d'une instance de Pokemon
const raikou = new Pokemon("raikou", "Electrique", 178, 190);
console.log('raikou : ', raikou);
const raikou = new Pokemon("Tadmorv", "Poison", 30, 90);
console.log('Tadmorv : ', Tadmorv);