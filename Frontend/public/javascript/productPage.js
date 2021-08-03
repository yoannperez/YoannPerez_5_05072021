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
                <p class="text-muted">Depuis ${price}€</p>
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
                  <input type="number" id="quantity" name="quantity" min="1" value="1"/>  
                  </form>
                  </div>
                </div>
                <hr/ class="mt-3">  
                <div class="row p-2">
                    <button id="return" type="button" class="btn btn-warning col-4 offset-1" >Liste des produits</button>
                    <button id="addToCart" type="button" class="btn btn-danger col-4 offset-2" >Ajouter au panier</button>
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

  // Event when clicking on save button.
  const addToCartBtn = document.getElementById("addToCart");
  addToCartBtn.addEventListener("click", function (e) {
    if (productToAdd === undefined || productToAdd.optionProduct =="Choisisez votre optique"){
        window.alert("Veuillez Sélectionner une option")
    }else{
        saveToLocal(productToAdd);
        
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
        // optionProduct: optionChoised.value,
        // quantityProduct: quantitySelected.value,
    };
    console.log(productToAdd)
  };
}

// -------------------------- Cart management ---------------------------
// Save this production in the Local Storage
// -----------------------------------------------------

function saveToCart (products) {
    let myProducts = getMyCart();
    myProducts.push(products)
}

function getMyCart () {
    let cartList = localStorage.getItem("myProducts");
    if (myProducts == null){
        return [];
    }else{
        return JSON.parse(myProducts)
    }
}

function saveToLocal(objetToSave){
    localStorage.setItem("cart", JSON.stringify(objetToSave));
}

