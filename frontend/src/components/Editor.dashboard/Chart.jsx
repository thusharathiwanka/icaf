import React, { useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import { BASE_URL } from "../../config/config";





  

const NoticesChart = () => {

 
  const [Approve, SetApprove] = useState(null);
  const [Reject, SetReject] = useState(null);
  const [Pending, SetPending] = useState(null);

  const [count, SetCount] = useState(new Array());
 

 

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


    let year = new Date(Date.now()).getFullYear();
      const resMonth = await fetch(`${BASE_URL}/notice/year/${year}`);
      const MonthCount = await resMonth.text();
      SetCount(MonthCount);

  }, []);
  

  


  console.log(count[8]);
  
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

  const state_1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Monthly added number of notices',
        backgroundColor: [
          "rgb(60,186,159,0.1)",
              
        ],
        data: [count[6], count[8], count[10], count[12], count[14], count[16], count[18], count[20], count[22], count[24], count[26], count[28]],
        borderColor: [
          "#3cba9f",
                  
        ],
        hoverBackgroundColor: [
          "rgb(60,186,159,0.1)",
                  
        ],
        borderWidth: 2,
      }
    ]
    

  };
 
 
    
  
  


    return (
      <div className="NoticesChart">
        <div className="chart_head">
        <h2 style={{fontSize:'17px',textAlign:'left',margin:'25px 200px 40px 15px',fontWeight:'lighter'}}>Notices appproval</h2>
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
        <h2 style={{fontSize:'17px',textAlign:'left',margin:'25px 20px 40px 15px',fontWeight:'lighter'}}>Notices added this Year (except deleted Notices)</h2>
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