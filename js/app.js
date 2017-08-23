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
