import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from "../../config/config";

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '50ch',
        },
        date: {
            minWidth: '25ch',
            float:'right',
            marginLeft:'30px',
        },

        
   
    },
  }));



const AddNotice = () => {

  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (d) => {
    setSelectedDate(d);
  };
    

  const createdAt = selectedDate.getFullYear() + '-' + selectedDate.getMonth() + '-' + selectedDate.getDay();

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const  createdBy = '60b00107e0a4e82e5810018f';
    const Notice = { createdAt, createdBy, topic, content};
    console.log(Notice);

    fetch(`${BASE_URL}/notice`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
        body: JSON.stringify(Notice)
    }).then(() => { console.log("New Notice added!!!"); })
}





    const classes = useStyles();
    
  return (
    <div>  
     <div className="formhead"></div>
    <div className="AddNotice">
     
      <form className={classes.root} onSubmit={handleSubmit} >
    
        <TextField label="Notice Topic" value={topic} style={{ backgroundColor: "white" }} onChange={(e)=>setTopic(e.target.value) } variant="outlined" />

        <TextField  label="Content" style={{ backgroundColor: "white" }} value={content} onChange={(e)=>setContent(e.target.value) }  multiline rows={5}variant="outlined" />

            <div >
          <div className={classes.date_upload} >
                   
                    <MuiPickersUtilsProvider utils={DateFnsUtils} className={ classes.date} style={{backgroundColor: 'white'}}>
                    <KeyboardDatePicker margin="normal"  label="Date to be post" id="date-picker-dialog" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{  'aria-label': 'change date', }} />
                    </MuiPickersUtilsProvider>
                    <p className={ classes.date}>Select a image: <button className="upload"><CloudUploadRoundedIcon color="action" /></button> </p>
            </div>   
    
                
            </div>
            
            <button  className="input_submit" type="submit" >Submit</button>
    
            </form>
            </div>  
    </div>  );
}
 
export default AddNotice;