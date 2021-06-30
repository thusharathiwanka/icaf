import React,{useEffect,useState} from 'react'
import {Bar } from 'react-chartjs-2'
import './style/barchart.css'

const Barchart = (props) => {


  let [rApproved, setrApproved] = useState(0)
  let [rRejected, setrRejected] = useState(0)
  let [rPending, setrPending] = useState(0)
  let [wApproved, setwApproved] = useState(0)
  let [wRejected, setwRejected] = useState(0)
  let [wPending, setwPending] = useState(0)
  
useEffect(()=>{

 props.ResearchPapers.map((paper)=>{
    
      if(paper.isApproved == "approved"){
            rApproved += 1
      }else if(paper.isApproved == "rejected"){
            rRejected += 1
      }else{
          rPending += 1
      }
  })
  props.WorkshopPapers.map((paper)=>{
    
      if(paper.isApproved == "approved"){
            wApproved += 1
      }else if(paper.isApproved == "rejected"){
            wRejected += 1
      }else{
          wPending += 1
      }
  })
      setrApproved(rApproved)
      setrRejected(rRejected)
      setrPending(rPending)
      setwApproved(wApproved)
      setwRejected(wRejected)
      
      setwPending(wPending)
},[props.WorkshopPapers])
 
const data = {
  labels: ["Publications","Workshops"],
  datasets: [{
    label: 'Approved',
    data: [rApproved, wApproved],
    backgroundColor: 'rgb(26 51 93)',
    borderColor: [
      'rgb(23, 43, 77)',
    ],
    borderWidth: 1,
    borderRadius: 200,
    borderSkipped: false,
    barPercentage: 0.25,
    
   },
    {
        label: 'Rejected',
    data: [rRejected, wRejected],
    backgroundColor: 'rgb(224 218 218)',
    borderColor: [
      'rgb(146 142 142)',
    ],
    borderWidth: 1,
    borderRadius: 200,
    borderSkipped: false,
    barPercentage: 0.25,
    
    },
     {
        label: 'Pending',
    data: [rPending, wPending],
    backgroundColor: 'rgb(193 118 24)',
    borderColor: [
      'rgb(160 91 3)',
    ],
    borderWidth: 1,
    borderRadius: 200,
    borderSkipped: false,
     barPercentage: 0.25,
    
    }]}

const options = { 
   
responsive: true,
plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                  }
            }
        }
}

    return (
     
        <div className="barOutline" >
          <h1>Events</h1>
          <hr/>
        <div className="bar">
         <Bar 
           data = {data}
           options = {options}
         />
         </div>
        </div>
    )
}

export default Barchart
