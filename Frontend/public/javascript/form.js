// Reach form values
var firstName;
document.getElementById("firstName").oninput = () => {
  firstName = document.getElementById("firstName").value;
}
var lastName;
document.getElementById("lastName").oninput = () => {
  lastName = document.getElementById("lastName").value;
}
var address;
document.getElementById("address").oninput = () => {
  address = document.getElementById("address").value;
}
var city;
document.getElementById("city").oninput = () => {
  city = document.getElementById("city").value;
}
var email;
document.getElementById("email").oninput = () => {
  email = document.getElementById("email").value;
}

let messageFinal;




 // Example starter JavaScript for disabling form submissions if there are invalid fields
 (function formValid () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
   
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
                                        event.preventDefault()
                                        event.stopPropagation()
                                        
                                        } else {
                                          event.preventDefault()
                                          event.stopPropagation()
                                          messageFinal = getContactList();
                                          sendPanier(messageFinal)
                                        }
          form.classList.add('was-validated')
          }, 
          
          false
          )
      })
 })()

let getContactList = () => {
  // Let create contact informations
  let contact = {
      firstName : firstName,
      lastName : lastName,
      address : address,
      city : city,
      email : email,
    }

  // Create list of id products and save it in products var
  let products = productsToSend ();

  let toSend = {contact, products}
  return toSend
}

function sendPanier(toSend){
  fetch("http://localhost:3000/api/cameras/order", {
  method: "POST",
  headers: { 
  'Accept': 'application/json', 
  'Content-Type': 'application/json' },
  body: JSON.stringify(toSend)})
    .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (value) {
        let whatisthat = value;
        alert(whatisthat.orderId);   
      })
      .catch(function (err) {
        window.alert("Erreur de connection réseau");
      });;

}
 






  






  


  

