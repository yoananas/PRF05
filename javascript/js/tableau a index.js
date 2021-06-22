// Tableau à index
const fruits = ["Banane", "Cerises", "Pomme"];
console.log(`dernier element = `, fruits[2]);

// Parcourir le tableau
const test = fruits.forEach(function(fruit, index, tab);
console.log(`fruits`, fruits);
console.log(`index`, index);
console.log(`tableau`, tab);

// Ajout d'un élément en fin de tableau
let new_lenght = 0;
// Push rajoute en renvoie des elements
fruits.push("Fraise", "Poire", "Framboise")
console.log(`Fruits : `, fruits);

// Suppression ou remplacement à l'intérieur du tableau
// Le premmier arthument indique le début du changement du tableau
// Le deuxième argument indique combien d'éléments sont supprimé
// Le troisième argument indique les éléments ajoutés
// Laméthode renvoie un tableau des éléments supprimés
let removed_fruit = fruits.splice(3,3, "Papaye", "Orange", "Mangue");
console.log(`Fruits : `, fruits);
console.log(`Fruits supprimés : `, removed_fruit);

// Transformation d'un tableau via ma méthode map
const fruits_li = fruits.map(fruit => `<li>${fruit}</li>`);

console.log(`fruits après le map : `, fruits_li );

