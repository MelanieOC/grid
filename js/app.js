/*
 * Archivo principal de JS
 */
 var pictures= document.getElementsByClassName('transparente');

 for (var i = 0; i < pictures.length; i++) {
   pictures[i].onclick=function() {
     crearModel(this);
   }
 }

function crearModel(e) {
  var div=document.createElement('div');
  div.setAttribute('align', 'center');
  div.classList.add('grande');
  var close=document.createElement('button');
  close.innerHTML='X';
  close.classList.add('close');
  close.onclick=function() {
  	e.parentNode.removeChild(e.parentNode.lastChild);
  }
  var h1=document.createElement('h1');
  h1.innerHTML='project';
  var title=document.createElement('div');
  title.classList.add('star', 'dos');
  var img=document.createElement('img');
  img.src=e.nextSibling.nextSibling.src;
  var p1=document.createElement('p');
  p1.innerHTML='Use this area of the page to describe your project. The icon above is part of a free icon set by <a>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!';
  var p2=document.createElement('p');
  p2.innerHTML='Client: <a>Start Bootstrap</a> <br>Date: <a>April 2014</a><br>Service: <a>Web Development</a>';
  div.appendChild(close);
  div.appendChild(h1);
  div.appendChild(title);
  div.appendChild(img);
  div.appendChild(p1);
  div.appendChild(p2);
  e.parentNode.appendChild(div);
}

window.addEventListener("scroll", function () {
var currentScroll=window.pageYOffset || document.body.scrollTop;
 console.log(currentScroll);
 if (currentScroll > 300) {
 	document.getElementsByClassName('main')[0].style.padding="25px";
   	document.getElementById('title').style.fontSize="1.5em";
 }else {
 	document.getElementsByClassName('main')[0].style.padding="30px";
   	document.getElementById('title').style.fontSize="2.2em";
 }

 if (currentScroll>675 && currentScroll < 1508) {
   document.getElementById('link-portfolio').classList.add("resaltar");
 }else {
   document.getElementById('link-portfolio').classList.remove("resaltar");
 }
 if(currentScroll >= 1508 && currentScroll < 2062 ){
   document.getElementById('link-about').classList.add("resaltar");
 }else {
   document.getElementById('link-about').classList.remove("resaltar");
 }

 if(currentScroll >= 2062){
   document.getElementById('link-contact').classList.add("resaltar");
 }else {
   document.getElementById('link-contact').classList.remove("resaltar");
 }
});

// // VALIDACIÓN FORMULARIO // //
var inputs=document.getElementsByClassName('formulario');
for (var i = 0; i < inputs.length; i++) {
  var j = inputs[i];
  function nooo() {
    if(j.autofocus){
      j.parentNode.firstChild.style.display='block';
    }
  }
}

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var phone = document.getElementById('number');
var message = document.getElementById('message');
var send = document.getElementById('send');
send.onclick=function() {
  validateForm();
}
function validateForm(){
		event.preventDefault();
	// VALORES VALUE

		var validaciones = true;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	////// NOMBRE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO
		if (nombre.value == "") {
      console.log('hola');
			var rellenarText = document.createTextNode("Please enter your name.");
			nombre.parentNode.appendChild(labelErr("Please enter your name."));
			console.log("Nombre:" + name);
			validaciones = validaciones && false;
		} else {
			validaciones = validaciones && true;
		}
	////// EMAIL
		// VERIFICACIÓN DE CAMPOS VACÍOS
		if (email.value === "") {
			var rellenarText = document.createTextNode("Please enter your email address.");
			email.parentNode.appendChild(labelErr());
			console.log("Correo: " + email);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validEmail.test(email)) {
			var rellenarText = document.createTextNode("Este correo no es válido.");
			email.parentNode.appendChild(labelErr());
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Correo: " + email);
			validaciones = validaciones && true;
		}
	////// TELÉFONO
		// VERIFICACIÓN DE CAMPOS VACÍOS
		if (phone.value === "") {
			var rellenarText = document.createTextNode("Please enter your phone number.");
			phone.parentNode.appendChild(labelErr());
			console.log("Phone: " + phone);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validPhone.test(phone)) {
			var rellenarText = document.createTextNode("Este número no es válido.");
			phone.parentNode.appendChild(labelErr());
			console.log("Teléfono: " + phone + ". Tiene caracteres no permitidos.");
			validaciones = false;
		}
		// IMPRIMIR
		else {
			validaciones = true;
		}
	////// MENSAJE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO
		if (message.value === "") {
			var rellenarText = document.createTextNode("Please enter a message.");
			message.parentNode.appendChild(labelErr());
			validaciones = false;
		} else {
		// IMPRIMIR
			validaciones = true;
		}
	////// VACIAR CAMPOS
		if (validaciones == true) {
			name.value = "";
			email.value = "";
			phone.value = "";
			message.value = "";
		}

		function labelErr() {
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			return labelError;
		}
	////// FIN
};
