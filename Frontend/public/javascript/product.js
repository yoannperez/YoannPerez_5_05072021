// Load server's configuration file
loadConfig().then(data => {
  config = data;

//Show hox many products in cart
nbProductsInCart();

// Récupérer l'id contenu dans l'URL
let params = new URL(document.location).searchParams;
let id = params.get("id");

//Définition du produit à ajouter au manier
let productToAdd;


//Défition de l'appel à l'API
let objToCall = "http://localhost:3000/api/cameras/" + id;

// -------------------------- Page management ---------------------------

fetch(objToCall)
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
  let myLenses = document.createElement("select");
  myLenses.classList.add("form-select");
  myLenses.setAttribute("aria-label", "Sélectionner votre option");
  myLenses.setAttribute("id", "optionSelected");
  let firstItem = document.createElement("option");
  firstItem.innerHTML = "Choisisez votre optique";
  myLenses.appendChild(firstItem);

  for (let j in lenses) {
    var listItem = document.createElement("option");

    listItem.setAttribute("value", `${lenses[j]}`);
    listItem.textContent = lenses[j];
    myLenses.appendChild(listItem);
  }

  document.querySelector("#productContainer").innerHTML += `
      <article class="container bg-light border rounded-2 shadow p-4">
      <div class="row p-2">
      <img class="col-lg-4 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm myimage" src="${product.imageUrl}" alt="${product.name}">
      </div>
      <div class="row p-2">
            
            <div class="col-lg-12">
                <h2 class="h2 ">${product.name}</h2>
                <hr/>
                <p class="text-muted">Depuis ${price}</p>
                <p >${product.description}</p>
                <hr/ class="mt-3"> 
                <div class="row">
                  <div class="col-3">
                    <p>Personalisez votre appareil : <p>
                  </div>
                  <div class="col-3 ">
                    ${myLenses.outerHTML}
                  </div>
                  <div class="col-5 offset-1 ">
                  <form>
                  <label for="quantity"> Quantité : </label>
                  <input type="number" style="width: 2.7em" id="quantity" name="quantity" min="1" value="1"/>  
                  </form>
                  </div>
                </div>
                <hr/ class="mt-3">  
                <div class="row p-2">
                    <button id="return" type="button" class="btn btn-warning col-4 offset-1" >Liste des produits</button>
                    <button id="addToCart" type="button" class="btn btn-danger col-4 offset-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ajouter au panier</button>
                </div>
            </div>
          
          </div>
      
  `;
  // -------------------------- Events management ---------------------------
  // Gestion de l'évènement click sur le bouton liste des produits.
  const returnBtn = document.getElementById("return");
  returnBtn.addEventListener("click", function () {
    window.open("./index.html", "_self");
  });

  // Event when clicking on "Ajouter au panier" button.
  const addToCartBtn = document.getElementById("addToCart");
  addToCartBtn.addEventListener("click", function (e) {
    e.stopPropagation;
    let modalFooter = document.querySelector(".modal-footer");
    removeAllChildNodes(modalFooter)
    // If an option is not selected, go back to product page
    if (productToAdd === undefined || productToAdd.optionProduct =="Choisisez votre optique"){

        // ---------  Modale management
        document.getElementById("staticBackdropLabel").innerText="Nous avons un petit problème !";
        document.querySelector(".modal-body").innerText ="Vous devez choisir une optique avant d'ajouter l'article au panier.";
        modalFooter.innerHTML += '<button id="cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Revenir sur la page</button>'
        
        
        } else {
          // if everything's fine,  Save selected product into localStorage
          saveToLocal(productToAdd);

          // Create Modal Page
          document.getElementById("staticBackdropLabel").innerText="Félicitations";
          document.querySelector(".modal-body").innerText ="Cet article a bien été ajouté au panier.";
          
          // Create "Aller au panier" Button
          modalFooter.innerHTML += '<button id="cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>'
          modalFooter.innerHTML += '<button id="goIndex" type="button" class="btn btn-warning">Liste des articles</button>';
          modalFooter.innerHTML += '<button id="goCart" type="button" class="btn btn-danger">Aller au panier</button>';
          document.getElementById("goCart").addEventListener('click', (e) =>{
              window.open("./panier.html", "_self");
              e.stopPropagation();
              })
          document.getElementById("goIndex").addEventListener('click', (e) =>{
              window.open("./index.html", "_self");
              e.stopPropagation();
              })
          document.getElementById("cancel").addEventListener('click', (e) =>{
              e.stopPropagation();
              window.location.reload();
              })
          
        }
    
  });

  //Listen witch option is selected
  const optionChoised = document.getElementById("optionSelected");
  optionChoised.addEventListener("change", () => {
    refreshProduct();
  });

  //Listen Quantity selected
  const quantitySelected = document.getElementById("quantity");
  quantitySelected.addEventListener("change", () => {
    refreshProduct();
  });
  
  // --- Get products informations
  const refreshProduct = () => {
        productToAdd = {
        idProduct: product._id,
        nameProduct: product.name,
        priceProduct: product.price,
        optionProduct: optionChoised.value,
        quantityProduct: quantitySelected.value,
    };
    
  };
}

// -------------------------- Cart management ---------------------------
// Save this production in the Local Storage
// -----------------------------------------------------

// function saveToCart (products) {
//     let myProducts = getMyCart();
//     myProducts.push(products)
// }

// function getMyCart () {
//     let cartList = localStorage.getItem("myProducts");
//     if (myProducts == null){
//         return [];
//     }else{
//         return JSON.parse(myProducts)
//     }
// }


//----------------------  Deal With LocalStorage   --------------------------
let panier

// Si le storage n'existe pas, le créer
if (!localStorage.getItem("panier")){
    panier =[];
    localStorage.setItem("panier", JSON.stringify(panier));
    } 
     // si le panier existe le charger dans le tableau   
    else {
        panier= JSON.parse(localStorage.getItem("panier"))
         
    }

// Sauvegarder le produit actuel dans le panier

function saveToLocal(product){
    panier.push(product),
    localStorage.setItem("panier", JSON.stringify(panier));
}

// function conditions(){
//     for (i in panierTableau){
//         if (i.idProduct === objetToSave.idProduct){
//             alert("Ce produit existe déjà")
//         }else {
//     panierTableau.push(productToAdd)}
//     
//     }    
// }

})