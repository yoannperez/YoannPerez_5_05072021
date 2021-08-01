let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

// Gestion page d'acceuil
//Appeller un article en particulier

let objToCall = "http://localhost:3000/api/cameras/"+id;
console.log(objToCall);


fetch(objToCall)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      let article = value;
      
    //   // List Lenses
    //   let lenses = product.lenses;
    //   let myLenses = document.createElement("ul");
    //   for (let j in lenses) {
    //       var listItem = document.createElement("li");
    //       listItem.textContent = lenses[j];
    //       // listItem.classList.add("list-inline-item")
    //       myLenses.appendChild(listItem);
    //       }

        
    //     document.querySelector(".toto").innerHTML += `
    //     <article class="container bg-light border rounded-2 shadow p-4">
    //     <div class="row p-2">
    //         <div class="col-lg-9">
    //             <h2 class="h2 ">${article.name}</h2>
    //             <hr/>
    //             <p class="text-muted">Depuis ${article.price}€</p>
    //             <p >${article.description}</p>
    //             <div class="row">
    //                 <div class="col-3">
    //                 <p>Optiques : <p>
    //                 </div>
    //                 <div class="col-6 ">
    //                 ${myLenses.outerHTML}
    //                 </div>
    //                 <a href='article.html?id=${article._id}' class="col-3 ">
    //                 <button type="button" class="btn btn-warning">Voir le produit</button>
    //                 </a>
    //             </div>
                
    //         </div>
    //         <img class="col-lg-3 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm" src="${product.imageUrl}" alt="${product.name}">
            
    //     </div>
        
    // `;



























    })
    .catch(function (err) {
      window.alert("Erreur de connection réseau");
    });

