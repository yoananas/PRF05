jQuery(function($){
    const section = $("<section></section>").appendTo("body");
    const form = $("<form></form>").appendTo("section").css('display','flex').css('justify-content','center');
    const h1_euros = $("<h1>Euros</h1>").appendTo("form");
    const input_euros = $(`<input type="number">`).appendTo("form").attr("placeholder", "Montants en euros");
    const h1_francs = $("<h1>Francs Suisse</h1>").appendTo("form");
    const input_francs = $(`<input type="number">`).appendTo("form").attr("placeholder", "Montants en francs suisse");

    
    input_euros.on("input", function (event) {
        console.log(`valeur de l'input euros : `, input_euros.val());
        input_francs.val(input_euros.val()/1.10)
    });
    input_francs.on("input", function (event) {
        console.log(`valeur de l'input euros : `, input_francs.val());
        input_euros.val(input_francs.val()*1.10)
    });
    
});