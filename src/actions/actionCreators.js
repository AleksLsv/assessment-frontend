import {AppActionType} from './actionTypes';
import { fetchShipments } from '../api/api';


export function fetchShipmentsRequest() {
    return {
        type: AppActionType.FETCH_SHIPMENTS_REQUEST,
    };
}

export function fetchShipmentsSuccess(shipments) {
    return {
        type: AppActionType.FETCH_SHIPMENTS_SUCCESS,
        shipments,
    };
}

export function loadedFromFile(shipments) {
    return {
        type: AppActionType.LOADED_FROM_FILE,
        shipments,
    };
}

export function fetchShipmentsFailure(error) {
    return {
        type: AppActionType.FETCH_SHIPMENTS_FAILURE,
        error,
    };
}

export const deleteShipment = (orderNo) => ({type: AppActionType.DELETE_SHIPMENT, orderNo});

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
