// Smooth scroll carousel
function scrollCarousel(button, direction) {
  const carousel = button.parentElement.querySelector('.carousel');
  const scrollAmount = 220; // Adjust based on card width + gap
  
  if (direction === -1) {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  
  // Show success message (replace with actual backend call)
  alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon!`);
  
  // Reset form
  this.reset();
});

// Navbar shadow on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Fade in elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all skill cards and project cards
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Animate progress bars on scroll
const progressObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector('.progress-bar');
      if (progressBar) {
        progressBar.style.animation = 'fillProgress 1.5s ease-out';
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
  progressObserver.observe(card);
});

// Mobile menu toggle (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
  // Add any additional initialization here
  console.log('Portfolio site loaded successfully!');
});