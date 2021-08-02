// Récupérer l'id contenu dans l'URL
let params = new URL(document.location).searchParams;
let id = params.get("id");


//Défition de l'appel à l'API
let objToCall = "http://localhost:3000/api/cameras/" + id;


fetch (objToCall)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    let article = value;
    buildDom(article);
  })
  .catch(function (err) {
    window.alert("Erreur de connection réseau");
  });

function buildDom(articleToshow) {
  let product = articleToshow;
  let price = formatPrice(product.price);
    
  // Extract lenses list
  let lenses = product.lenses;
  let myLenses = document.createElement("ul");
  for (let j in lenses) {
    var listItem = document.createElement("li");
    listItem.textContent = lenses[j];
    // listItem.classList.add("list-inline-item")
    myLenses.appendChild(listItem);
    }

  document.querySelector(".toto").innerHTML += `
      <article class="container bg-light border rounded-2 shadow p-4">
      <div class="row p-2">
      <img class="col-lg-4 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm" src="${product.imageUrl}" alt="${product.name}">
      </div>
      <div class="row p-2">
            
            <div class="col-lg-12">
                <h2 class="h2 ">${product.name}</h2>
                <hr/>
                <p class="text-muted">Depuis ${price}€</p>
                <p >${product.description}</p>
                <div class="row">
                  <div class="col-3">
                    <p>Optiques : <p>
                  </div>
                  <div class="col-6 ">
                    ${myLenses.outerHTML}
                  </div>
                  <hr/>  
            </div>
              <div class="row p-2">
                <button id="return" type="button" class="btn btn-warning col-4 offset-1" >Liste des produits</button>
                <button id="addToCart" type="button" class="btn btn-danger col-4 offset-2" >Ajouter au panier</button>
              </div>
            </div>
          
          </div>
      
  `;

// Gestion de l'évènement click sur le bouton liste des produits.  
const returnBtn = document.getElementById("return");
returnBtn.addEventListener('click', function () {
    window.open("./index.html", "_self");
    } )

    // Gestion de l'évènement click sur le bouton liste des produits.  
const addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener('click', function () {
    window.alert("Le panier c'est chô ! ")
    } )

}
