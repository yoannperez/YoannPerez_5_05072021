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
                    // listItem.classList.add("list-inline-item")
                    myLenses.appendChild(listItem);
                    }

                // myLenses.classList.add("list-inline")
                document.querySelector(".container").innerHTML += `
                                                                        <article class="container bg-light border rounded-2 shadow p-4">
                                                                            <div class="row p-2">
                                                                                <div class="col-lg-9">
                                                                                    <h2 class="h2 ">${product.name}</h2>
                                                                                    <hr/>
                                                                                    <p class="text-muted">Depuis ${price}€</p>
                                                                                    <p >${product.description}</p>
                                                                                    <div class="row">
                                                                                        <div class="col-2">
                                                                                        <p>Optiques : <p>
                                                                                        </div>
                                                                                        <div class="col-6 ">
                                                                                        ${myLenses.outerHTML}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <img class="col-lg-3 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm" src="${product.imageUrl}" alt="${product.name}">
                                                                            </div>
                                                                            <a href='article.html?id=${id}' class="row" style="text-decoration: none">
                                                                                <button type="button" class="btn btn-warning col-4 offset-4" >Voir le produit</button>
                                                                            </a>
                                                                        </article>
                                                                    `;
                                                                   
            }
        });
