function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
  }
  // Création du bouton
  const btn = createMarkup("button", "Ajouter un paragraphe", document.body);

  // Affectation d'un gestionnaire d'événement onclick sur le bouton
  btn.onclick = function () {
    createMarkup(`p`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint eius mollitia delectus, pariatur nulla? Accusamus commodi cumque soluta obcaecati nostrum earum, repellendus quae sint, veritatis, ad sapiente dicta laborum.`, document.body);
  
  }

