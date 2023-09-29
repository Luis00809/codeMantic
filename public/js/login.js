const loginFormHandler = async (event) => {
  event.preventDefault();                             // Prevent default form submission behavior

  const email = document.querySelector('#email-login').value.trim();  // Collect values from the login form
  const password = document.querySelector('#password-login').value.trim();

  console.log(email);                                    // Log email for debugging
  console.log(password);                                 // Log password for debugging

  if (email && password) {
    const response = await fetch('/api/users/login', {    // Send a POST request to the API endpoint with login credentials
      method: 'POST',
      body: JSON.stringify({ email, password }),          // Convert login data to JSON
      headers: { 'Content-Type': 'application/json' },    // Set request headers
    });

    if (response.ok) {
      const { user } = await response.json();             // Parse response to get user's ID
      document.location.replace(`profile/user/${user.id}`);  // Redirect to user's profile page using their ID
    } else {
      alert(response.statusText);                        // Display alert if response is not okay
      console.log(err);                                  // Log any errors for debugging
    }
  }
};

document
  .querySelector('.loginBtn')
  .addEventListener('click', loginFormHandler);          // Add click event listener to login button, invoking loginFormHandler





