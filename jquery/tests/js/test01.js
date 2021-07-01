// jQuery est une fonction qui va pouvoir être utiliser de différentes manières.
// première manière : en lui donnant en argument une fonction anonyme
// qui admet en unique paramètre $
// Cette fonction a plusieurs caractéristique :
// - elle attend que le DOM soit chargé
// - elle isole le code (comme toutes les fonctions)
// - elle s'assure que $ soit bien un alias de jQuery
jQuery(function($){
console.log(`$ : `, $);

    // Création d'élément du DOM avec de nouvelles propriétés (comme appendto par exemple).
    // jQuery renvoie une instance d'objet jQuery
    const h2 = $(`<h2>Titre de niveau 2 </h2>`).appendTo("body").hide(2000).show(2000);
    
    // Récupérer des références aux éléments du DOM qui seront au passage
    // augmentés par de nouvelles propriétés (comme text qui est une fonction)
    const h1 = $("h1").fadeOut(4000).fadeIn(4000);

    // Gestion des événements avec l'élément (on)
    h1.on("click", function () {
        h2.toggle(2000);
    });
});