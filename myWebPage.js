document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, );
  });

document.onscroll = function() {myFunction()};
function myFunction() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    	document.getElementById("exp").className = "experience";
        document.getElementById("skill").className = "skills";
        setTimeout(function(){
	        document.getElementById("one").className = "slideUp1";
	        document.getElementById("two").className = "slideUp2";
	        document.getElementById("tree").className = "slideUp3";
	        document.getElementById("four").className = "slideUp4";
	        document.getElementById("line").className = "slideDown";

    	},1000)
    }
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
   	    document.getElementById("port").className = "portfolio";
   	    document.getElementById("con").className = "contact";
    }
}




var i = 0;
var txt = 'Hello I am Suren, I was born in 1996. I studied and graduated from high school.Then I started studying at Yerevan State University, faculty of computer science and applied mathematics. Together with the university I studied at the Armenian Code Academy.';
var speedTypeWriter = 50;
typeWriter();

function typeWriter() {
  if (i < txt.length){
    document.getElementById("about").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speedTypeWriter);
  }
}



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



window.addEventListener('load', function(){
    var allimages= document.getElementsByClassName('fon');
    for (var i = 0; i < allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)
