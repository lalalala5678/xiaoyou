document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('financialTechnology');
    const glass = document.querySelector('.glass');
  
    glass.style.backdropFilter = 'blur(2px) url(#glassFilter1)';
  
    document.querySelector('.glassDesign1').addEventListener('mouseover', function() {
      img.style.transform = 'scale(1.2)';
    });
  
    document.querySelector('.glassDesign1').addEventListener('mouseout', function() {
      img.style.transform = 'scale(1)';
    });
  });
  