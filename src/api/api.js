import axios from 'axios';

export function fetchShipments() {
    return axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
}
