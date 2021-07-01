jQuery(function($){
    // Création de mes balises et de leurs propriétées
const h1 = $("<h1>Lorem ipsum en vrac</h1>").appendTo("body").css("color","orange");
const p1 = $("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint accusantium, provident dicta reiciendis eaque molestiae quis blanditiis ipsum illum. Vero, cupiditate numquam labore officiis accusantium nobis voluptate eius. Voluptas.</p>").appendTo("body").css("color","green");
const p2 = $("<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, laborum deserunt ad provident quod consequatur. Quam, sunt. Quam, temporibus nihil. At nisi repellat distinctio esse ex nostrum suscipit delectus libero.</p>").appendTo("body").hide().css("color","blue");
const p3 = $("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, harum quasi tempora ipsa itaque rerum sunt esse, autem natus laboriosam obcaecati sit magnam laborum blanditiis delectus voluptatum ducimus atque totam?</p>").appendTo("body").hide().css("color","blue");
const btn = $("<button>En savoir plus</button>").appendTo("body","p");

// Création des événements onclick
btn.on("click", function (event) {
    p2.toggle(2000)
    p3.toggle(2000)
});
});
