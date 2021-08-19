import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { changeIsOnline } from "../actions/profile";
import ProfileInfo from "./profileInfo";

function Profile() {
    const dispatch = useDispatch()
    const { name, age, isOnline } = useSelector((state) => state.profile)

    const handleIsOnlineChange = (e) => {
        dispatch(changeIsOnline(e.target.checked))
    }

    return (
        <div>
            <p>Profile</p>
            <ProfileInfo name={name} age={age}></ProfileInfo>

            <FormControlLabel
        control={
        <Checkbox
            checked={isOnline}
            onChange={handleIsOnlineChange}
        />
        }
        label="Online"
        />
        </div>
    )
}

export default Profile;
