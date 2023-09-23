async function commentHandler(event) {
    event.preventDefault();
  
    const review_text = document.querySelector(".commentValue").value.trim(); /* change .commentValue to hook into review.handlebars */
  
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
  
  document.querySelector('#comment-value');addEventListener('submit', commentHandler); /* change .commentValue to hook into review.handlebars */