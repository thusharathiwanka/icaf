import React,{useEffect,useState} from 'react'
import Count from "./Count"
import Piechart from './Piechart'
import Barchart from './Barchart';
import Table from './Table';
import { BASE_URL } from "../../config/config";

const admin = () => {

    let [aCount,setACount] = useState(0)
    let [rCount,setRCount] = useState(0)
    let [pCount,setPCount] = useState(0)


useEffect (async() => {
        const resAttendee = await fetch(`${BASE_URL}/admin/attendeecount`);
        const attendeeData = await resAttendee.text()

        const resResearcher = await fetch(`${BASE_URL}/admin/researcherscount`);
        const researcherData = await resResearcher.text();

        const resPresenter = await fetch(`${BASE_URL}/admin/presenterscount`);
        const presenterData = await resPresenter.text();
            if(presenterData != null){
         setACount(attendeeData);
         setRCount(researcherData);
         setPCount(presenterData);
            }
            
}, [])

    return (
        <div style={{marginBottom: "100px"}}>
            <Count attendee={aCount} researcher={rCount} presenter={pCount}/>
            <Barchart/>
            <Piechart attendee={aCount} researcher={rCount} presenter={pCount}/>
            <Table/>
        </div>

    )
    
}

export default admin
