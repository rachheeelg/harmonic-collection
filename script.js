function closeModal() {
  document.getElementById('welcomeModal').classList.add('hidden');
  sessionStorage.setItem('modalShown', 'true');
}

// Check if modal has already been shown this session
window.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('modalShown')) {
    document.getElementById('welcomeModal').classList.add('hidden');
  }
});

// Close modal when clicking outside the content
document.getElementById('welcomeModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});