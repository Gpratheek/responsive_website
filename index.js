window.onload = () => {
  AOS.init({
    duration: 2000,
    once: true
  });
};


const header = document.querySelector('.header_js');
const initialHeight = 100; 
const reducedHeight = 50; 

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});