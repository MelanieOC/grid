//se da el evento click a cada imagen
var pictures= document.getElementsByClassName('transparente');

 for (var i = 0; i < pictures.length; i++) {
   pictures[i].onclick=function() {
     crearModel(this);
   }
 }

//se crea el model, con DOM
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
  var imagen = document.createElement('div');
  imagen.classList.add('modal');
  var img=document.createElement('img');
  img.src=e.nextSibling.nextSibling.src;
  imagen.appendChild(img);
  var p1=document.createElement('p');
  p1.innerHTML='Use this area of the page to describe your project. The icon above is part of a free icon set by <a>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!';
  var p2=document.createElement('p');
  p2.innerHTML='Client: <a>Start Bootstrap</a> <br>Date: <a>April 2014</a><br>Service: <a>Web Development</a>';
  var close2=document.createElement('button');
  close2.innerHTML='x Close';
  close2.classList.add('submit');
  close2.onclick=function() {
  	e.parentNode.removeChild(e.parentNode.lastChild);
  }
  div.appendChild(close);
  div.appendChild(h1);
  div.appendChild(title);
  div.appendChild(imagen);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(close2);
  e.parentNode.appendChild(div);
}

//evento con el scroll, para resaltar la seccion donde se encuentra
window.addEventListener("scroll", function () {
var currentScroll=window.pageYOffset || document.body.scrollTop;
 if (currentScroll > 200) {
 	document.getElementsByClassName('main')[0].style.padding="20px";
   	document.getElementById('title').style.fontSize="1.5em";
 }else {
 	document.getElementsByClassName('main')[0].style.padding="30px";
   	document.getElementById('title').style.fontSize="2.2em";
 }

 if (currentScroll>600 && currentScroll < 1330) {
   document.getElementById('link-portfolio').classList.add("resaltar");
 }else {
   document.getElementById('link-portfolio').classList.remove("resaltar");
 }
 if(currentScroll >= 1330 && currentScroll < 2050 ){
   document.getElementById('link-about').classList.add("resaltar");
 }else {
   document.getElementById('link-about').classList.remove("resaltar");
 }

 if(currentScroll >= 2050){
   document.getElementById('link-contact').classList.add("resaltar");
 }else {
   document.getElementById('link-contact').classList.remove("resaltar");
 }
});


//Para que el 'label' de los input aparezca
var inputs=document.getElementsByClassName('formulario');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.onfocus=function() {
    enFoco(this);
  }
  function enFoco(e) {
  	e.parentNode.firstChild.style.display='block';
  		e.parentNode.firstChild.style.color='#18bc9c';
  }
  input.onblur=function(){ //y cambie de color cada vez que no este enfocado
  	sinFoco(this);
  }
  function sinFoco(e) {
  	e.parentNode.firstChild.style.color='black';
  	if(e.value==''){
  		e.parentNode.firstChild.style.display='none';
  	}
  }
}


//validacion de formulario
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var phone = document.getElementById('number');
var message = document.getElementById('message');
var send = document.getElementById('send');
send.onclick=function() {
  validateForm();
}

var text=function(d, no) { //texto que da el mensaje de 'error'
  if(d.nextSibling){
    d.parentNode.removeChild(d.parentNode.lastChild);
  }
  var span=document.createElement('li');
  span.classList.add('error');
  span.innerHTML=no;
  if(no.length>1){
    d.parentNode.appendChild(span);
  }
}

function validateForm(){
	 event.preventDefault();
		var validaciones = true;

		if (nombre.value == "") {
			text(nombre, "Please enter your name.");
			validaciones =  validaciones && false;
		} else {
			validaciones = validaciones && true;
      text(nombre, '');
		}

		if (email.value === "") {
			text(email, "Please enter your email address.");
			validaciones = validaciones && false;
		} else if(!(/\S+@\S+\.\S+/.test(email.value))) { //valida si tiene los caracteres de un email
			text(email, "Not a valid email address");
			validaciones = validaciones && false;
		} else {
			validaciones = validaciones && true;
      text(email, '');
		}

		if (phone.value === "") {
			text(phone, "Please enter your phone number.");
			validaciones = validaciones && false;
		} else if(isNaN(phone.value)) { //valida si es un numero
			text(phone, "Not a valid phone number.");
			validaciones = validaciones && false;
		} else {
			validaciones = validaciones && true;
      text(phone, '');
		}
    
		if (message.value === "") {
			text(message, "Please enter a message.");
			validaciones = validaciones && false;
		} else {
			validaciones = validaciones && true;
      text(message, '');
		}

		if (validaciones) { //cuando todo es 'valido' se borra los inputs
			nombre.value = "";
			email.value = "";
			phone.value = "";
			message.value = "";
      for (var i = 0; i < inputs.length; i++){
        inputs[i].parentNode.firstChild.style.display='none';//se borra los labels
        if(inputs[i].nextSibling){ //se borra los mensajes de error
          inputs[i].parentNode.removeChild(inputs[i].parentNode.lastChild);
        }
      }
		}

};
