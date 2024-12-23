document.addEventListener('scroll', () => {
    const hiddenElement = document.getElementById('logo_name_banner');
    const scrollThreshold = 100; // Set when to show the element (e.g., after 50px)
  
    if (window.scrollY > scrollThreshold) {
      hiddenElement.style.display = 'flex'; // Show the element
    } else {
      hiddenElement.style.display = 'none'; // Hide the element
  
    }
  });
  