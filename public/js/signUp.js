const signupFormHandler = async (event) => {
    event.preventDefault();
  
     // Collect user information
    const display_name = document.querySelector('#display-name').value.trim();
    const email = document.querySelector('#signup-email-login').value.trim();
    const password = document.querySelector('#signup-password-login').value.trim();
    const pronouns = document.querySelector('#my-pronouns').value.trim();
    const age = document.querySelector('#myAge').value.trim();



    // Collect form information
    const checkedLanguages = Array.from(document.querySelectorAll('input[type="checkbox"][name="language"]:checked + label'));
    const selectedLang = checkedLanguages.map(label => label.textContent);
    const languages = selectedLang.join(',');
    const personality_type = document.querySelector('#personality').value
    const bio = document.querySelector('#bio').value.trim();
    const hobbies = document.querySelector('#my-hobbies').value.trim();
    const operating_system = document.querySelector('#myOperatingSystem').value.trim();
    const partner_pronouns = "she"
    const contact_method = document.querySelector('#signup-email-login').value.trim();
    const ageRange = '20-40'

    // Log collected data for debugging
    console.log(languages)
    console.log(personality_type)
    console.log(bio);
    console.log(hobbies)
    console.log(operating_system)
    console.log(partner_pronouns)
    console.log(contact_method);
    console.log(ageRange);


// if bad request check length requirement *****

    if (email && password) {
      const response = await fetch('/api/users/signup', {
        // Send POST request to sign up user
        method: 'POST',
        body: JSON.stringify({ display_name, email, password, pronouns, age, }),
        headers: { 'Content-Type': 'application/json' },
      });

      // Retrieve user data from the response
      const user = await response.json();
      sessionStorage.setItem('userId', user.id)
      // if doesnt work try User.id

      const userForm = sessionStorage.getItem('userId');
      console.log(userForm);

      // Send POST request to create a form associated with user
      const createForm = await fetch('/api/form/', {
        method: 'POST',
        body: JSON.stringify({languages, personality_type, bio, hobbies, operating_system, partner_pronouns, contact_method, ageRange, userForm}),
        headers: { 'Content-Type': 'application/json' },
      })

      // Retrieve form data from the response
      const form = await createForm.json();

      
    console.log('User created:', user);
    console.log('Form created:', form);


      if (response.ok) {
        document.location.replace(`/profile/user/${user.id}`);
      } else {
        alert(response.statusText);
      }
    }
  };


  document
    .querySelector('.signupBtn')
    .addEventListener('click', signupFormHandler);
