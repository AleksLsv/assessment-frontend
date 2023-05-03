import axios from 'axios';

export function fetchShipments() {
    const url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
    return axios.get(url);
}
