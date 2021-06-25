import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March'
             ],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
            "rgb(60,186,159,0.1)",
            "rgb(255,165,0,0.1)",
            "rgb(196,88,80,0.1)",
        ],
         data: [65, 59, 80],
            borderColor:[
                "#3cba9f",
                "#ffa500",
                "#c45850",
            ],
            hoverBackgroundColor: [
                "rgb(60,186,159,0.1)",
                "rgb(255,165,0,0.1)",
                "rgb(196,88,80,0.1)",
                ],
            borderWidth:2,
      }
    ]
  }
const NoticesChart = () => {
    return (
        <div className="NoticesChart">
            <div className="chart">
            <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
              },
              maintainAspectRatio: false 
          }}
        />
            
            </div>
            <div>
        <Bar  className="chart_1"
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>

            

        </div>);
}
 
export default NoticesChart;