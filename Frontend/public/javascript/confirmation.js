// Get informations from LocalStorage
let rtnMessage = JSON.parse(localStorage.getItem("confirmation")); 

//Calcul du montant global du panier  
let totalCommand = 0;
    for (let i in rtnMessage.products){
        totalCommand += parseInt(rtnMessage.products[i].price);
    }
totalCommand = formatPrice(totalCommand);
    



// Define page constructor
const constructor =`<div class="container mt-5 py-5 bg-white vh-100">
                    <div class="row mt-5">
                    <div class="col-12 mt-5 text-center align-middle">
                        <h1>Confirmation de commande.</h1>
                        <hr/ class="">
                        <h2>Merci pour votre confiance</h2>
                        <h2>M./Mme ${rtnMessage.contact.firstName} ${rtnMessage.contact.lastName} !</h2>
                        <h2> Vous avez bien dépensé vos sioux !</h2>
                        <br/>
                        <p>Nous vous confirmons que votre commande ${rtnMessage.orderId}, </p>
                        <p>d'un montant total de ${totalCommand} nous est bien parvenue</p>
                        <br/>
                        <a class="btn btn-warning" href="index.html">Retour à l'acceuil</a>
                    </div>
                    </div>
                    </div>`;

// Build HTML
let container = document.getElementById("confimContainer").innerHTML += constructor;
// Then delete localSorage
localStorage.removeItem("confirmation")