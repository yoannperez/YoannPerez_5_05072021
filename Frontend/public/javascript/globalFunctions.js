// Transform price of the product

function formatPrice(p) {
    formatedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number.parseFloat(p/100).toFixed(2));
    return formatedPrice
}

// Appel d'un objet par son id
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



