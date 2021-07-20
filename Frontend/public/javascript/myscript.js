

//Affichage des elements sur la page

fetch("http://localhost:3000/api/cameras")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    let datas = value;
    showCameras(datas);  
  })
  .catch(function (err) {
    window.alert("Erreur de connection réseau");
  });

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


const header = document.querySelector("header");
const section = document.querySelector("section");


function showCameras(myCameras) {
  let thisCamera = myCameras;

  for (let i in thisCamera) {
    let myCamera = document.createElement("article");
    
    let myName = document.createElement("h2");
    let myId = document.createElement("p");
    let myPrice = document.createElement("p");
    let myDescription = document.createElement("p");
    let myLenses = document.createElement("ul");
    let myImage = document.createElement("div");

    

    myName.textContent = "Model: " + thisCamera[i].name;
    myId.textContent = "ID: " + thisCamera[i]._id;
    myPrice.textContent = "Prix: " + Number.parseFloat(thisCamera[i].price/100).toFixed(2) + "€";
    myDescription.textContent = "Description: " + thisCamera[i].description;
    myImage.innerHTML = `<img class="img_article" src="${thisCamera[i].imageUrl}" alt="${thisCamera[i].name}">`;

    // 
    // let whichArticle = myCamera.addEventListener('click', function(){
    //   //Open article's page
    //   var myWindow = window.open("./article.html", "_self");
 
    // })

    // List Lenses
    var lenses = thisCamera[i].lenses;
    for (let j in lenses) {
      var listItem = document.createElement("li");
      listItem.textContent = lenses[j];
      myLenses.appendChild(listItem);
    }
    //Create DOM
    
    myCamera.appendChild(myName);
    myCamera.appendChild(myPrice);
    myCamera.appendChild(myDescription);
    myCamera.appendChild(myLenses);
    myCamera.appendChild(myImage);
    myCamera.appendChild(myId).classList.add("bg-light");
    section.appendChild(myCamera).classList.add("col", "bg-light","border", "border-1", "rounded-3", "paddin-3");
  }
}
