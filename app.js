const request = require('request-promise-native');

const endpoint = 'https://www.thomascook.com/api/meta/search';
const airportsBody = {"entities": [{"type": "AIRPORTS"}], "ids": ["0"]};
const destinationsBody = {"entities":[{"type":"DESTINATIONS"}],"ids":["any"]};

const getResponse = async (url, body) => {
    return await request.post({
        url: url,
        body: body,
        json: true
    })
};

const getAirports = async () => {
    return await getResponse(endpoint, airportsBody);
};

const getDestinations = async () => {
    return await getResponse(endpoint, destinationsBody);
};

const requests = [getAirports(), getDestinations()];
(async () => {
    const responses = await Promise.all(requests);
    responses.forEach((item) => {
        console.log(JSON.stringify(item, null, 2));
    })
})();
