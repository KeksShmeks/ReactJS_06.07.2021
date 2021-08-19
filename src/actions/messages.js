import {
    AUTHOR
} from '../constants/constants';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    }
});

export const addMessageBot = (chatId, message) => {
    return (dispatch, getState) => {
        dispatch(addMessage(chatId, message))


        let timeout = setTimeout(() => {
            dispatch(addMessage(chatId, {
                id: `message${Date.now()}`,
                author: AUTHOR.BOT,
                text: "Привет, добрый человек!"
            }))
            clearTimeout(timeout)
        }, 1500)
    }
}