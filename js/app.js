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
 if (currentScroll > 200) {
 	document.getElementsByClassName('main')[0].style.padding="20px";
   	document.getElementById('title').style.fontSize="1.2em";
 }else {
 	document.getElementsByClassName('main')[0].style.padding="30px";
   	document.getElementById('title').style.fontSize="2.2em";
 }

 if (currentScroll>590 && currentScroll < 1280) {
   document.getElementById('link-portfolio').classList.add("resaltar");
 }else {
   document.getElementById('link-portfolio').classList.remove("resaltar");
 }
 if(currentScroll >= 1280 && currentScroll < 1980 ){
   document.getElementById('link-about').classList.add("resaltar");
 }else {
   document.getElementById('link-about').classList.remove("resaltar");
 }

 if(currentScroll >= 1980){
   document.getElementById('link-contact').classList.add("resaltar");
 }else {
   document.getElementById('link-contact').classList.remove("resaltar");
 }
});

var inputs=document.getElementsByClassName('formulario');
for (var i = 0; i < inputs.length; i++) {
  var j = inputs[i];
  j.onfocus=function() {
    nooo(this);
  }
  function nooo(e) {
  	e.parentNode.firstChild.style.display='block';
  		e.parentNode.firstChild.style.color='#18bc9c';

  }

  j.onblur=function(){
  	nop(this);
  }
  function nop(e) {
  	e.parentNode.firstChild.style.color='black';
  	if(e.value==''){
  		e.parentNode.firstChild.style.display='none';
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
		var validaciones = true;
	
		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		var text=function(d, no) {
			if(d.nextSibling){
				d.parentNode.removeChild(d.parentNode.lastChild);
			}
			var span=document.createElement('span');
			span.classList.add('error');
			span.innerHTML=no;
			d.parentNode.appendChild(span);
		}
		if (nombre.value == "") {
			text(nombre, "Please enter your name.");
			validaciones =  false;
		} else {
			validaciones = true;
		}
		if (email.value === "") {
			text(email, "Please enter your email address.");
			validaciones = false;
		}
		else if(!validEmail.test(email)) {
			text(email, "Este correo no es válido.");
			validaciones = false;
		}
		else {
			validaciones = true;
		}
		if (phone.value === "") {
			text(phone, "Please enter your phone number.");
			validaciones =  false;
		}
		else if(!validPhone.test(phone)) {
			text(phone, "Este número no es válido.");
			validaciones = false;
		}
		else {
			validaciones = true;
		}
		if (message.value === "") {
			text(message, "Please enter a message.");
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
