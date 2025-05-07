window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
  }, 4500); // Time to hide intro and show main
});
