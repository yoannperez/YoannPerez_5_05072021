let id = "5be1ed3f1c9d44000030b061";


// Gestion page d'acceuil
//Appeller un article en particulier
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
