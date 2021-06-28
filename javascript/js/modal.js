console.log(`Dans modal.js`);
const modal = document.getElementById("modal");

// Changement du display de flex à none
modal.style.display = "none";

// Si on avais besoin de réutiliser button, on le stockerait dans la variable button
/* const button = document.querySelector("body > button");
button.onclick = function(){
    modal.style.display = "flex";
} */

document.querySelector("body > button").onclick = function () {
   modal.style.display = "flex"; 
};

document.querySelectorAll(".btn-close").forEach(button => {
    button.onclick = function(){
        modal.style.display = "none";
    }
});

modal.onclick = function(e) {
    console.log(`deepest element : `, e.target);
    if(e.target == modal) modal.style.display = "none";
    modal.style.display = "flex";
};