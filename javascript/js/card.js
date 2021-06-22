// Déclaration de la class Card

class Card {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
  // déclaration de la méthode checkAnswer
  checkAnswer() {
    //code de la méthode ici
    console.log(`Verification de reponse`);
  }
}

// Instanciation

const card1 = new Card("bibou ?", "labadaba da bibou, mibou");
const card2 = new Card("qui est l'inventeur du js ?", "Brendan Eich");

class Biquette {
  constructor(age, taille) {
    this.age = age;
    this.taille = taille;
  }
  checkBiquette() {
    console.log(
      `cette biquette a ${this.age} ans et sa taille est de ${this.taille} cm`
    );
  }
}

const biquette1 = new Biquette(2, 31);
const biquette2 = new Biquette(5, 42);
biquette1.checkBiquette();

class Shinsu {
  constructor(type, classe) {
    this.type = type;
    this.classe = classe;
  }
  presentShinsu() {
    console.log(
      `This shinsu type is ${this.type} and he is${this.classe} classes`
    );
  }
}

const shinsu_light_bearer = new Shinsu("Bright", "F");
const shinsu_blak_hole = new Shinsu("Jahad", "A");
shinsu_light_bearer.presentShinsu();
