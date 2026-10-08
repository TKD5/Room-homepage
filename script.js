
  // Select all slides (parents) and all navigation buttons across slides
  const slides = document.querySelectorAll('.parent, .parent2, .parent3');
  const leftBtns = document.querySelectorAll('.carousel-btn-left');
  const rightBtns = document.querySelectorAll('.carousel-btn-right');

  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  // Next slide function (loops back to first slide)
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Previous slide function (loops to last slide)
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Attach click event listeners to all arrow buttons
  rightBtns.forEach(btn => btn.addEventListener('click', nextSlide));
  leftBtns.forEach(btn => btn.addEventListener('click', prevSlide));

  // Keyboard navigation (Left / Right arrow keys)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function openNav() {
  navMenu.classList.add('open');
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevents scrolling while drawer is open
}

function closeNav() {
  navMenu.classList.remove('open');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

// Close menu on pressing 'Escape' key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    closeNav();
  }
});