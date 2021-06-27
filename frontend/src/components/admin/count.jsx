import React , {useState} from 'react'
import { BASE_URL } from "../../config/config";
import { useState } from "react";
import "./style/count.css"
import attendeeImg from "url:../../assets/images/attendee.png";
import researcherImg from "url:../../assets/images/research1.png";
import presenterImg from "url:../../assets/images/presenter.png"; 

const count = (props) => {

    return (
        <div>
            <div className ="squire">
                <h1 className = "h1_c">Attendee</h1>
                <label className = "labele_c">{props.attendee}</label>
                <img className="atendeeImg" src={attendeeImg} alt="img" />
                
            </div>
            <div className ="squire">
                <h1 className = "h1_c">Resercher</h1>
                <label className = "labele_c">{props.researcher}</label>
                <img className="researcherImg" src={researcherImg} alt="img" />
            </div>
            <div className ="squire">
                <h1 className = "h1_c">Presernter</h1>
                <label className = "labele_c">{props.presenter}</label>
                <img className="presenterImg" src={presenterImg} alt="img" />
            </div>
        </div>
    )
}

export default count
