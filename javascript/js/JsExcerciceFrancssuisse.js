/**
 * Fonction qui crée une instance d'élément du DOM
 * @param {string} markup_name
 * @param {string} text
 * @param {Objet} parent DOM element
 * @param {array} attributes tableau d'objets
 * @return {0bject} element du DOM
 */
function createMarkup(markup_name, text, parent, attributes) {
  // la variable markup stocke le retour de la fonction
  // createElement. Ce retour a pour type "object". Cet objet est
  // un élément du DOM. markup pointe donc (ou stocke) vers  un élément du dom
  const markup = document.createElement(markup_name);

  // Ajout de texte à l'élément du dom markup
  markup.textContent = text;

  // Positionnement de markup en tant que dernier fils de l'élément
  // du dom "parent"
  parent.appendChild(markup);

  // Si attribute est défini et que c'est bien un tableau qui a au moins un élément alors on parcourt le tableau d'objets. Pour chaque objet, on fait appel à setAttribute pour ajouter l'attribut qui correspond au nom (name) et à la valeur (value)
  if (attributes && Array.isArray(attributes) && attributes.length > 0) {
    // parcours du tableau attributes
    attributes.forEach((element) => {
      markup.setAttribute(element.name, element.value);
    });
  }

  // La fonction renvoie l'élément du DOM markup
  return markup;
}
document.getElementById("input-euros").oninput = function (event);

form.onsubmit = function (event) {
  // preventDefault permet d'arrêter le comportement déclenché par défaut par certains événements. Dans le cas présent, il s'agit de faire en sorte que la page ne soit pas rechargée à la validation du formulaire
  event.preventDefault();
};

