// Simple JS styling addition
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('mouseover', () => {
      homeButton.style.color = 'red';
    });
    homeButton.addEventListener('mouseout', () => {
      homeButton.style.color = '';
    });
  });
  