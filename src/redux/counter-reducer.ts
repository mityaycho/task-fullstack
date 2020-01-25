import api from "../api/api";


const INCREASE = 'Counter/INCREASE';
const GET_INITIAL_VALUE_SUCCESS = 'Counter/GET_INITIAL_VALUE_SUCCESS';

const initialState = {
    value: 1
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE:
            return {...state, value: state.value + 1};

        case GET_INITIAL_VALUE_SUCCESS:
            return {...state, value: action.value};

        default:
            return state;
    }

    return state;
};

export const increase = () => ({
    type: INCREASE
});

export const getInitialValueSuccess = (value: any) => ({
    type: GET_INITIAL_VALUE_SUCCESS,
    value
});

export const getInitialValue = () => async (dispatch: any) => {
    let value = await api.counter.getValue();
    dispatch(getInitialValue(value));
};

export default reducer;