// Show Modal Window on Page Load
window.onload = function() {
    document.querySelector('.modal').style.display = 'block';
  };
  
  // Close Modal Window on Click
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
  });