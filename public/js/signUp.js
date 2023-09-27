const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#display-name').value.trim();
    const email = document.querySelector('#signup-email-login').value.trim();
    const password = document.querySelector('#signup-password-login').value.trim();
    const myPronouns = document.querySelector('#my-pronouns').value.trim();
    const myAge = document.querySelector('#myAge').value.trim();
    const myOperatingSystem = document.querySelector('#myOperatingSystem').value.trim();

    const myLanguages = Array.from(document.querySelectorAll('#myLanguages input[name=language]:checked')).map(checkbox => checkbox.id.substring(5));

    const myPersonality = Array.from(document.querySelectorAll('#myPersonality input[name=personality]:checked')).map(checkbox => checkbox.id);

    const bio = document.querySelector('#bio').value.trim();
    const myHobbies = document.querySelector('#my-hobbies').value.trim();
    
  
    if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password,myPronouns, myAge,myOperatingSystem, myLanguages, myPersonality, bio, myHobbies }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(username, email, password,myPronouns, myAge,myOperatingSystem, myLanguages, myPersonality, bio, myHobbies)
  
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
