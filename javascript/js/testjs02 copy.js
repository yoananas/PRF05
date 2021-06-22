// Une fonction est un bloc de code {} que l'on va appeler
// quand on en a besoin

function sePresenter(firstname, lastname) { // paramètres
    console.log('Hello, je m\'appelle', firstname, lastname);

// Pour qu'une fonction renvoi quelque choses, il faut utiliser
// le mot clé "return"
return firstname + " " + lastname; //concaténation (assembler des chaînes de caractères)
}
let introduce_boby = sePresenter("Boby", "La Pointe");// arguments
sePresenter("José", "Bové");// arguments
sePresenter("Simone", "Veil");// arguments

console.log('introduce_boby : ',introduce_boby);
// Syntaxe des fonctions fléchées
let moyenne = (x,y) => {
    return (x + y) / 2;
}

let result = moyenne(20, 10);
console.log('result : ', result);

// Déclaration d'une variable globale
let j = 55;
function test() {
    // Déclaration d'une variables locale à la fonction test
    let j = 78;
    console.log('j : ', j);
}
test();
console.log('j : ', j);


