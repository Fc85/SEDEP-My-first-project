//////////////////////////////////////////////////// SLIDER

// Définition de la variable pour le slide par défaut
var slideIndex = 1;

// Controle des bouton suivant/précédent
function plusSlides(n, o, p) {
  showSlides(slideIndex += n, o, p);
}

// Controle des cercles
function currentSlide(n, o, p) {
  showSlides(slideIndex = n, o, p);
}

//Initialisation des sliders
function initSlider(){

  document.getElementsByClassName('terrassement')[slideIndex-1].style.display = "block"; //Apparition de l'image
  document.getElementsByClassName('cercle_terrassement')[slideIndex-1].className += " active"; //Changement du cercle actif sous les slides
  
  document.getElementsByClassName('voirie')[slideIndex-1].style.display = "block"; //Apparition de l'image
  document.getElementsByClassName('cercle_voirie')[slideIndex-1].className += " active"; //Changement du cercle actif sous les slides

  document.getElementsByClassName('revetement')[slideIndex-1].style.display = "block"; //Apparition de l'image
  document.getElementsByClassName('cercle_revetement')[slideIndex-1].className += " active"; //Changement du cercle actif sous les slides

  document.getElementsByClassName('soutenement')[0].style.display = "block"; //Apparition de l'image
  document.getElementsByClassName('cercle_soutenement')[0].className += " active"; //Changement du cercle actif sous les slides
}

// Controle du changement de slide
function showSlides(n, o, p) {
  var i;
  var slides = document.getElementsByClassName(o); //Récupération des éléments avec la classe "snow_slide"
  var dots = document.getElementsByClassName(p); //Récupération des éléments avec la classe "cercle"
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //Disparition de l'image
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //Remplacement de la classe par active
  }
  slides[slideIndex-1].style.display = "block"; //Apparition de l'image
  dots[slideIndex-1].className += " active"; //Changement du cercle actif sous les slides
}

//////////////////////////////////////////////////// MODAL

// Zoomer l'image
function zoomIn(i){
  document.getElementById(i).style.display='block'; //Change le style de la balise en display: block;
}

// Dezoomer l'image
function zoomOut(j){
  document.getElementById(j).style.display='none'; //Change le style de la balise en display: none;
}

//////////////////////////////////////////////////// MENU BURGER

// Afficher le menu
function afficherMenu(){

  document.getElementById('burger').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('close').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('nav_liste').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('nav_icons').style.display = "block"; //Change le style de la balise en display: block;
}

//Cacher le menu
function cacherMenu(){

  document.getElementById('burger').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('close').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('nav_liste').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('nav_icons').style.display = "none"; //Change le style de la balise en display: none;
}

//////////////////////////////////////////////////// MENU ENGINS

// Afficher le menu
function afficherEngins(){

  document.getElementById('more').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('less').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('engins_liste').style.display = "block"; //Change le style de la balise en display: block;
}

//Cacher le menu
function cacherEngins(){

  document.getElementById('more').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('less').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('engins_liste').style.display = "none"; //Change le style de la balise en display: none;
}