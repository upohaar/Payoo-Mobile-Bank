document.getElementById('btn-login').addEventListener('click', function() {
   const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const message = document.getElementById('message');
    const email = emailField.value;
    const password = passwordField.value;
  if (email === 'admin@test.com' && password === '1234') {
    alert('লগইন সফল হয়েছে!');
        window.location.href = 'dashboard.html';
      } 
    else {     
        message.innerText = 'ভুল ইমেইল অথবা পাসওয়ার্ড! আবার চেষ্টা করুন।';
        emailField.style.borderColor = 'red';
        passwordField.style.borderColor = 'red';
    }
});