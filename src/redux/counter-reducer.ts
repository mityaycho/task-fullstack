

const INCREASE = 'Counter/INCREASE';

const initialState = {
    value: 1
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE:
            return {...state, value: state.value + 1};
        default:
            return state;
    }

    return state;
};

export const increase = () => ({});

export default reducer;