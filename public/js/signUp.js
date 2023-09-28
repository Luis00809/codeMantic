const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const display_name = document.querySelector('#display-name').value.trim();
    const email = document.querySelector('#signup-email-login').value.trim();
    const password = document.querySelector('#signup-password-login').value.trim();
    const pronouns = document.querySelector('#my-pronouns').value.trim();
    const age = document.querySelector('#myAge').value.trim();
    // const myOperatingSystem = document.querySelector('#myOperatingSystem').value.trim();

    const myLanguages = Array.from(document.querySelectorAll('#myLanguages input[name=language]:checked')).map(checkbox => checkbox.id.substring(5));

    const myPersonality = Array.from(document.querySelectorAll('#myPersonality input[name=personality]:checked')).map(checkbox => checkbox.id);

    const bio = document.querySelector('#bio').value.trim();
    const myHobbies = document.querySelector('#my-hobbies').value.trim();
    
  
    if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ display_name, email, password, pronouns, age, }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(display_name, email, password, pronouns, age,)
      console.log(response);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };


  document
    .querySelector('.signupBtn')
    .addEventListener('click', signupFormHandler);
