//Déclaration d'une fonction constucteur de Verre
class Verre 
{
    //Propriétés de l'objet
    constructor(liquide, volume) 
  {
    this.liquide = liquide;
    this.volume_max = volume;
    this.volume = volume;
    this.gorgee = 5;
  }
  remplir() 
  {
    console.log("Je me remplis");
    this.volume = this.volume_max;
    console.log("volume actuel", this.volume);
  }
  vider(nbr_de_gorgee = 1)
   {
    console.log("Je me vide de", nbr_de_gorgee);
    this.volume = this.volume - nbr_de_gorgee * this.gorgee;
    console.log("volume actuel", this.volume);
  }

  class verrecouleur extends verre {
    constructor(couleur) {
    super(liquide, volume);
    this.couleur = couleur;
    this.liquide = liquide;
    this.volume_max = volume;

    }
    colorier() {
        console.log('Ma couleur est :');

    }
    }

}
//Création d'une instance de Verre
