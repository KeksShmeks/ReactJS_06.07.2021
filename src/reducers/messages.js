import {
    ADD_MESSAGE
} from "../actions/messages";
import {
    AUTHOR
} from '../constants/constants';

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}


    chat1 : [
        {id: 'message1', text: 'Привет', author: AUTHOR.ME},
        {id: 'message2', text: 'Привет', author: AUTHOR.BOT}
    ],
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