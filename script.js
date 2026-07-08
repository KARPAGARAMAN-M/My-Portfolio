document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Elements
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuToggle.querySelector('.menu-icon');
  const closeIcon = menuToggle.querySelector('.close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Toggle mobile menu
  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Close mobile menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Scroll Active Links (Scroll Spy)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollSpy = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', scrollSpy);
  // Run once initially to highlight active link on load
  scrollSpy();

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      
      window.location.href = `mailto:karpagaraman1605@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Bind Resume buttons to the resume file download/view
  const resumeButtons = document.querySelectorAll('.download-btn-nav, .download-btn-mobile, .download-btn-hero');
  resumeButtons.forEach(btn => {
    btn.setAttribute('href', 'Karpagaraman-M-Resume.html');
    btn.setAttribute('download', '');
  });
});
