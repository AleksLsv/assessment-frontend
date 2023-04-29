const initialState = {
    shipments: [],
    loading: false,
    error: null,
};

const shipmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SHIPMENTS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SHIPMENTS_SUCCESS':
            return { ...state, loading: false, shipments: action.payload };
        case 'FETCH_SHIPMENTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default shipmentsReducer;
