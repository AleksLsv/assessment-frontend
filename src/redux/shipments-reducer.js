import {
    FETCH_SHIPMENTS_REQUEST,
    FETCH_SHIPMENTS_SUCCESS,
    FETCH_SHIPMENTS_FAILURE,
    DELETE_SHIPMENT,
} from '../actions/actionTypes';

const initialState = {
    loading: false,
    shipments: [],
    error: null,
    loadedFromFile: false
};

function shipmentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SHIPMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SHIPMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                shipments: action.shipments,
                error: null,
            };
        case FETCH_SHIPMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                shipments: [],
                error: action.error,
            };
        case DELETE_SHIPMENT:
            return {
                ...state, shipments: state.shipments.filter(ship => ship.orderNo !== action.orderNo)
            };

        default:
            return state;
    }
}

/*export const deleteShipment = (orderNo) => ({type: DELETE_SHIPMENT, orderNo})*/

export default shipmentsReducer;
