
const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const termsInput = document.getElementById('terms');
const resendButton = document.getElementById('resend-button');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const termsError = document.getElementById('terms-error');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearErrors() {
  [usernameError, emailError, passwordError, termsError].forEach(el => el.textContent = '');
  [usernameInput, emailInput, passwordInput].forEach(input => input.classList.remove('invalid'));
}

function validateForm() {
  clearErrors();
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    usernameError.textContent = 'Username is required.';
    usernameInput.classList.add('invalid');
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    emailInput.classList.add('invalid');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('invalid');
    isValid = false;
  }

  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Password is required.';
    passwordInput.classList.add('invalid');
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    passwordInput.classList.add('invalid');
    isValid = false;
  }

  if (!termsInput.checked) {
    termsError.textContent = 'You must agree to the terms and conditions.';
    isValid = false;
  }

  return isValid;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (validateForm()) {
    alert('Signup successful!');
    form.reset();
    clearErrors();
  }
});

function startResendCountdown() {
  let seconds = 10;
  resendButton.disabled = true;
  resendButton.textContent = `Resend Verification (${seconds}s)`;

  const timer = setInterval(() => {
    seconds -= 1;
    resendButton.textContent = `Resend Verification (${seconds}s)`;

    if (seconds <= 0) {
      clearInterval(timer);
      resendButton.disabled = false;
      resendButton.textContent = 'Resend Verification';
    }
  }, 1000);
}

resendButton.addEventListener('click', () => {
  if (!resendButton.disabled) {
    alert('Verification email resent.');
    startResendCountdown();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  startResendCountdown();
});