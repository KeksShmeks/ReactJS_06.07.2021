import React from 'react'
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux'
import { PICTURE_REQUEST_STATUS } from '../reducers/picture'
import { fetchPicture, fetchPictureByAxios, setPicture } from '../actions/picture'


export default function Picture() {


    const { status, picture } = useSelector((state) => state.picture)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchPicture())
    const loadDataByAxios = () => dispatch(fetchPictureByAxios())
    const clearData = () => dispatch(setPicture([]))

    if (status === PICTURE_REQUEST_STATUS.LOADING) {
        return <p><CircularProgress /></p>
    }

    return (
        <div>
            <p>Funny Picture</p>
            <Button onClick={loadData}>Load Picture</Button>
            <Button onClick={loadDataByAxios}>Load Picture By Axios</Button>
            <Button onClick={clearData}>Clear Picture</Button>

            {status !== PICTURE_REQUEST_STATUS.ERROR ? (
                <div style={{ padding: '30px', boxsizing: 'border-box' }}>
                    {picture.map((newPic) => (
                    <img key={newPic.id} src={newPic.url} alt={newPic.id} width='50%' height='50%' />
                    ))}
                </div>
            ) : (
                <p style={{ color: 'red' }}>ERROR!!!</p>
            )}
        </div>
    )
}