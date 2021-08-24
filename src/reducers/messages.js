import {
    ADD_MESSAGE
} from "../actions/messages";


const initialState = {

};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state[action.payload.chatId];
            return {
                ...state,
                [action.payload.chatId]: [
                    ...currentList || [],
                    action.payload.message,
                    ], 
            };
        }
        default:
            return state;
    }
};

export default messagesReducer;