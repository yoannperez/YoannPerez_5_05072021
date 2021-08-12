//Show hox many products in cart when loading the page
refreshHeader();

// Main function definition 
function mainFunction () {
    fetch("http://localhost:3000/api/cameras")
        .then(data => data.json())

        // If error while fetching server
        .catch(function (err) {
            window.alert("Erreur de connection réseau, nous n'avons pas pu communiquer avec le serveur. Veuillez vérifier votre configuration.");
          })

        .then(jsonListArticle => {
            for (let jsonArticle of jsonListArticle) {
                    let product = new Article(jsonArticle);
                    let price = formatPrice(product.price);
                    let id = jsonArticle._id;
                    // List Lenses
                    let lenses = product.lenses;
                    let myLenses = document.createElement("ul");
                    for (let j in lenses) {
                        var listItem = document.createElement("li");
                        listItem.textContent = lenses[j];
                        myLenses.appendChild(listItem);
                        }

                    // Reach Dom div element #listProducts, then inject HTML constructor    
                    document.getElementById("listProducts").innerHTML += `<article class="container bg-light border rounded-2 shadow mb-10 p-4">
                                                                            <div class="row p-2 ">
                                                                            <div class="col-lg-8">
                                                                                <h2 class="h2 ">${product.name}</h2>
                                                                                    <hr/>
                                                                                    <p class="text-muted">Depuis ${price}</p>
                                                                                    <p >${product.description}</p>
                                                                                    <hr/>
                                                                                    <div class="row">
                                                                                        <div class="col-12 col-md-4">
                                                                                        <p>Options disponibles: <p>
                                                                                        </div>
                                                                                        <div class="col-12 col-md-6">
                                                                                        ${myLenses.outerHTML}
                                                                                        </div>
                                                                                    </div>
                                                                                        </div>
                                                                                        <img class="col-lg-4 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm myimage" src="${product.imageUrl}" alt="${product.name}">
                                                                                    </div>
                                                                                    <hr/>
                                                                                <a href='product.html?id=${id}' class="row" style="text-decoration: none">
                                                                                <button type="button" class="btn btn-warning col-xs-12 col-md-6 offset-md-3" >Voir le produit</button>
                                                                            </a>
                                                                        </article>`;
                }
            }
        );
}

mainFunction();
        

