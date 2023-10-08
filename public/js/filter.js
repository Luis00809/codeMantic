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

document.querySelector('#applyFilterButton').addEventListener('click', filterHandler);