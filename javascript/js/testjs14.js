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

// Création des éléments du dom pour créer une liste déroulante
const select_region = createMarkup("select", "", document.body);
const select_departement = createMarkup("select", "", document.body);
const select_commune = createMarkup("select", "", document.body);

// Gestion de l'événement onchange du select
// permet de récupérer la valeur de l'option choisie (code région)
select_region.onchange = () => {
  console.log(`région choisie : `, select_region.value);

  // récupération des données qui correspondent à la région cliquée
  fetch(`https://geo.api.gouv.fr/regions/${select_region.value}/departements`)
    .then((data) => {
      // data est de type Response
      console.log(`data : `, data);
      // Je vérifie si la données est bien du json
      // via la fonction json qui renvoie
      return data.json();
    })
    .then(function (data) {
      // Data est de type tableau d'objets
      console.log(`data : `, data);

      // Suppression de toutes les options dans select_departement
      select_departement.querySelectorAll("option").forEach((option_dpt) => {
        option_dpt.remove();
      });

      data.forEach((departement) => {
        createMarkup("option", departement.nom, select_departement, [
          {
            name: "value",
            value: departement.code,
          },
        ]);
      });
    })
    .catch((error) => {
      console.error(`erreur : `, error.message);
    });
};
select_departement.onchange = () => {
  console.log(`departement choisi : `, select_departement.value);

  // récupération des données qui correspondent à la région cliquée
  fetch(
    `https://geo.api.gouv.fr/departements/${select_departement.value}/communes`
  )
    .then((data) => {
      // data est de type Response
      console.log(`data : `, data);
      // Je vérifie si la données est bien du json
      // via la fonction json qui renvoie
      return data.json();
    })
    .then(function (data) {
      // Data est de type tableau d'objets
      console.log(`data : `, data);

      // Suppression de toutes les options dans select_commune
      select_commune.querySelectorAll("option").forEach((option_commune) => {
        option_commune.remove();
      });

      data.forEach((commune) => {
        createMarkup("option", commune.nom, select_commune, [
          {
            name: "value",
            value: commune.code,
          },
        ]);
      });
    })
    .catch((error) => {
      console.error(`erreur : `, error.message);
    });
};

select_commune.onchange = () => {
  console.log(`commune choisie : `, select_commune.value);

  // récupération des données qui correspondent au département cliqué
  fetch(`https://geo.api.gouv.fr/communes/${select_commune.value}`)
    .then((data) => {
      // data est de type Response
      console.log(`data : `, data);
      // Je vérifie si la données est bien du json
      // via la fonction json qui renvoie une promesse
      return data.json();
    })
    .then(function (data) {
      // Data est de type tableau d'objets
      console.log(`data commune : `, data);
      const name = createMarkup("h1", data.nom, document.body);
      const p = createMarkup(
        "p",
        "Population : " + data.population,
        document.body
      );
      const cp = createMarkup(
        "p",
        "Code postal : " + data.codesPostaux,
        document.body
      );
    })
    .catch((error) => {
      console.error(`erreur : `, error.message);
    });
};

// Récupération des données
fetch("https://geo.api.gouv.fr/regions")
  .then((data) => {
    // data est de type Response
    console.log(`data : `, data);
    // Je vérifie si la données est bien du json
    // via la fonction json qui renvoie
    return data.json();
  })
  .then(function (data) {
    // Data est de type tableau d'objets
    data = data.sort();
    console.log(`data : `, data);
    data.forEach((region) => {
      createMarkup("option", region.nom, select_region, [
        {
          name: "value",
          value: region.code,
        },
      ]);
    });
  })
  .catch((error) => {
    console.error(`erreur : `, error.message);
  });