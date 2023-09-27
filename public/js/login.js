const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(email)
    console.log(password)
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        // Parse the response to get the user's ID
        const { user } = await response.json();
        // Redirect to the user's profile page using their ID
        document.location.replace(`profile/user/${user.id}`);
        
      } else {
        alert(response.statusText);
        console.log(err)
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#display-name').value.trim();
    const email = document.querySelector('#signup-email-login').value.trim();
    const password = document.querySelector('#signup-password-login').value.trim();
    const myPronouns = document.querySelector('#my-pronouns').value.trim();
    const myAge = document.querySelector('#myAge').value.trim();
    const myOperatingSystem = document.querySelector('#myOperatingSystem').value.trim();
    const myLanguages = document.querySelector('input[name="language"]:checked').value;
    const myPersonality = document.querySelector('input[name="personality"]:checked').id;
    const bio = document.querySelector('#bio').value.trim();
    const myHobbies = document.querySelector('#my-hobbies').value.trim();
    
  
    if (email && password) {
      const response = await fetch('/api/users', {
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

 

  // document
  //   .querySelector('.loginBtn')
  //   .addEventListener('click', loginFormHandler);

    document
    .querySelector('.signupBtn')
    .addEventListener('click', signupFormHandler);

    // document
    // .querySelector('#aboutSignUpBtn')
    // .addEventListener('click', signupFormHandler);



//   const loginButtons = document.querySelectorAll('.loginBtn');

// loginButtons.forEach(button => {
//   button.addEventListener('click', loginFormHandler);        
// });

// const submitButtons = document.querySelectorAll('.signup');

// submitButtons.forEach(button => {
//   button.addEventListener('click', signupFormHandler);   

// });