const SPEED = 8000;
const IMAGES = ["slider-img-1.jpg", "slider-img-2.jpg", "slider-img-3.jpg"];

var counter = 0;

setInterval(() => {
  let hero = document.getElementById("hero");
  let path = `url(./assets/img/${IMAGES[counter]})`;
  hero.style.backgroundImage = path;
  counter++;
  if (counter > IMAGES.length - 1) {
    counter = 0;
  }
}, SPEED);
