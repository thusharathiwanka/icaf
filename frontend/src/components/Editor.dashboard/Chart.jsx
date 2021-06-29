import React, { useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import { BASE_URL } from "../../config/config";





  
const state_1 = {
    labels: ['January', 'February', 'March','April' ,'May' ,'June' ,'July','August' ,'September' ,'October' ,'November','December'
],
    datasets: [
        {
          label: 'Monthly added number of notices',
          backgroundColor: [
              "rgb(60,186,159,0.1)",
              
          ],
           data: [65, 59, 80,5,10,25,30, 1, 3,15,31,21],
              borderColor:[
                  "#3cba9f",
                  
              ],
              hoverBackgroundColor: [
                  "rgb(60,186,159,0.1)",
                  
                  ],
              borderWidth:2,
        }
      ]
    

}
const NoticesChart = () => {

 
  const [Approve, SetApprove] = useState(null);
  const [Reject, SetReject] = useState(null);
  const [Pending, SetPending] = useState(null);
 

  useEffect( async() => {
    const resApprove = await fetch(`${BASE_URL}/notice/approval/Approved`);
    const approvelCount = await resApprove.text();

    const resReject = await fetch(`${BASE_URL}/notice/approval/Rejected`);
    const rejectCount = await resReject.text();

    const resPending = await fetch(`${BASE_URL}/notice/approval/Pending`);
    const pendingCount = await resPending.text();

    SetApprove(parseInt(approvelCount));
    SetReject(parseInt(rejectCount));
    SetPending(parseInt(pendingCount));

  }, []);
  




  console.log(Approve);
  console.log(Reject);
  console.log(Pending);
  
  const state = {
    labels: ['Approved', 'Pending', 'Rejected'
    ],
    datasets: [
      {
         
        backgroundColor: [
          "rgb(60,186,159,0.1)",
          "rgb(255,165,0,0.1)",
          "rgb(196,88,80,0.1)",
        ],
        data: [Approve, Pending, Reject],
        borderColor: [
          "#3cba9f",
          "#ffa500",
          "#c45850",
        ],
        hoverBackgroundColor: [
          "rgb(60,186,159,0.1)",
          "rgb(255,165,0,0.1)",
          "rgb(196,88,80,0.1)",
        ],
        borderWidth: 2,
      }
    ]
  };
 
 
    
  
  


    return (
      <div className="NoticesChart">
        <div className="chart_head">
        <h3 style={{fontSize:'17px',textAlign:'left',margin:'25px 200px 40px 15px',fontWeight:'lighter'}}>Notices appproval</h3>
            </div>
            <div className="Doughnut_chart">
            <Doughnut
          data={state}
          options={{
            title:{
              display: true,
             
              fontSize:100
            },
            legend:{
              display:true,
              position:'right'
              },
              maintainAspectRatio: false 
          }}
        />
            
        </div>
        <div className="chart_head">
        <h3 style={{fontSize:'17px',textAlign:'left',margin:'25px 20px 40px 15px',fontWeight:'lighter'}}>Notices added this Year</h3>
        </div>
            <div>
        <Bar  className="Bar_chart"
          data={state_1}
          options={{
            title:{
              display:true,
              
              fontSize:50
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