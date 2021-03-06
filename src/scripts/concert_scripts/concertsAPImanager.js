const concertApiBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?"

const concertApiManager = {
    searchConcerts(concertSearch) {
        const url = concertApiBaseUrl + `keyword=${concertSearch}&city=nashville&` + concertsApiKey;
        return fetch(url).then(resp => resp.json());
    }
};