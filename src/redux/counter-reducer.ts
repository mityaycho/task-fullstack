import api from "../api/api";

const INCREASE = 'Counter/INCREASE';
const GET_INITIAL_VALUE_SUCCESS = 'Counter/GET_INITIAL_VALUE_SUCCESS';
const INCREASE_VALUE_SUCCESS = 'Counter/INCREASE_VALUE_SUCCESS';

interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 1
};

const reducer = (state: ICounterState = initialState, action: ICounterAction): ICounterState => {
    switch (action.type) {
        case INCREASE:
            return {...state, value: state.value + 1};

        case GET_INITIAL_VALUE_SUCCESS:
            return {...state, value: action.value};

        case INCREASE_VALUE_SUCCESS:
            return {...state, value: action.value};

        default:
            return state;
    }

    return state;
};

interface IIncreaseAction {
    type: typeof INCREASE;
}

interface IGetInitialValueSuccessAction {
    type: typeof GET_INITIAL_VALUE_SUCCESS;
    value: number;
}

interface IIncreaseValueSuccessAction {
    type: typeof INCREASE_VALUE_SUCCESS;
    value: number;
}

type ICounterAction = IIncreaseAction & IGetInitialValueSuccessAction & IIncreaseValueSuccessAction;

export const increase = (): IIncreaseAction => ({type: INCREASE});

export const getInitialValueSuccess = (value: number): IGetInitialValueSuccessAction => ({
    type: GET_INITIAL_VALUE_SUCCESS,
    value
});

export const increaseValueSuccess = (value: number): IIncreaseValueSuccessAction => ({
    type: INCREASE_VALUE_SUCCESS,
    value
});

export const getInitialValue = () => async (dispatch: any) => {
    let value = await api.counter.getValue();
    dispatch(getInitialValueSuccess(value));
};

export const increaseValue = () => async (dispatch: any, getState: any) => {
    let value = getState().counter.value;
    await api.counter.changeValue(value + 1);
    dispatch(increaseValueSuccess(value + 1));
};

export default reducer;