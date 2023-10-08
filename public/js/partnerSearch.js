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



const createReview = document.querySelector('#leaveReview')



createReview.addEventListener('click', async function() {
    const badge = document.querySelector('#reviewBadge').value;
    const Review_text = document.querySelector('#reviewComments').value;
    const form = document.querySelector('#personId');
    const review_id = form.dataset.id

    
    console.log(review_id);

  if (badge && Review_text) {
    const response = await fetch("/profile/submitReview", {
      method: 'POST',
      body: JSON.stringify({ badge, Review_text, review_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace(`/profile/user/${review_id}`);
    }

  }

})




let avatarArray = ['/assets/images/avatar_png_files/avatar_1.png','/assets/images/avatar_png_files/avatar_2.png','/assets/images/avatar_png_files/avatar_3.png','/assets/images/avatar_png_files/avatar_4.png','/assets/images/avatar_png_files/avatar_5.png','/assets/images/avatar_png_files/avatar_6.png','/assets/images/avatar_png_files/avatar_7.png','/assets/images/avatar_png_files/avatar_8.png','/assets/images/avatar_png_files/avatar_9.png','/assets/images/avatar_png_files/avatar_10.png','/assets/images/avatar_png_files/avatar_11.png','/assets/images/avatar_png_files/avatar_12.png','/assets/images/avatar_png_files/avatar_13.png','/assets/images/avatar_png_files/avatar_14.png']

function displayRandomImage() {
    var num = Math.floor(Math.random() * avatarArray.length);
    document.getElementById("randomImage").src = avatarArray[num];
}

window.onload = displayRandomImage;

