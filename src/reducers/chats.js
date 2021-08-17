import {
    ADD_CHAT, DELETE_CHAT
} from "../actions/chats";

const initialState = {
    chat1: {
        id: 'chat1',
        name: 'Чат 1',
    },
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
                // currentChat => currentChat.filter((chat) => chat.id !== chatId)
            }
        }
        default:
            return state;
    }
}


export default chatsReducer;