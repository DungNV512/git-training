import { UPDATE_DATA } from './action';

const initialState =  {
    users: [],
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state, users: action.payload
            };
        default:
            return state
    }
}
