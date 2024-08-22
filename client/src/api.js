import axios from "axios";

const SERVER_IP = 'http://localhost:8000';

function request(method, url, data=null) {
    return axios({
        method,
        url: `${url}`,
        data
    }).catch((error) => {
        console.log(error);
    });
}

export function incrementPets(id) {
    return request('PATCH', `${SERVER_IP}/api/pets/${id}/`);
}

export function getNumPets(id) {
    return request('GET', `${SERVER_IP}/api/pets/${id}/`);
}

export function getNewCat() {
    return request('GET', 'https://api.thecatapi.com/v1/images/search');
}