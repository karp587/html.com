document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('#projects button');
  
    projectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.classList.toggle('hidden');
      });
    });
  });