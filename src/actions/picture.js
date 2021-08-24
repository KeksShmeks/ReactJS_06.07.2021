import transport from '../services/transport'
import { API_URL } from '../constants/constants'

export const SET_PICTURE = 'PICTURE::SET_PICTURE'
export const SET_ERROR_STATUS = 'PICTURE::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'PICTURE::SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'PICTURE::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })

export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })

export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })

export const setPicture = (picture) => ({
    type: SET_PICTURE,
    payload: {
        picture,
    },
})

export const fetchPicture = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus())

        fetch(API_URL)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    throw Error('You have some problems')
                }

                return response.json()
            })
            .then((responseJson) => {
                dispatch(setPicture(responseJson))
                dispatch(setIdleStatus())
            })
            .catch((error) => {
                console.error('error', error)

                dispatch(setErrorStatus())
            })
    }
}

export const fetchPictureByAxios = () => {
    return async (dispatch, getState) => {
        dispatch(setLoadingStatus())

        try {
            const { data } = await transport.get(API_URL)

            dispatch(setIdleStatus())
            dispatch(setPicture(data))
        } catch (error) {

            dispatch(setErrorStatus())
        }
    }
}