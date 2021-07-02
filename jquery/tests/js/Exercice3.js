//Deux console.log(`data`, data);
     //console.log(`data`, aller chercher le country id);
     const input = document.getElementById("input");
     const button = document.getElementById("button");
    
      button.onclick = function (){
        console.log(`Input : `, input.value);
        fetch(`https://api.nationalize.io/?name=${input.value}`)
        .then((data) => {
          console.log(`data : `, data);
          console.log(`data`, );
          return data.json();
        })
        .then(function (data) {
    
          console.log(`data : `, data);
        }
        .catch((error) => {
          console.error("erreur attrapée :", error.message)
        })); 
      }