
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

  const button = createMarkup("button", "Ajouter un paragraphe", document.body);

  button.onclick = handleClickOnButton;

  function handleClickOnButton() {
      console.log(`Dans handleClickOnButton`);
    // Ajout d'un élément du DOM P (paragraphe) comme dernier fils de
    // body et avec le texte "Lorem Ipsum"
    createMarkup("p", "Lorem ipsum", )
    }

