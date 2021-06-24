
/**
 *  Fonction qui crée une instance d'élément du DOM
 * @param {string} markup_name 
 * @param {string} text 
 * @param {Object} parent DOM element
 * @param {Object} attributes (arrayof objects)
 * @return {Object} element du DOM
 */
function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
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
  createMarkup("h2", `Titre 2`,document.body,{
      name: "class",
      value:"text-warning",
    }); 

    // Comment affecter à la propriété onclick de l'élément du DOM créé
    // (h2) une fonction qui permettra de mettre en rouge son texte ?
    h2.onclick = function() {
        h2.style.color = "red";
    }