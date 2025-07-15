
// Toggle mobile menu visibility with animation

  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }
  
  // Close mobile menu when clicking any menu link
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.add('hidden');
    });
  });


  // Hide all, then show the clicked one
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();  // Stop default anchor jump

    // Get target section id from href
    const targetId = link.getAttribute('href').substring(1);

    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = 'none';
    });

    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    // Optionally, close mobile menu if open (if you have one)
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// this is my js