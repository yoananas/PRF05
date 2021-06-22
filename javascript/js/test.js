//Déclaration et affectation d'une variable i
let i = 12;

console.log('i :', i);
console.log('type de i :', typeof i);
//Une fonction a normalement une signature composée de son nom (ici ajoute)
//et de ses paramètres (a,b)
//Quand on appelle la fonction, le code compris entre les accolades ('bloc de code')
//est exécuté.
function ajoute(a, b) {
    //Variable locale à la fonction ajoute
    test = "Hello ajout";
    console.log('test dans ajoute : ', test);
    return a + b;
}
function soustrait(a, b) {
    //Variable locale à la fonction ajoute
    test = "Hello soustrait";
    console.log('test dans soustrait : ', test);
    return a - b;
}
let test = 'test';
console.log('result dans le contexte global : ', result);
let result = ajoute(45, 89);

result = soustrait(45, 89);
console.log('result dans le contexte global : ', result);
console.log('test dans le contexte global : ', test);


//Appel et stockage du résultat