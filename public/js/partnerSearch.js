let searchButton = document.querySelector
(`#partner-search`)


 searchButton.addEventListener('click', function() {
        // Redirect to a new page
        document.location.replace('/search')
});


let avatarArray = ['/assets/images/avatar_png_files/avatar_1.png','/assets/images/avatar_png_files/avatar_2.png','/assets/images/avatar_png_files/avatar_3.png','/assets/images/avatar_png_files/avatar_4.png','/assets/images/avatar_png_files/avatar_5.png','/assets/images/avatar_png_files/avatar_6.png','/assets/images/avatar_png_files/avatar_7.png','/assets/images/avatar_png_files/avatar_8.png','/assets/images/avatar_png_files/avatar_9.png','/assets/images/avatar_png_files/avatar_10.png','/assets/images/avatar_png_files/avatar_11.png','/assets/images/avatar_png_files/avatar_12.png','/assets/images/avatar_png_files/avatar_13.png','/assets/images/avatar_png_files/avatar_14.png']

function displayRandomImage() {
    var num = Math.floor(Math.random() * avatarArray.length);
    document.getElementById("randomImage").src = avatarArray[num];
}

window.onload = displayRandomImage;
