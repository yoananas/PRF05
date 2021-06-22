// condition
const p1 = {
    name: "Bob",
    lastname: "Marley",
    vote: () => {
        console.log(`${this.name} a voté`);
    }
};
// Création d'un alias
const p2 = p1; {
    name: "Bob",
};
// ==, >, < compare ( === compare)
if (p1 == p2) {
    console.log(`p1 égal p2`);
} else console.log(`p1 n'est pas égale à p2`);


// Boucle for avec incrémentation (augmentation de la boucle 1)
for (var i = 0; i < 10; i++) {
    console.log(`i : `, i);
}
console.log(`i : `, i);
for (property in p1) {
    console.log(`property : `, property);
    console.log(`property value : `, p1[property]);
}

console.log(`Prénom de p1 : `, p1["firstname"]);
console.log(`Prénom de p1 : `, p1[firstname]);
console["log"](`Hello`);