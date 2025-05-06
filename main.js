// Wait 4 seconds then switch from intro to main content
setTimeout(() => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 4000);
