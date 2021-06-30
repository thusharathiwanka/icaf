import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart} from 'chart.js'
import './style/piechart.css'


Chart.defaults.plugins.legend.position = 'bottom'
const Piechart = (props) => {

const attendee = parseInt(props.attendee) 
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
          <div className ="chartoutline" >
            <h1>Users</h1>
            <hr/>
            <div className ="piechart" >          
              <Doughnut
                data={data}
                options={options} 
              />
              </div>
        </div>
    )
}

export default Piechart
