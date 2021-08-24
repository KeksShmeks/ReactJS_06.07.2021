import {
    SET_ERROR_STATUS,
    SET_IDLE_STATUS,
    SET_LOADING_STATUS,
    SET_PICTURE,
} from '../actions/picture'

export const PICTURE_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle',
}

const initialState = {
    picture: [],
    status: PICTURE_REQUEST_STATUS.IDLE,
}

export default function pictureReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: PICTURE_REQUEST_STATUS.IDLE,
            }
            case SET_LOADING_STATUS:
                return {
                    ...state,
                    status: PICTURE_REQUEST_STATUS.LOADING,
                }
                case SET_ERROR_STATUS:
                    return {
                        ...state,
                        status: PICTURE_REQUEST_STATUS.ERROR,
                    }
                    case SET_PICTURE: {
                        return {
                            ...state,
                            picture: action.payload.picture,
                        }
                    }
                    default:
                        return state
    }
}