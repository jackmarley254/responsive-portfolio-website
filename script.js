document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values and trim spaces
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Regex for basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if all fields are filled and if email is valid
  if (!name || !email || !message) {
      displayMessage('Please fill in all fields.', 'error');
  } else if (!emailPattern.test(email)) {
      displayMessage('Please enter a valid email address.', 'error');
  } else {
      displayMessage('Message sent successfully!', 'success');
  }
});

// Function to display messages dynamically in the form
function displayMessage(message, type) {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.innerHTML = message;
  messageContainer.className = type === 'success' ? 'success' : 'error';
  messageContainer.style.display = 'block';
}

  