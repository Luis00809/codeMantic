let searchButton = document.querySelector
(`#partner-search`)

 searchButton.addEventListener('click', function() {
        // Redirect to a new page
        document.location.replace('/search')
});


// async function commentHandler(event) {
//         event.preventDefault();             // Prevent default form submission behavior
//         document.location.replace('/submitReview') 
//       }

//       document.querySelector('#leaveReviewForm').addEventListener('submit', commentHandler); /* change .commentValue to hook into review.handlebars */
//       console.log(commentHandler)

const form = document.querySelector('#leaveReviewForm')
if (form) {
        form.addEventListener('submit', async (event) => {
        event.preventDefault(); 
        const formData = new FormData(form)
        const reviewBadge = formData.get('#review_Badge')
        const reviewComments = formData.get('#review_Comments')
      try {
        const response = await fetch('/submitReview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            review_badge: reviewBadge,
            review_comments: reviewComments,
          }),
        });
        console.log (formData, reviewBadge, reviewComments)
      
        if (response.ok) {
                const newReview = await response.json();
        } 
       
        }       
        catch (error){
                console.error(error)
        }
      
});
}


let avatarArray = ['/assets/images/avatar_png_files/avatar_1.png','/assets/images/avatar_png_files/avatar_2.png','/assets/images/avatar_png_files/avatar_3.png','/assets/images/avatar_png_files/avatar_4.png','/assets/images/avatar_png_files/avatar_5.png','/assets/images/avatar_png_files/avatar_6.png','/assets/images/avatar_png_files/avatar_7.png','/assets/images/avatar_png_files/avatar_8.png','/assets/images/avatar_png_files/avatar_9.png','/assets/images/avatar_png_files/avatar_10.png','/assets/images/avatar_png_files/avatar_11.png','/assets/images/avatar_png_files/avatar_12.png','/assets/images/avatar_png_files/avatar_13.png','/assets/images/avatar_png_files/avatar_14.png']

function displayRandomImage() {
    var num = Math.floor(Math.random() * avatarArray.length);
    document.getElementById("randomImage").src = avatarArray[num];
}

window.onload = displayRandomImage;

