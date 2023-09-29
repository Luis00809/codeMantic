const logout = async () => {
  const response = await fetch('/api/users/logout', {  // Send POST request to log user out
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  // Set request headers
  });

  if (response.ok) {
    document.location.replace('/');  // Redirect to homepage if logout is successful
  } else {
    alert(response.statusText);  // Display alert if logout fails
  }
};

document.querySelector('#logout').addEventListener('click', logout);  // Add click event listener to logout button
