import React,{useEffect,useState} from 'react'
import {Doughnut ,defaults} from 'react-chartjs-2'
import {Chart} from 'chart.js'
import './style/piechart.css'
import { BASE_URL } from "../../config/config";


Chart.defaults.plugins.legend.position = 'bottom'
const Piechart = (props) => {

//     let [aCount,setACount] = useState(0)
//     let [rCount,setRCount] = useState(0)
//     let [pCount,setPCount] = useState(0)

    
useEffect(async(e) =>{
//         const resAttendee = await fetch(`${BASE_URL}/admin/attendeecount`);
//         const attendeeData = await resAttendee.text()

//         const resResearcher = await fetch(`${BASE_URL}/admin/researcherscount`);
//         const researcherData = await resResearcher.text();

//         const resPresenter = await fetch(`${BASE_URL}/admin/presenterscount`);
//         const presenterData = await resPresenter.text();

//         setACount(attendeeData);
//         setRCount(researcherData);
//         setPCount(presenterData);

 },[])
 


  const attendee =parseInt(props.attendee) 
  const researcher = parseInt(props.researcher)
  const presenter =  parseInt(props.presenter)

const total = attendee+researcher+presenter;
const aPercentage = Math.round((attendee / total) * 100);
const rPercentage = Math.round((researcher/ total) * 100);
const pPercentage = Math.round((presenter / total) * 100);


const data = {
  labels: [
    `Attendee ${aPercentage}%`,
    `Researcher  ${rPercentage}%`,
    `Presenter ${pPercentage}%`
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [props.attendee,props.researcher,props.presenter],
    backgroundColor: [
      'rgb(229, 57, 53)',
      'rgb(251, 140, 0)',
      'rgb(25 118 210)'
    ],
    hoverOffset: 4
  }]
};

const options = { 
  cutout :180,
   maintainAspectRatio: false,
   
    plugins: {
            legend: {
                labels: {
                    font: {
                        size: 25
                    }
                  }
            },
  }
}

    return (
        
            <div className ="chart" > 
              <Doughnut
                data={data}
                options={options} 
              />
        </div>
    )
}

export default Piechart
