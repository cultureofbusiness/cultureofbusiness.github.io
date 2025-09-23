document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const overlay = document.querySelector('.menu-overlay');
  const closeBtn = document.querySelector('.close-btn');

  menuIcon.addEventListener('click', function() {
    overlay.classList.add('open');
  });

  closeBtn.addEventListener('click', function() {
    overlay.classList.remove('open');
  });

  // Optional: close overlay on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      overlay.classList.remove('open');
    }
  });
});