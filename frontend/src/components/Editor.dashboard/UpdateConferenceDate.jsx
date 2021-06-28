import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import { BASE_URL } from "../../config/config";

const UpdateConferenceDate = () => {
     
  const [selectedDate, setSelectedDate] = useState(Date.now());
  
  const handleDateChange = (d) => {
    setSelectedDate(d);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const startDate = selectedDate;
    

    fetch(`${BASE_URL}/conference/${startDate}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
        
    }).then(() => {
      console.log("Conference date Updated!!!");
        })

  

}


  
  return (<div className="Update_conference">
    <form onSubmit={handleSubmit}>
                    <p style={{marginBottom:'8px',marginTop:'17px',marginRight:'10px',width:'25%',float:'left',fontWeight:'lighter'}}>conferrence date :</p>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} style={{ backgroundColor: 'white', float: 'right', width: '55%' }}>
        <KeyboardDatePicker margin="normal" l id="date-picker-dialog" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
        
      </MuiPickersUtilsProvider>
      <button className="Submit_Conference" type="submit" style={{ marginBottom: '8px', marginTop: '20px', marginRight: '1px', width: '100px', float: 'right', marginLeft: '9px', padding:'5px' ,fontWeight:'lighter',backgroundColor:'#000080',color:'white'}}>Update</button>
      </form>
    </div> );
}
 
export default UpdateConferenceDate;