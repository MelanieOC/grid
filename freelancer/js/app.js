window.addEventListener("scroll", function () {
var currentScroll=window.pageYOffset || document.body.scrollTop;
 console.log(currentScroll);
 if (currentScroll > 329) {
   document.getElementsByTagName('nav')[0].classList.add("nav-container-min");
   document.getElementById('txtBootstrap').style.fontSize="21px";
 }else {
   document.getElementsByTagName('nav')[0].classList.remove("nav-container-min");
   document.getElementById('txtBootstrap').style.fontSize="28px";
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
