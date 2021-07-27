// Gestion page d'acceuil

fetch("http://localhost:3000/api/cameras").then(data => data.json())
        
        .then(jsonListArticle => {
            for (let jsonArticle of jsonListArticle) {
                let product = new Article(jsonArticle);


                let price = formatPrice(product.price);

                // List Lenses
                // var lenses = product.lenses;
                // for (let j in lenses) {
                // var listItem = document.createElement("li");

                // listItem.textContent = lenses[j];
                // myLenses.appendChild(listItem);
                // }
                
                document.querySelector(".container").innerHTML += `<article class="container bg-light border rounded-2 shadow p-4">
                                                                        <div class="row p-2">
                                                                            <div class="col-lg-9">
                                                                                <h2 class="h2 ">${product.name}</h2>
                                                                                <hr/>
                                                                                <p class="text-muted">Depuis ${price}€</p>
                                                                                <p >${product.description}</p>
                                                                            </div>
                                                                            <img class="col-lg-3 img-fluid img-thumbnail rounded mx-auto d-block shadow-sm" src="${product.imageUrl}" alt="${product.name}">
                                                                            
                                                                        </div>
                                                                    `;
            }

            
        });
