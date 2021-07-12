let titi = {};

// fetch("http://localhost:3000/api/cameras")
//   .then(function (res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function (value) {
//     titi = value;
//     console.log(value[0]["lenses"]);

//   })
//   .catch(function (err) {
//     window.alert("Erreur de connection réseau");

//   });

const header = document.querySelector("header");
const section = document.querySelector("section");

var requestURL = "http://localhost:3000/api/cameras";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  //   showHeroes(superHeroes);
  console.log(superHeroes);
};

//Header
function populateHeader(jsonObj) {
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj[0]["name"];
  header.appendChild(myH1);

  var myPara = document.createElement("p");
  myPara.textContent = "Hometown: " + jsonObj[0]["description"] + jsonObj[0]["price"];
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }