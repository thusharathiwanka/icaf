import React from 'react'
import {FaUserCircle} from  'react-icons/fa'
import './style/profileCard.css'

const profileCard = () => {

    return (
        <div className="profile">
            <FaUserCircle className = "usericon"/>
            <h3 className="name">Hi, Admin</h3>
        </div>
    )
}

export default profileCard
