//Déclaration d'une fonction constucteur de Verre
function cercle(nom, rayon,) {
  //Propriétés de l'objet
  this.nom = nom;
  this.rayon = rayon;
  this.pi = 3.14;
  this.aire = this.pi * Math.sqrt(this.rayon);
  this.perimetre = 2 * this.rayon * this.pi;


  this.surface = function () {
  console.log("Ceci est l'aire du cercle", this.aire);
  };

}

//Création d'une instance de Verre
