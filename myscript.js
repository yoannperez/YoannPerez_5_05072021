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

// fetch("http://localhost:3000/api/cameras:_5be1ed3f1c9d44000030b061")
//   .then(function (res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function (value) {
//     let monObjet = value;
//     console.log(monObjet);  
//   })
//   .catch(function (err) {
//     window.alert("Erreur de connection réseau");
//   });



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
    myPrice.textContent = "Prix: " + thisCamera[i].price;
    myDescription.textContent = "Model: " + thisCamera[i].description;
    myImage.innerHTML = `<img src="${thisCamera[i].imageUrl}" alt="${thisCamera[i].name}">`;

    // List Lenses
    var lenses = thisCamera[i].lenses;
    for (let j in lenses) {
      var listItem = document.createElement("li");
      listItem.textContent = lenses[j];
      myLenses.appendChild(listItem);
    }
    //Create DOM
    myCamera.appendChild(myName);
    myCamera.appendChild(myId);
    myCamera.appendChild(myPrice);
    myCamera.appendChild(myDescription);
    myCamera.appendChild(myLenses);
    myCamera.appendChild(myImage);

    section.appendChild(myCamera).classList.add("red");
  }
}
