const axios = require('axios');
module.exports = app => {
    async function requestLocation(street, county, city, state, number, postalcode) {
        let privateToken = '9762fc0a5c9d2b'
        let streetAndNumber = street + ' ,' + number
        let data = {
            params: {
                street: streetAndNumber,
                county: county,
                city: city,
                state: state,
                postalcode: postalcode
            }
        }
        let url = 'https://us1.locationiq.com/v1/search.php?key=' + privateToken + '&format=json'
        let res = await axios.get(url, data).then(resp => resp).catch(err => err)
        return res
    }

    return { requestLocation }
}