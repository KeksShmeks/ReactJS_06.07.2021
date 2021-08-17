export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = 'CHAT::DELETE_CHAT'

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        id: chatId,
        name,
    }
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId,
    }
});