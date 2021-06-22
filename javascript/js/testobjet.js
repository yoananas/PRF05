//Fonction constructeur de Pokemon
function Pokemon(name, type, weight, height, attack) {//paramètres
  //affectation des propriétés de chaque instance d'objet
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.height = height;
  this.attack = attack;

  this.introduceHisSelf = function() {
    console.log(`Bonjour, je m'appelle ${this.name}, je suis de type
    ${this.type}, je pèse ${this.weight} et je mesure ${this.height}`);
  };
  this.fight = function(opponent) {
    //Force pour ce combat pour le pokemon appelant
    const my_strength = this.attack * Math.random();
    const opponent_strength = opponent.attack * Math.random();
    console.log(`Force de l'appelant : ${my_strength}`);
    console.log(`Force de l'opposant : ${opponent_strength}`);

    if(my_strength > opponent_strength)  {
      console.log(this.name + " a gagné");
    }else console.log(opponent.name + " a gagné");
    
  };
}

class Pokemon2021 extends Pokemon {
  fight (opponent) {
    //Force pour ce combat pour le pokemon appelant
    const my_strength = this.attack * Math.random() * 1.5;
    //Force pour ce combat pour le pokemon opposé
    const opponent_strength = opponent.attack * Math.random();
    console.log(`Force de l'appelant : ${my_strength}`);
    console.log(`Force de l'opposant : ${opponent_strength}`);

    if(my_strength > opponent_strength)  {
      console.log(this.name + " a gagné");
    }else console.log(opponent.name + " a gagné");
}

//Instanciation (new avec des arguments) et affectation à la variable dialga

const dialga = new Pokemon("Dialga" , "Acier", 683, 540, 120);

const palkia = new Pokemon("Palkia", "Eau", 336, 420, 200);

dialga.fight(palkia);

//Instanciation d'un Pokemon 2021
const groudon = new Pokemon2021("Groundon", "Sol", 950, 350, 200);
groudon.fight(palkia);

//Groudon ce présente
groudon.introduceHisSelf()


//Appel d'une méthode depuis une instance d'objet
dialga.introduceHisSelf();
