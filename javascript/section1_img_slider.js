const slider = document.getElementById('slider');
let currentIndex = 0;
const images = slider.querySelectorAll('img').length; 
const slideWidth = 100; 

slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

function moveSlider(direction) {
  slider.style.transition = 'transform 0.8s ease-in-out';
  currentIndex += direction;
  
  
  if (currentIndex < 0) {
    currentIndex = images - 1; 
  } else if (currentIndex >= images) {
    currentIndex = 0; 
  }

  slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}


setInterval(() => {
  moveSlider(1);
}, 3000);
