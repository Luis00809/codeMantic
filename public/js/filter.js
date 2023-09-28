const filterHandler = async (event) => {
    event.preventDefault();
    const operating_system = document.querySelector('#operatingSystemsDrop').value;
    const personality_type = document.querySelector('#personalityTypesDrop').value;
    const language = document.querySelector('#programmingLanguagesDrop').value;
    const pronouns = document.querySelector('#partnerPronounsDrop').value;




    const url = new URL('/api/form/filteredList', 'http://localhost:3027');
    url.searchParams.append('operating_system', operating_system);
    url.searchParams.append('languages', language);
    url.searchParams.append('partner_pronouns', pronouns);
    url.searchParams.append('personality_type', personality_type);

    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });




    // const response = await fetch('/api/form/filteredList', {
    //     method: 'GET',
    //     body: JSON.stringify({ operating_system, personality_type, language, pronouns }),
    //     headers: { 'Content-Type': 'application/json' },
    // });

    if(response.ok) {
     window.location.href = 'http://localhost:3027/api/form/filteredList'

    }
};

document.querySelector('#applyFilterButton').addEventListener('click', filterHandler);