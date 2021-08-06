let panier;
//Show hox many products in cart
nbProductsInCart();

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
            tab.innerHTML += `<tr class="align-middle" >
                                    <th scope="row">${p}</th>
                                    <td>${panier[i].nameProduct}</td>
                                    <td>${panier[i].optionProduct}</td>
                                    <td><button value='${i}' type="button" class="btn btn-secondary dec"><</button> <input id="number" type="number" style="width: 2.5em;" readonly value="${panier[i].quantityProduct}"> <button value='${i}' type="button" class="btn btn-secondary inc"> > </button></td>
                                    <th scope="col">${formatPrice(panier[i].priceProduct)}</th>
                                    <th scope="col">${formatPrice(totalArticle)}</th>
                                    <th scope="col"><button value='${i}' type="button" class="btn btn-warning del-button">Supprimer</button></th>
                                </tr>`

            
            
        }

        // Build last row in tab with total cart
        let totalLine = document.getElementById("total");
        let totalPanier = totalCart();
        totalLine.innerHTML += 
                                `<th colspan="5" class="text-end" scope="col">Total Commande : </th>
                                <th>${totalPanier}</th>`
    }

    // ------------------------- Cart Adjustments -------------------------------------

    // Manage "Supprimer" button
    let delButton = document.querySelectorAll(".del-button");
    
    for (let i = 0; i < delButton.length; i++){
        
        delButton[i].addEventListener("click", (event) => {
            event.preventDefault;
            eraseLine(i)
        })

    }

    // Manage increment button
    let incButton = document.querySelectorAll(".inc");

    for (let i = 0; i < incButton.length; i++){
        
            incButton[i].addEventListener("click", (event) => {
            event.preventDefault;
            panier[i].quantityProduct= parseInt(panier[i].quantityProduct) + 1;
            localStorage.setItem("panier", JSON.stringify(panier));
            window.location.reload();
        })
    }

    // Manage increment button
    let decButton = document.querySelectorAll(".dec");

    for (let i = 0; i < decButton.length; i++){
        if (panier[i].quantityProduct > 1){
            decButton[i].addEventListener("click", (event) => {
            event.preventDefault;
            panier[i].quantityProduct= parseInt(panier[i].quantityProduct) - 1;
            localStorage.setItem("panier", JSON.stringify(panier));
            window.location.reload();})
        } 
    }

    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  