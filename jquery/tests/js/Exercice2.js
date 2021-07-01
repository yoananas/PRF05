jQuery(function($){
    // Création de mes balises et de leurs propriétées
const form = $("<form></form>").appendTo("body").css("color","red").css("display","flex");
const input_nom = $("<input>Nom</input>").appendTo("form");
const input_prénom = $("<input>Prénom</input>").appendTo("form");

const select_formation = $("<select></select>").appendTo("body").css("margin-top","20px");
const language_back = $("<select></select>").appendTo("body").css("margin-top","20px").hide();
const language_front = $("<select></select>").appendTo("body").css("margin-top","20px").hide();

// Option de mes listes déroulantes

const option1 = $("<option>---------------------------</option>").appendTo(select_formation);
const option2 = $("<option>Développeur front</option>").appendTo(select_formation);
const option3 = $("<option>Développeur back</option>").appendTo(select_formation);

const HTML = $("<option>HTML</option>").appendTo(language_front);
const CSS = $("<option>CSS</option>").appendTo(language_front);
const JS = $("<option>JS</option>").appendTo(language_front);
const Autre = $("<option>Autre</option>").appendTo(language_front);

const PHP = $("<option>PHP</option>").appendTo(language_back);
const JAVA = $("<option>JAVA</option>").appendTo(language_back);
const N0DE = $("<option>NODE</option>").appendTo(language_back);
const Autre1 = $("<option>Autre</option>").appendTo(language_back);

const button_submit =$("<button>Submit</button>").appendTo('body')
const submited =$("<h2>Votre formulaire a était envoyé !</h2>").appendTo('body').hide().css("color","red");


    // Création des événements onclick de mes listes déroulantes
    option1.on("click", function (event) {
        language_back.hide(500)
        language_front.hide(500)
    }); 

    option2.on("click", function (event) {
        language_front.show(500)
        language_back.hide()
    });

    option3.on("click", function (event) {
        language_back.show(500)
        language_front.hide()
    });
    button_submit.on("click", function (event) {
        submited.show(500);
    });

});