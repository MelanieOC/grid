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
  div.classList.add('grande');
  var img=document.createElement('img');
  img.src=e.nextSibling.nextSibling.src;
  div.appendChild(img);
  e.parentNode.appendChild(div);
}

window.addEventListener("scroll", function () {
var currentScroll=window.pageYOffset || document.body.scrollTop;
 console.log(currentScroll);
 if (currentScroll > 329) {
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