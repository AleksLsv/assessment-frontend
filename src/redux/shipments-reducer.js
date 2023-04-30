import {
    FETCH_SHIPMENTS_REQUEST,
    FETCH_SHIPMENTS_SUCCESS,
    FETCH_SHIPMENTS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
    loading: false,
    shipments: [],
    error: null,
};

export default function shipmentsReducer(state = initialState, action) {
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
        default:
            return state;
    }
}
