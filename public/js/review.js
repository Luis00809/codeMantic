async function commentHandler(event) {
    event.preventDefault();
  
    const review_text = document.querySelector(".#Review_text").value.trim(); 
  
    if (review_text) {
      const response = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify({
          review_text,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.submitBtn');addEventListener('submit', commentHandler); /* change .commentValue to hook into review.handlebars */