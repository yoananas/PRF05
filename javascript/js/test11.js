
/**
 *  Fonction qui crée une instance d'élément du DOM
 * @param {string} markup_name 
 * @param {string} text 
 * @param {Object} parent DOM element
 * @param {Object} attributes (arrayof objects)
 * @return {Object} element du DOM
 */
function createMarkup(markup_name, text, parent, attribute) {
    // La variable markup stocke le retour de la fonction
    // createElement. Ce retour a pour type (object). Cet
    // objet est un élément du DOM. markup pointe donc (ou stocke)
    // vers un élément du DOM.
    const markup = document.createElement(markup_name);

    // Ajout du texte à l'élément du DOM markup
    markup.textContent = text;
    
    // Positionnement de markup en tant que derniers fils
    // de l'élément u DOM "parent"
    parent.appendChild(markup);
    
    // Si attribute est défini et qu'il a bien la propriété name,
    // alors on ajoute à markup l'attribut qui a pour nom
    // attribute.nom et pour valeur attribute.value
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }

    // La fonction renvoie l'élément du DOM markup
    return markup;
  }

  function test() {
      console.log(`test`);
      return "test";
  }
  // On affecte à i le xxx de la fonction "test()"
  const i = test();
  // "i" est une variable qui stock le return de la fonction appelé "test()"
  // mais elle ne retourne rien donc "i" ne stock rien

  // Création d'un élément du DOM (h2), ajout en son sein du texte "Titre 2"
  // ,positionnement en dernier fils de "body" et ajout de l'attribut class 
  // avec pour valeur "text-warning"
  const h2 = createMarkup("h2", `Titre 2`,document.body,{
      name: "class",
      value:"text-warning",
    }); 


    // Comment affecter à la propriété onclick de l'élément du DOM créé
    // (h2) une fonction qui permettra de mettre en rouge son texte ?
    h2.onclick = function() {
        h2.style.color = "red";
    };