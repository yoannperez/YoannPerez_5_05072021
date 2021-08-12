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