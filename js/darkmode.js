document.addEventListener('DOMContentLoaded', function () {
  // Dark mode functionality
  const darkModeSwitch = document.getElementById('darkmode-switch');
  const body = document.body;
  const sililogo = document.querySelector('#sililogo img'); // Select the image inside the anchor
  const appstore = document.querySelector('#appstore img'); // Select the image inside the anchor
  const playstore = document.querySelector('#playstore img'); // Select the image inside the anchor
  const testimonials = document.querySelector('#testimonials img'); // Select the image inside the anchor
  const IconBoxPhone = document.querySelector('#icon-box-phone img'); // Select the image inside the anchor
  const IconBoxMessage = document.querySelector('#icon-box-message img'); // Select the image inside the anchor

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
          if (IconBoxPhone) IconBoxPhone.src = 'images/icon-box-phone-dark.svg';
          if (IconBoxMessage) IconBoxMessage.src = 'images/icon-box-message-dark.svg';
      } else {
          // Remove dark mode class
          body.classList.remove('dark');

          // Revert image sources to light mode versions
          if (sililogo) sililogo.src = 'images/sililogo.svg';
          if (appstore) appstore.src = 'images/appstore.svg';
          if (playstore) playstore.src = 'images/playstore.svg';
          if (testimonials) testimonials.src = 'images/testimonials.svg';
          if (IconBoxPhone) IconBoxPhone.src = 'images/icon-box-phone.svg';
          if (IconBoxMessage) IconBoxMessage.src = 'images/icon-box-message.svg';
      }
  }

  // Event listener for the dark mode switch
  darkModeSwitch.addEventListener('change', toggleDarkMode);

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const accordionItem = header.parentElement;

          // Toggle the "active" class to open/close the accordion
          accordionItem.classList.toggle('active');

          // Close any other opened accordion items
          const openAccordions = document.querySelectorAll('.accordion-item.active');
          openAccordions.forEach(item => {
              if (item !== accordionItem) {
                  item.classList.remove('active');
                  
              }
          });

          // Remove focus after click to prevent lingering hover effect on mobile
          header.blur(); // Removes focus after click
      });

      // Add touchstart event to remove hover or active class on mobile devices
      header.addEventListener('touchstart', () => {
          header.classList.remove('hover'); // Remove hover or active classes
      });
  });
});
