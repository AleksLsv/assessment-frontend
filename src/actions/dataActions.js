export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";

export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});