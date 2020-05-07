// const axios = require('axios');

// async function makeRequest() {

//     const config = {
//         method: 'post',
//         url: 'http://localhost:4000/signin',
//         data: {
//             'email': 'rararara@ggagaga.com',
//             'password': 'qualquer-coisa'
//         }
//     }

//     let res = await axios(config).then(responsta => resposta).catch(problema => problema)

//     console.log(res.response.data);
// }

// makeRequest();

const axios = require('axios');
let makeRequest = async(street, county, city, state, number, postalcode) => {
    let privateToken = '9762fc0a5c9d2b'
    let streetAndNumber = street + ' , ' + number
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
    let latitude = res.data[0].lat
    let longitude = res.data[0].lon
    let teste = { lat: latitude, lon: longitude }
    return teste
}

// makeRequest('caxias do sul', 'campo grande', 'campo grande', 'mato grosso do sul', '314', '79010290')
let teste = makeRequest('caxias do sul', 'campo grande', 'campo grande', 'mato grosso do sul', '314', '79010290').then(res => console.log(res)).catch(err => err)