const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const img = document.querySelector('.banner-img');
const tagLine = document.querySelector('.tagLine');
const dotSelected = document.querySelector('.dot_selected');
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);}

function showSlides(n) {


	if(n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}


	slides[slideIndex - 1].style.display = 'block';
}

arrowRight.addEventListener('click',() => {
console.log('flèche de droite')
showSlides
}),

arrowLeft.addEventListener('click',() => {
console.log('flèche de gauche')
showSlides
})





  
  
  
  
