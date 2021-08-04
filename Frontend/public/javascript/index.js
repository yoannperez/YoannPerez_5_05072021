//Show hox many products in cart
nbProductsInCart();

// Gestion page d'acceuil

fetch("http://localhost:3000/api/cameras").then(data => data.json())
        
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

                // myLenses.classList.add("list-inline")
                document.getElementById("listProducts").innerHTML += `
                                                                        <article class="container bg-light border rounded-2 shadow mb-10 p-4">
                                                                            <div class="row p-2 ">
                                                                                <div class="col-lg-8">
                                                                                    <h2 class="h2 ">${product.name}</h2>
                                                                                    <hr/>
                                                                                    <p class="text-muted">Depuis ${price}</p>
                                                                                    <p >${product.description}</p>
                                                                                    <hr/>
                                                                                    <div class="row">
                                                                                        <div class="col-3">
                                                                                        <p>Options disponibles: <p>
                                                                                        </div>
                                                                                        <div class="col-6 ">
                                                                                        ${myLenses.outerHTML}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <img class="col-lg-4 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm myimage" src="${product.imageUrl}" alt="${product.name}">
                                                                            </div>
                                                                            <hr/>
                                                                            <a href='article.html?id=${id}' class="row" style="text-decoration: none">
                                                                                <button type="button" class="btn btn-warning col-4 offset-4" >Voir le produit</button>
                                                                            </a>
                                                                        </article>
                                                                    `;
                                                                   
            }
        });

        
