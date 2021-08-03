let panier

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
        container.innerHTML += `<div class="container">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Article</th>
                                                <th scope="col">Option</th>
                                                <th scope="col">Quantité</th>
                                                <th scope="col">Prix</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tabBody">
                                            
                                        </tbody>
                                    </table>
                                </div>`
                                ;

        let toto = document.getElementById("tabBody");
        
        for (let i in panier)
        
        toto.innerHTML += `<tr>
                                <th scope="row">${i}</th>
                                <td>${panier[i].nameProduct}</td>
                                <td>${panier[i].optionProduct}</td>
                                <td>${panier[i].quantityProduct}</td>
                                <th scope="col">${panier[i].priceProduct}</th>
                            </tr>`
         
    }

                                            // <tr>
                                            //     <th scope="row">2</th>
                                            //     <td>Jacob</td>
                                            //     <td>Thornton</td>
                                            //     <td>@fat</td>
                                            //     <th scope="col">Prix</th>
                                            // </tr>