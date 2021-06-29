import React, { useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import { BASE_URL } from "../../config/config";





  

const NoticesChart = () => {

 
  const [Approve, SetApprove] = useState(null);
  const [Reject, SetReject] = useState(null);
  const [Pending, SetPending] = useState(null);

  const [January, SetJanuary] = useState(null);
  const [February, SetFebruary] = useState(null);
  const [March, SetMarch] = useState(null);
  const [April, SetApril] = useState(null);
  const [May, SetMay] = useState(null);
  const [June, SetJune] = useState(null);
  const [July, SetJuly] = useState(null);
  const [August, SetAugust] = useState(null);
  const [September, SetSeptember] = useState(null);
  const [October, SetOctober] = useState(null);
  const [November, SetNovember] = useState(null);
  const [December, SetDecember] = useState(null);

 

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


    for (let i = 1; i <= 12; i++) {
      const resMonth = await fetch(`${BASE_URL}/notice/month/${i}`);
      const MonthCount = await resMonth.text();
      if (i == 1) {
        SetJanuary(MonthCount);
      } else if (i == 2) {
        SetFebruary(MonthCount);
      }else if (i == 3) {
        SetMarch(MonthCount);
      }else if (i == 4) {
        SetApril(MonthCount);
      }else if (i == 5) {
        SetMay(MonthCount);
      }else if (i == 6) {
        SetJune(MonthCount);
      }else if (i == 7) {
        SetJuly(MonthCount);
      }else if (i == 8) {
        SetAugust(MonthCount);
      }else if (i == 9) {
        SetSeptember(MonthCount);
      }else if (i == 10) {
        SetOctober(MonthCount);
      }else if (i == 11) {
        SetNovember(MonthCount);
      }else if (i == 12) {
        SetDecember(MonthCount);
      }

    }

  }, []);
  




  console.log(June);
  
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
        data: [January, February, March, April, May, June, July, August, September, October, November, December],
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
        <h2 style={{fontSize:'17px',textAlign:'left',margin:'25px 20px 40px 15px',fontWeight:'lighter'}}>Notices added this Year</h2>
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