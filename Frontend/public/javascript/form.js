 // Example starter JavaScript for disabling form submissions if there are invalid fields
 (function formValid () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    var valid = true;
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
                                        event.preventDefault()
                                        event.stopPropagation()
                                        console.log("false")
                                        } 
          form.classList.add('was-validated')
          }, false)
           
      })
      // console.log(forms.reportValidity())  
  })()

  // document.querySelector('')

  


  

