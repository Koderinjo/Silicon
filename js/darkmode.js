//Got some help from ChatGPT with this.

document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkmode-switch');
    const body = document.body;
    const sililogo = document.querySelector('#sililogo img'); // Select the image inside the anchor
    const appstore = document.querySelector('#appstore img'); // Select the image inside the anchor
    const playstore = document.querySelector('#playstore img'); // Select the image inside the anchor
    const testimonials = document.querySelector('#testimonials img'); // Select the image inside the anchor
  
    // Function to toggle dark mode
    function toggleDarkMode() {
      if (darkModeSwitch.checked) {
        // Apply dark mode class
        body.classList.add('dark');
        
        // Change image sources to dark mode versions
        if (sililogo) sililogo.src = 'images/sililogo-dark.svg';
        if (appstore) appstore.src = 'images/appstore-dark.svg';
        if (playstore) playstore.src = 'images/playstore-dark.svg';
        if (testimonials) testimonials.src = 'images/testimonials-dark.svg';
      } else {
        // Remove dark mode class
        body.classList.remove('dark');
  
        // Revert image sources to light mode versions
        if (sililogo) sililogo.src = 'images/sililogo.svg';
        if (appstore) appstore.src = 'images/appstore.svg';
        if (playstore) playstore.src = 'images/playstore.svg';
        if (testimonials) testimonials.src = 'images/testimonials.svg';
      }
    }
  
    // Event listener for the dark mode switch
    darkModeSwitch.addEventListener('change', toggleDarkMode);
  });