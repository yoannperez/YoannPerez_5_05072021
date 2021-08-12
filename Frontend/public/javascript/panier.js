//Show hox many products in cart when loading the page
refreshHeader();

// If LocalStorage doesn't exist, we have to create it!
if (!localStorage.getItem("panier")){
    let container = document.getElementById("panierContainer");
    container.innerHTML += `<h1 class="fw-bold d-flex justify-content-center"> Le panier est vide... <h1>`

    // and don't show Contact form
    document.getElementById("form").style.display = "none";
    } 

    // If cart exist, we load it in panier var   
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
                                                <th scope="col">Quant.</th>
                                                <th scope="col">P.U.</th>
                                                <th scope="col">P.Total</th>
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
        
        const buildRow = () => {
        // Build tab body with informations saved in the local Storage
        let tab = document.getElementById("tabBody");
        // Create tab rows
        for (let i in panier){
            let p = parseInt(i)+1;
            let totalArticle = parseInt(panier[i].priceProduct)*parseInt(panier[i].quantityProduct);
            tab.innerHTML += `<tr class="align-middle" >
                                    <th scope="row">${p}</th>
                                    <td>${panier[i].nameProduct}</td>
                                    <td>${panier[i].optionProduct}</td>
                                    <td><button value='${i}' type="button" class="btn btn-secondary d-none d-lg-inline dec btn-sm"><</button> <input id="number" type="number" style="width: 2.7em;" readonly value="${panier[i].quantityProduct}"> <button value='${i}' type="button" class="btn btn-secondary btn-sm inc d-none d-lg-inline"> > </button></td>
                                    <th scope="col">${formatPrice(panier[i].priceProduct)}</th>
                                    <th scope="col">${formatPrice(totalArticle)}</th>
                                    <th scope="col"><button value='${i}' type="button" class="btn btn-warning del-button btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Supprimer</button></th>
                                </tr>`
        }}
        buildRow();

        // Build last row in tab with total cart
        let totalLine = document.getElementById("total");
        totalLine.innerHTML += `<th colspan="5" class="text-end" scope="col">Total Commande : </th>
                                <th>${totalCart()}</th>
                                <th><button type="button" id="emptyCart" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Vider le Panier</button></th>`
    }

// ------------------------- Cart Events Management -------------------------------------

    // ----------- Manage "Supprimer" button for each product -------------------
    // Pointing all buttons in tab
    let delButton = document.querySelectorAll(".del-button");
    // Looping the DOM to reach every instance of the button
    for (let i = 0; i < delButton.length; i++){
        // When clicking a button
        delButton[i].addEventListener("click", (event) => {
            event.preventDefault;
            // Find modal windows composant
            let modalFooter = document.querySelector(".modal-footer");
            removeAllChildNodes(modalFooter)                        
            // // ---------  Modal window management (create modal's footer buttons)
            document.getElementById("staticBackdropLabel").innerText=`Vous êtes sur le point de supprimer ${panier[i].nameProduct}`;
            document.querySelector(".modal-body").innerText =`Avec l'option ${panier[i].optionProduct}. En êtes vous sûr ? `;
            modalFooter.innerHTML += '<button id="cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>';
            modalFooter.innerHTML += '<button id="confirm" type="button" class="btn btn-warning">Confirmer</button>';  
            // In case of clicking cancel button
            document.getElementById("cancel").addEventListener('click', (e) =>{
                e.stopPropagation();
                // window.location.reload();
                })
            // In case of clicking confirm button, deleting the row
            document.getElementById("confirm").addEventListener('click', (e) =>{
                e.stopPropagation();
                eraseLine(i)
                })
        })
    }

    // Manage increment button
    let incButton = document.querySelectorAll(".inc");
    // Looping the DOM to reach every instance of the button
    for (let i = 0; i < incButton.length; i++){
            incButton[i].addEventListener("click", (event) => {
            event.preventDefault;
            // Add one article
            const removeArticle = () => {
                panier[i].quantityProduct= parseInt(panier[i].quantityProduct) + 1;
                localStorage.setItem("panier", JSON.stringify(panier));
                window.location.reload();
            }
            removeArticle();
        })
    }

    // Manage decriment button
    let decButton = document.querySelectorAll(".dec");
    // Looping the DOM to reach every instance of the button
    for (let i = 0; i < decButton.length; i++){
        if (panier[i].quantityProduct > 1){
            decButton[i].addEventListener("click", (event) => {
            event.preventDefault;
            // substract one article in the row 
            const addArticle = () => {
                panier[i].quantityProduct= parseInt(panier[i].quantityProduct) - 1;
                localStorage.setItem("panier", JSON.stringify(panier));
                window.location.reload();
                }
            addArticle();
            })
        } 
    }

    // Manage "Vider Panier" Button
    let emptyCart = document.getElementById("emptyCart");

    emptyCart.addEventListener("click", (e) => {
        e.preventDefault;
        e.stopPropagation();
        // Call Modal Window for confirmation
        let modalFooter = document.querySelector(".modal-footer");
        // removing all child element in Modal window's footer before creating buttons
        removeAllChildNodes(modalFooter)                        
            // // ---------  Modale window management
            document.getElementById("staticBackdropLabel").innerText=`Attention !`;
            document.querySelector(".modal-body").innerText =`Vous êtes sur le point de vider le panier. En êtes vous sûr ? `;
            modalFooter.innerHTML += '<button id="cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>';
            modalFooter.innerHTML += '<button id="confirm" type="button" class="btn btn-warning">Confirmer</button>';  
            // In case of clicking cancel button
            document.getElementById("cancel").addEventListener('click', (e) =>{
                e.preventDefault;
                e.stopPropagation();
                })
            // In case of clicking confirm button
            document.getElementById("confirm").addEventListener('click', (e) =>{
                e.preventDefault;
                e.stopPropagation();
                // Delete cart in LocalStorage
                localStorage.removeItem("panier");
                // Refresh the page
                window.location.reload();
                })
    })
   
  