// Get product price in Euro
function formatPrice(p) {
    formatedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number.parseFloat(p/100).toFixed(2));
    return formatedPrice
}

// Call one object with id
function getArticleById(id){
    let objToCall = "http://localhost:3000/api/cameras/"+id;
    console.log(objToCall);
  fetch(objToCall)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      let monObjet = value;
      console.log("Retour appel objet: " + id);
      console.log(monObjet);  
    })
    .catch(function (err) {
      window.alert("Erreur de connection réseau");
    });
  }


//Calc total in cart 
const totalCart= () => {
  let panier= JSON.parse(localStorage.getItem("panier"))
  let totalCommand = 0;
  for (let i in panier){
        totalCommand += parseInt(panier[i].priceProduct)*parseInt(panier[i].quantityProduct);
  }
  return formatPrice(totalCommand);
}

//Delete all childs in one element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

//Calc how many articles in Cart  
const objectsInCart= ()=>{
  let panier= JSON.parse(localStorage.getItem("panier"))
  let totalInCart = 0;
  for (let i in panier){
      totalInCart += parseInt(panier[i].quantityProduct);
  }
  return totalInCart;
}

//Print numbers of products in cart
const nbProductsInCart = () => {
    let screen = document.getElementById("totalCart");
    let price = document.getElementById("totalPrice");
    price.innerText = totalCart();
    screen.innerText = objectsInCart();
}

// Erase a product in cart, update local storage, refresh cart page
const eraseLine = (l) => {
  let line = l;
  panier.splice(line,1)
  localStorage.setItem("panier", JSON.stringify(panier));
  window.location.reload();
  }

// Create list of id products and save it before sending cart to server
const productsToSend = () => {
  let pack =[];
  for (let i in panier) {
    pack.push(panier[i].idProduct)
    }
  return pack
}