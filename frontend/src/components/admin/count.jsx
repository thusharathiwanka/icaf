import React , {useState} from 'react'
import { BASE_URL } from "../../config/config";
import { useState } from "react";
import "./style/count.css"
import attendeeImg from "url:../../assets/images/attendee.png";
import researcherImg from "url:../../assets/images/research1.png";
import presenterImg from "url:../../assets/images/presenter.png"; 

const count = (props) => {
console.log(props);
//     let [aCount,setACount] = useState("0")
//     let [rCount,setRCount] = useState("0")
//     let [pCount,setPCount] = useState("0")

//     const counthadeler =async(e)=>{
//         const resAttendee = await fetch(`${BASE_URL}/admin/attendeecount`);
//         const attendeeData = await resAttendee.text()
//         setACount(attendeeData);
//         console.log(attendeeData)

//         const resResearcher = await fetch(`${BASE_URL}/admin/researcherscount`);
//         const researcherData = await resResearcher.text();
//         setRCount(researcherData);

//         const resPresenter = await fetch(`${BASE_URL}/admin/presenterscount`);
//         const presenterData = await resPresenter.text();
//         setPCount(presenterData);
        
// }
// counthadeler()
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
