// import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'


const API_ENDPOINT = 'https://api.deezer.com'


export default {
    search(val, order) {
        return fetchJsonp(`${API_ENDPOINT}/search?q=${val}&order=${order}&output=jsonp`)
            .then(response => response.json())
            .then(response => response.data)
            .then(response => {
                if (response.error === 1){
                    return Promise.reject(response)
                } else {
                    return Promise.resolve(response)
                }
            })
    },
}
