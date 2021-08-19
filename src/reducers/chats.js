import {
    ADD_CHAT, DELETE_CHAT
} from "../actions/chats";

const initialState = {

};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            }
        }
        case DELETE_CHAT: {
            delete state[action.payload.chatId]

            return {
                ...state,
            }
        }
        default:
            return state;
    }
}


export default chatsReducer;