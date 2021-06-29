import React,{useEffect,useState} from 'react'
import Count from "./Count"
import Piechart from './Piechart'
import Barchart from './Barchart';
import Table from './Table';
import './style/admin.css'
import { BASE_URL } from "../../config/config";
import {getUserToken} from '../../auth/userAuth'

const admin = () => {

    let [aCount,setACount] = useState(0)
    let [rCount,setRCount] = useState(0)
    let [pCount,setPCount] = useState(0)
    let [researchPapers,setresearchPapers] = useState([])
    let [workshopPapers,setworkshopPapers] = useState([])
    let [Tcontent, setTcontent] = useState([])


useEffect (async() => {
        const resAttendee = await fetch(`${BASE_URL}/admin/attendeecount`);
        const attendeeData = await resAttendee.text()

        const resResearcher = await fetch(`${BASE_URL}/admin/researcherscount`);
        const researcherData = await resResearcher.text();

        const resPresenter = await fetch(`${BASE_URL}/admin/presenterscount`);
        const presenterData = await resPresenter.text();

        const resResearchpapers = await fetch(`${BASE_URL}/publication`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
        const Researchpaper = await resResearchpapers.json();

        const resWorkshoppapers = await fetch(`${BASE_URL}/workshop`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
        const Workshoppaper = await resWorkshoppapers.json();

       
        setresearchPapers(Researchpaper.publications)
        setworkshopPapers(Workshoppaper.workshops)
        setTcontent([Researchpaper.publications,Workshoppaper.workshops])

        if(presenterData != null){
         setACount(attendeeData);
         setRCount(researcherData);
         setPCount(presenterData);
            }
    
}, [])
console.log(Tcontent);


    return (
        <div style={{marginBottom: "100px"}}>
            <Count attendee={aCount} researcher={rCount} presenter={pCount}/>
            <Barchart ResearchPapers = {researchPapers} WorkshopPapers = {workshopPapers}/>
            <Piechart attendee={aCount} researcher={rCount} presenter={pCount}/>
            <div className="researchTable">
            <Table Tablecontent = {researchPapers} topic ={"Research Papers"}/>
            </div>
            <div className="workshopsTable">
            <Table Tablecontent ={workshopPapers} topic ={"Workshops"}/>  
            </div>
        </div>

    )
    
}

export default admin
