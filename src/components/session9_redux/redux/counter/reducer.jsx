import { INCREASE, DECREASE } from './costants'

export const initialState = {
    count: 1
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            state = { ...state, count: state.count + 1 };
            return state;
        case DECREASE:
            state = { ...state, count: state.count - 1 };
            return state;
        default:
            return state;
    }
};
export default reducer;