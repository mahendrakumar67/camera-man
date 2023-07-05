// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  const targetPosition = targetSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Process the form data (e.g., send an email using a backend API)
  // You can add your custom code here to handle the form submission

  // Reset the form fields
  form.reset();

  // Display a success message
  alert('Your message has been sent successfully!');
}
