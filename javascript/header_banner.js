document.addEventListener('scroll', () => {
    const hiddenElement = document.getElementById('logo_name_banner');
    const scrollThreshold = 100; 
  
    if (window.scrollY > scrollThreshold) {
      hiddenElement.style.display = 'flex'; 
    } else {
      hiddenElement.style.display = 'none'; 
  
    }
  });
  