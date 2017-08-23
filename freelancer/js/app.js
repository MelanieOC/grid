window.addEventListener("scroll", function () {
var currentScroll=window.pageYOffset || document.body.scrollTop;
 console.log(currentScroll);
 if (currentScroll > 329) {
   console.log('hola');
 }else {
   console.log('no');
 }

 if (currentScroll>675 && currentScroll < 1508) {
   document.getElementById('link-portfolio').classList.add("bg-green-links");
 }else {
   document.getElementById('link-portfolio').classList.remove("bg-green-links");
 }
 if(currentScroll >= 1508 && currentScroll < 2062 ){
   document.getElementById('link-about').classList.add("bg-green-links");
 }else {
   document.getElementById('link-about').classList.remove("bg-green-links");
 }

 if(currentScroll >= 2062){
   document.getElementById('link-contact').classList.add("bg-green-links");
 }else {
   document.getElementById('link-contact').classList.remove("bg-green-links");
 }
});
