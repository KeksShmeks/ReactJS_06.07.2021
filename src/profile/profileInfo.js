import React from 'react'
import PropTypes from 'prop-types'

function ProfileInfo({name, age}) {
    return (
        <React.Fragment>
            <p> Name: 
                {name}
            </p>
            <p>
                Age: 
                {age}
            </p>
        </React.Fragment>
    )
}

ProfileInfo.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}

export default ProfileInfo