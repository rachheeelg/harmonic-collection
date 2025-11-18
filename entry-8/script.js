// Set initial mode
document.body.classList.add('light-mode');

// Get elements
const lightSwitch = document.getElementById('lightSwitch');
const switchImage = document.getElementById('switchImage');

// Toggle function
lightSwitch.addEventListener('click', function() {
  const body = document.body;
  
  if (body.classList.contains('light-mode')) {
    // Switch to dark mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    switchImage.src = 'light switch-down.png';
    switchImage.alt = 'Light switch down';
  } else {
    // Switch to light mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    switchImage.src = 'light switch-up.png';
    switchImage.alt = 'Light switch up';
  }
});