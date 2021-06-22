class Personne {
  constructor(name, lastname) {
    this.firstname = name;
    this.lastname = lastname;
  }
  introduceMySelf() {
    console.log(`Bonjour, je m'appelle ${this.firstname}`);
  }
}
// Ici p1 a accès au prototype de Personne et d'object
const p1 = new Personne("Bob", "Dylan");
console.log(`p1 : `, p1);

// Ajout au prototype d'Object
Object.prototype.introduceMySelf = function () {
  console.log(`Hello my name is ${thisfirstname}`);
};
p1.introduceMySelf;
// Objet Littéral ou syntaxe JSON
// Javascript Object Notation
// p2 n'a accès qu'au prototype d'Objet
const p2 = {
  firstname: "Bob",
  lastname: "Dylan",
};
console.log(`p2`, p2);



////////////////////////////////////////////////////////////////////////////////////////////////
const p1 = new Object();
p1.firstname = "Bob";
p1.lastname = "Dylan";
