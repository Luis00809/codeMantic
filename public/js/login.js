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

  document
    .querySelector('.loginBtn')
    .addEventListener('click', loginFormHandler);




