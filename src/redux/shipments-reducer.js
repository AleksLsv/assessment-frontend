
import {AppActionType} from '../actions/actionTypes';

const initialState = {
    loading: false,
    shipments: [],
    error: null,
    loadedFromFile: false
};

function shipmentsReducer(state = initialState, action) {
    switch (action.type) {
        case AppActionType.FETCH_SHIPMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AppActionType.FETCH_SHIPMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                shipments: action.shipments,
                error: null,
            };
        case AppActionType.LOADED_FROM_FILE:
            return {
                ...state,
                loading: false,
                shipments: action.shipments,
                error: null,
                loadedFromFile: true
            };

        case AppActionType.FETCH_SHIPMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                shipments: [],
                error: action.error,
            };
        case AppActionType.DELETE_SHIPMENT:
            return {
                ...state, shipments: state.shipments.filter(ship => ship.orderNo !== action.orderNo)
            };

        default:
            return state;
    }
}

/*export const deleteShipment = (orderNo) => ({type: DELETE_SHIPMENT, orderNo})*/

export default shipmentsReducer;
