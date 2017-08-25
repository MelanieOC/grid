var inputs=document.getElementsByClassName('formulario');
for (var i = 0; i < inputs.length; i++) {
  var j = inputs[i];
  j.onchange=function() {
    nooo(this);
  }
  function nooo(e) {
    if(e.value.length>0){
      e.parentNode.firstChild.style.display='block';
    }
  }
}
// // VALIDACIÓN FORMULARIO // //
var name = document.getElementById('nombre');
var email = document.getElementById('email');
var phone = document.getElementById('number');
var message = document.getElementById('message');

document.getElementById('send').addEventListener('click', validateForm);

function labelErr(e, error) {
  var labelError = document.createElement('label');
  labelError.classList.add('error');
  labelError.innerHTML=error;
  e.parentNode.appendChild(labelError);
}

function validateForm(){
		var validaciones = true;

		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (nombre.value === "") {
      nombre.parentNode.appendChild(labelErr("Please enter your name."));
			validaciones = false;
		} else {
			validaciones = true;
		}

		if (email.value === "") {
      labelErr(email, "Please enter your email address.")
			validaciones = false;
		} else if(!validEmail.test(email)) {
      labelErr(email, "Este correo no es válido.");
			validaciones = false;
		} else {
			validaciones = validaciones && true;
		}

		if (phone.value === "") {
      labelErr(phone, "Please enter your phone number." );
			validaciones = false;
		} else if(!validPhone.test(phone)) {
      labelErr(phone, "Este número no es válido.");
			validaciones = false;
		} else {
			validaciones = true;
		}

		if (message.value === "") {
			labelErr(message, "Please enter a message.");
			validaciones = false;
		} else {
			validaciones = true;
		}

		if (validaciones == true) {
			name.value = "";
			email.value = "";
			phone.value = "";
			message.value = "";
		}

};
