import React from 'react'
import {FaUserCircle} from  'react-icons/fa'
import './style/profileCard.css'

const profileCard = () => {

    return (
        <div className="profile">
            <FaUserCircle className = "usericon"/>
            <h1 className="name">Hi! Admin</h1>
        </div>
    )
}

export default profileCard
