import axios from 'axios'

// DOC http://api-got.keepcoding.io/doc
const BASE_URL = 'http://api-got.keepcoding.io'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL
}

export function fetchHouses() {
    const url = '/casas'
    return axios.get(url)
}