import {
    FETCH_SHIPMENTS_REQUEST,
    FETCH_SHIPMENTS_SUCCESS,
    FETCH_SHIPMENTS_FAILURE,
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
