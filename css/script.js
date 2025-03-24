// js/script.js
document.addEventListener('DOMContentLoaded', function () {
  // Toggle hamburger menu for mobile view
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
  
  // Toggle "Read More" functionality for all articles
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const moreContent = this.parentElement.querySelector('.more-content');
      if (moreContent) {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
          moreContent.style.display = 'block';
          this.textContent = 'Read Less';
        } else {
          moreContent.style.display = 'none';
          this.textContent = 'Read More';
        }
      }
    });
  });
});
