function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
  }
  // Récupération de l'élément du dom header
const header = createMarkup(`header`, ``, window.document.body );
    console.log(`header`, header);

// Création de l'élément de navigation (nav)
const nav = createMarkup(`nav`," ", header );
    console.log(`nav`, nav);
// Création des boutons
/* for (let i = 0; i < 4; i++) {
    createMarkup("button", `item ${1 + 1}`, nav);
} */
const button1 = createMarkup(`button`, `item 1`, nav);
    //Récupération de l'élément du Dom qui correspond au premier bouton
    /* const button1 = document.querySelector("nav > button:first-of-type");
    button1.style.color = "red"; */
    document.querySelector(`button `).style.color = `red`;

const button2 = createMarkup(`button`, `item 2`, nav);

const button3 = createMarkup(`button`, `item 3`, nav);

const button4 = createMarkup(`button`, `item 4`, nav);

const button5 = createMarkup(`button`, `item 5`, nav);
