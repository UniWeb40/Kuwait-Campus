











// JavaScript for slideshow functionality
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
  slideIndex -= 1;
  showSlides(slideIndex);
}

function nextSlide() {
  slideIndex += 1;
  showSlides(slideIndex);
}

// Hide image captions by default
var captions = document.getElementsByClassName("slide-caption");
for (var i = 0; i < captions.length; i++) {
  captions[i].style.display = "none";
}

// Show image captions on hover or touch
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function() {
    this.parentNode.nextElementSibling.style.display = "block";
  });
  images[i].addEventListener("mouseout", function() {
    this.parentNode.nextElementSibling.style.display = "none";
  });
  images[i].addEventListener("touchstart", function() {
    this.parentNode.nextElementSibling.style.display = "block";
  });
  images[i].addEventListener("touchend", function() {
    this.parentNode.nextElementSibling.style.display = "none";
  });
}

// Automatic transition after 10 seconds
setInterval(function() {
  slideIndex++;
  showSlides(slideIndex);
}, 150000);
