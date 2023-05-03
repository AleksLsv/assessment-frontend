import {
    FETCH_SHIPMENTS_REQUEST,
    FETCH_SHIPMENTS_SUCCESS,
    FETCH_SHIPMENTS_FAILURE, DELETE_SHIPMENT,
} from './actionTypes';
import { fetchShipments } from '../api/api';


export function fetchShipmentsRequest() {
    return {
        type: FETCH_SHIPMENTS_REQUEST,
    };
}

export function fetchShipmentsSuccess(shipments) {
    return {
        type: FETCH_SHIPMENTS_SUCCESS,
        shipments,
    };
}

export function fetchShipmentsFailure(error) {
    return {
        type: FETCH_SHIPMENTS_FAILURE,
        error,
    };
}

export const deleteShipment = (orderNo) => ({type: DELETE_SHIPMENT, orderNo});

export function fetchShipmentsData() {
    return (dispatch) => {
        dispatch(fetchShipmentsRequest());
        return fetchShipments()
            .then((response) => {
                dispatch(fetchShipmentsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchShipmentsFailure(error));
            });
    };
}



/*export function fetchShipmentsData() {
    return (dispatch) => {
        dispatch(fetchShipmentsRequest());
        try {
            return fetchShipments()
                .then((response) => {
                    dispatch(fetchShipmentsSuccess(response.data));
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            // if error occurs, try to load from file
            return fetch('../assets/data/shipments.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(fetchShipmentsSuccess(data));
                })
                .catch((error) => {
                    dispatch(fetchShipmentsFailure(error));
                });
        }
    };
}*/
