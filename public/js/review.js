async function commentHandler(event) {
    event.preventDefault();             // Prevent default form submission behavior
  
    const review_text = document.querySelector(".#Review_text").value.trim();       // Get trimmed value of review text input field
  
    if (review_text) {       // Check if review text is not empty
      const response = await fetch('/api/review', {
        method: 'POST',                               // Send POST request to the '/api/review' endpoint
        body: JSON.stringify({
          review_text,                      // Send review text as JSON data in request body
        }),
        headers: {
          'Content-Type': 'application/json'      // Set request headers for JSON data
        }
      });
  
      if (response.ok) {
        document.location.reload();               // Reload current page
      } else {
        alert(response.statusText);               // Display alert with response status text in case of an error
      }
    }
  }
  
  document.querySelector('.submitBtn');addEventListener('submit', commentHandler); /* change .commentValue to hook into review.handlebars */