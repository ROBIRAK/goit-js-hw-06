const form = document.querySelector('form.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;
  
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    console.log({
      email: emailInput.value,
      password: passwordInput.value,
    });
    
    event.currentTarget.reset();
  }
});
