let panier;

// Si le storage n'existe pas, le créer
if (!localStorage.getItem("panier")){
    let container = document.getElementById("panierContainer");
    container.innerHTML += `<h1 class="fw-bold d-flex justify-content-center"> Votre panier est vide <h1>`
    } 
     // si le panier existe le charger dans le tableau   
    else {
        panier= JSON.parse(localStorage.getItem("panier"))
        let container = document.getElementById("panierContainer");
        
        //Create tab header
        container.innerHTML += `<div class="container rounded-2 shadow">
                                    <table class="table ">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Article</th>
                                                <th scope="col">Option</th>
                                                <th scope="col">Quantité</th>
                                                <th scope="col">Prix unitaire</th>
                                                <th scope="col">Prix total</th>
                                                <th scope="col">Supprimer</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr id=total>
                                                
                                            </tr>
                                        </tfoot>
                                        <tbody id="tabBody">
                                        </tbody>

                                    </table>
                                </div>`
                                ;
        // Build tab body with informations saved in the local Storage
        let tab = document.getElementById("tabBody");
        
        for (let i in panier){
            let p = parseInt(i)+1;
            let totalArticle = parseInt(panier[i].priceProduct)*parseInt(panier[i].quantityProduct);
            tab.innerHTML += `<tr>
                                    <th scope="row">${p}</th>
                                    <td>${panier[i].nameProduct}</td>
                                    <td>${panier[i].optionProduct}</td>
                                    <td>${panier[i].quantityProduct}</td>
                                    <th scope="col">${formatPrice(panier[i].priceProduct)}</th>
                                    <th scope="col">${formatPrice(totalArticle)}</th>
                                    <th scope="col"><button id="del-${i}" type="button" class="btn btn-warning">Supprimer</button></th>
                                </tr>`
        }

        // Build last row in tab with total cart
        let totalLine = document.getElementById("total");
        let totalPanier = totalCart();
        totalLine.innerHTML += 
                                `<th colspan="5" class="text-end" scope="col">Total Commande : </th>
                                <th>${totalPanier}</th>`
    }

    