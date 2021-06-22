// function constructeur
class Pokemon {
  // name est un paramètre
  constructor(name) {
    // this.name est une propriété
    this.name = name;
  }
  // cette méthode est mise en commun dans le prototype
  // du constructeur de Pokemon pour toutes les instances
  introduceHisSelf() {
    console.log(`Hello my name is ${this.name}`);
  }
}

Pokemon.prototype.introduceHisSelf = function () {
  console.log(`Hello my name is ${this.name}`);
};
// certaine propriétés sont de type fonction
// on dit alors que ce sont des méthodes
this.introduceHisSelf = function () {
  console.log(`Hello, my name is ${this.name}`);
};
// tadmorv est une instance de Pokemon
const tadmorv = new Pokemon("tadmorv"); // passage d'un argument

console.log(`tadmorv : `, tadmorv);
console.log(`type de tadmorv : `, typeof tadmorv);
// Appel de la méthode depuis une instance d'objet
tadmorv.introduceHisSelf();

// tadmorv est une instance de Pokemon
const miaouss = new Pokemon("miaouss"); // passage d'un argument

console.log(`miaouss : `, miaouss);
console.log(`type de miaouss : `, typeof miaouss);
// Appel de la méthode depuis une instance d'objet
miaouss.introduceHisSelf();
console.log(`tadmorv : `, tadmorv);
