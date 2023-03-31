'use strict';

const api_key = 'addaf3bbac3ade54de357b6527ba7d32';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
   fetch(url)
    .then((response) => response.json())
    .then((data) => {
        callback(data, optionalParam);
    })
};

export { imageBaseURL, api_key, fetchDataFromServer };
