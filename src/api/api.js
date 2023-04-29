import axios from 'axios';

export const fetchDataFromServer = async () => {
    try {
        const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data from server.');
    }
};







/*import axios from "axios";
import dataFromFile from "../assets/data/shipments.json";


const instance = axios.create({
    baseURL: 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0',
});

export const dataAPI = {
    getPayload() {
        return instance.get(``)
            .then(res => {
                return res.data;
            });
    }
}*/

/*
import axios from "axios";

export const dataAPI = {
    getData: () => axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0"),
};*/
