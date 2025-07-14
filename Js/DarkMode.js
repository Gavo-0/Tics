document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  // Por defecto, modo claro
  if (!body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
  }
  // Estado guardado en localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
  });
});