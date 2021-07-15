// contact: {
//     *   firstName: string,
//     *   lastName: string,
//     *   address: string,
//     *   city: string,
//     *   email: string
//     * }
//     * products: [string] <-- array of product _id
//     *

class commande  {
    constructor (firstName, lastName, address, city, email){
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
        this.city=city
        this.email=email
    }
}

let contact= {
    firstName: "toto",
    lastName: "Lateta",
    address: "Rue de la blague",
    city: "Totoville",
    email: "toto@totoworld.com"
    };

let products= ["5be1ed3f1c9d44000030b061","5be1ef211c9d44000030b062"];
const panierTest = { contact, products}
// console.log(panierTest);


const myCommande = new commande ("Yoann", "Perez", "route de Rouville", "Négreville", "yoann.perez@gmail.com");
// console.log(myCommande);

function sendPanier(panier){
    fetch("http://localhost:3000/api/cameras/order", {
	method: "POST",
	headers: { 
'Accept': 'application/json', 
'Content-Type': 'application/json' },
	body: JSON.stringify(panier)})
    .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (value) {
        let whatisthat = value;
        console.log(whatisthat); 
        alert(whatisthat.orderId);   
      })
      .catch(function (err) {
        window.alert("Erreur de connection réseau");
      });;

}

let btn = document.getElementById("send");
btn.addEventListener('click', function(){
    sendPanier(panierTest)
})
