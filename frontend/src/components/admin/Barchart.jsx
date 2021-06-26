import React,{useEffect,useState} from 'react'
import {Bar ,defaults} from 'react-chartjs-2'
import {Chart} from 'chart.js'
import './style/barchart.css'

const Barchart = () => {

const data = {
  labels: ["Research Papers","Workshop Papers"],
  datasets: [{
    label: 'Accepted',
    data: [65, 59],
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
        label: 'Rejectrd',
    data: [45, 39],
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
    data: [45, 39],
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
     
        <div className="bar" >

         <Bar 
           data = {data}
           options = {options}
         />
        </div>
    )
}

export default Barchart
