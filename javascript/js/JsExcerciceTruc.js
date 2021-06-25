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
// création du container
const container = createMarkup("main", "", document.body, [
  {
    name: "class",
    value: "container mt-4",
  },
]);

// Création du formulaire
const form = createMarkup("form", "", container, [
  { name: "class", value: "d-flex justify-content-center" },
]);
const input = createMarkup("input", "", form, [
  { name: "type", value: "text" },
  { name: "class", value: "form-control" },
  {
    name: "style",
    value: "display: inline-block;width: 30%; margin-right: 20px;",
  },
]);
const button_add = createMarkup("button", "Ajouter une tâche", form, [
  {
    name: "class",
    value: "btn btn-success",
  },
]);

// Gestion des événements ********************************************
// Gestion de la soumission du formulaire
form.onsubmit = function (event) {
  // preventDefault permet d'arrêter le comportement déclenché par défaut par certains événements. Dans le cas présent, il s'agit de faire en sorte que la page ne soit pas rechargée à la validation du formulaire
  event.preventDefault();
  // Si le contenu de l'input est vide, on ajoute un message dans l'input sinon, on fait le job !
  if (input.value == "") {
    input.setAttribute("placeholder", "Insérer le nom d'une tâche ici !");
  } else {
    // Créer un élément du dom section qui comprendra du texte (l'intitulé de la tâche) et 3 boutons : valider, invalider, supprimer
    const section = createMarkup("section", "", container, [
      {
        name: "class",
        value: "rounded border p-2 mt-3 mb-3 d-flex justify-content-between",
      },
    ]);
    // Récupération du texte qui se trouve dans l'input du formulaire
    const task_text = createMarkup("span", input.value, section, [
      { name: "class", value: "h3 mr-4" },
    ]);
    // Remise à zéro du texte
    input.value = "";

    const wrapper_button = createMarkup("div", "", section, [
      { name: "class", value: "d-flex align-items-start" },
    ]);
    // Création des boutons
    const button_validate = createMarkup("button", "Valider", wrapper_button, [
      { name: "class", value: "btn btn-success mr-3" },
    ]);
    const button_unvalidate = createMarkup(
      "button",
      "Invalider",
      wrapper_button,
      [{ name: "class", value: "btn btn-warning mr-3" }]
    );
    // affectation de la propriété hidden pour cacher le bouton
    button_unvalidate.hidden = true;
    const button_delete = createMarkup("button", "Supprimer", wrapper_button, [
      { name: "class", value: "btn btn-danger" },
    ]);

    // au click sur le bouton "valider", ce dernier est caché et le bouton "invalider" apparaît. On fait en sorte de barrer le texte
    button_validate.onclick = function () {
      button_unvalidate.hidden = false;
      button_validate.hidden = true;
      task_text.setAttribute("style", "text-decoration: line-through;");
    };
    // au click sur le bouton "invalider", ce dernier est caché et le bouton "valider" apparaît
    button_unvalidate.onclick = function () {
      button_validate.hidden = false;
      button_unvalidate.hidden = true;
      task_text.setAttribute("style", "text-decoration: none;");
    };
    // Gestion de l'événement click sur le bouton de suppression
    button_delete.onclick = function () {
      if (confirm("Etes vous sûr.e de vouloir supprimer cette tâche ?")) {
        section.remove();
      }
    };
  }
};