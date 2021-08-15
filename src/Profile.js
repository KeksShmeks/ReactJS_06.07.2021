import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { changeIsOnline } from "./actions/profile";

function Profile(props) {
    const dispatch = useDispatch()
    const { name, age, isOnline } = useSelector((state) => state.profile)

    const handleIsOnlineChange = (e) => {
        dispatch(changeIsOnline(e.target.checked))
    }

    return (
        <div>
            <p>Profile</p>
            <p> Name: 
                {name}
            </p>
            <p>
                Age: 
                {age}
            </p>

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
