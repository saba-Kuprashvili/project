document.addEventListener("DOMContentLoaded", () => {
  const form = {
    name: document.querySelector('input[placeholder="სახელი"]'),
    surname: document.querySelector('input[placeholder="გვარი"]'),
    email: document.querySelector('input[placeholder="ელ-ფოსტა"]'),
    phone: document.querySelector('input[placeholder="ტელეფონი"]'),
    country: document.querySelector('input[placeholder="ქვეყანა"]'),
    city: document.querySelector('input[placeholder="ქალაქი"]'),
    date: document.querySelector('input[placeholder="რეგისტრაციის თარიღი"]'),
    password: document.querySelector('input[placeholder="პაროლი"]'),
    confirmPassword: document.querySelector('input[placeholder="პაროლის დადასტურება"]'),
    button: document.getElementById('click')
  };

  const strengthIndicator = document.createElement('div');
  strengthIndicator.style.marginLeft = '215px';
  strengthIndicator.style.fontSize = '14px';
  strengthIndicator.style.marginTop = '-5px';
  strengthIndicator.style.marginBottom = '10px';
  
  const passwordRow = form.password.closest('.form-row');
  passwordRow.parentNode.insertBefore(strengthIndicator, passwordRow.nextSibling);

  function areAllFieldsFilled() {
    for (let field in form) {
      if (field !== 'button' && !form[field].value.trim()) {
        return false;
      }
    }
    return true;
  }

  function isEmailValid(email) {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function checkPasswordStrength(password) {
    if (!password) {
      return { message: '', color: 'black' };
    }

    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (hasLower && !hasUpper && !hasNumber) {
      return { 
        message: 'სუსტი პაროლი: მხოლოდ პატარა ასოები',
        color: 'red'
      };
    } 
    if ((hasLower && hasUpper && !hasNumber) || (hasLower && hasNumber && !hasUpper) || (hasUpper && hasNumber && !hasLower)) {
      return { 
        message: 'საშუალო პაროლი: აკლია ან დიდი ასო, ან პატარა ასო, ან რიცხვი',
        color: 'orange'
      };
    }
    if (hasLower && hasUpper && hasNumber) {
      return { 
        message: 'ძლიერი პაროლი',
        color: 'green'
      };
    }
    return { 
      message: 'პაროლი არ აკმაყოფილებს მოთხოვნებს',
      color: 'red'
    };
  }

  form.password.addEventListener('input', function() {
    const strength = checkPasswordStrength(this.value);
    strengthIndicator.textContent = strength.message;
    strengthIndicator.style.color = strength.color;
  });

  function saveToCookies() {
    const oneDay = 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneDay).toUTCString();
  
    for (let field in form) {
      if (field !== 'button') {
        document.cookie = `${field}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      }
    }
  
    for (let field in form) {
      if (field !== 'button') {
        document.cookie = `${field}=${form[field].value}; expires=${expires}; path=/`;
      }
    }
  }

  form.button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!areAllFieldsFilled()) {
      alert("გთხოვთ შეავსოთ ყველა ველი!");
      return;
    }

    if (!isEmailValid(form.email.value)) {
      alert("გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა!");
      return;
    }

    const strength = checkPasswordStrength(form.password.value);
    
    if (strength.message.includes('არ აკმაყოფილებს')) {
      alert(strength.message);
      return;
    }

    if (form.password.value !== form.confirmPassword.value) {
      alert("პაროლები არ ემთხვევა!");
      return;
    }

    saveToCookies();
    
    for (let field in form) {
      if (field !== 'button') {
        form[field].value = '';
      }
    }
    strengthIndicator.textContent = '';
    alert("რეგისტრაცია წარმატებით დასრულდა!");
  });
});
