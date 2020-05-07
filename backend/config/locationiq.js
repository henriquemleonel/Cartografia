const axios = require('axios');
module.exports = app => {
    let makeRequest = async _(street, county, city, state, number, postalcode) => {
        let privateToken = '9762fc0a5c9d2b'
        let number = number
        let street = street + ' , ' + number
        let county = county
        let city = city
        let state = state
        let postalcode = postalcode
        let data = {
            params: {

                street: street,
                county: county,
                city: city,
                state: state,
                postalcode: postalcode
            }
        }
        let url = 'https://us1.locationiq.com/v1/search.php?key=' + privateToken + '&format=json'
        let res = await axios.get(url, data).then(resp => resp).catch(err => err)
        let latitude = res.data[0].lat
        let longitude = res.data[0].lon
        return { lat: latitude, lon: longitude }
    }

    return { makeRequest }
}