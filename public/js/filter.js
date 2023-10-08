const filterHandler = async (event) => {
    event.preventDefault();
    const operating_system = document.querySelector('#operatingSystemsDrop').value;
    const personality_type = document.querySelector('#personalityTypesDrop').value;
    const language = document.querySelector('#programmingLanguagesDrop').value;
    const pronouns = document.querySelector('#partnerPronounsDrop').value;

    const url = new URL('/api/form/filteredList', window.location.origin);

    if (operating_system !== "Select") {
        url.searchParams.append('operating_system', operating_system);
    }
    if (personality_type !== "Select") {
        url.searchParams.append('personality_type', personality_type);
    }
    if (language !== "Select") {
        url.searchParams.append('languages', language);
    }
    if (pronouns !== "Select") {
        url.searchParams.append('partner_pronouns', pronouns);
    }

    console.log(url)
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

   let path = url.pathname;
    console.log(url.search)
    if (response.ok) {
        // window.location.href = 'http://localhost:3027/api/form/filteredList';
        document.location.replace(`/api/form/filteredList${url.search}`);

    }
};

let avatarArray = ['/assets/images/avatar_png_files/avatar_1.png','/assets/images/avatar_png_files/avatar_2.png','/assets/images/avatar_png_files/avatar_3.png','/assets/images/avatar_png_files/avatar_4.png','/assets/images/avatar_png_files/avatar_5.png','/assets/images/avatar_png_files/avatar_6.png','/assets/images/avatar_png_files/avatar_7.png','/assets/images/avatar_png_files/avatar_8.png','/assets/images/avatar_png_files/avatar_9.png','/assets/images/avatar_png_files/avatar_10.png','/assets/images/avatar_png_files/avatar_11.png','/assets/images/avatar_png_files/avatar_12.png','/assets/images/avatar_png_files/avatar_13.png','/assets/images/avatar_png_files/avatar_14.png']

function displayRandomImage() {
    let elements = document.getElementsByClassName("card");
    for (var i=0; i < elements.length; i++) {
        var num = Math.floor(Math.random() * avatarArray.length);
        elements[i].querySelector('.randomImage').src = avatarArray[num];
    }
    
}

window.onload = displayRandomImage;


document.querySelector('#applyFilterButton').addEventListener('click', filterHandler);