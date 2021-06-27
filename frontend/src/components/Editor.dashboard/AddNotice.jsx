import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from "../../config/config";
import { getUserId } from "../../auth/userAuth";


import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2.5),
        width: '50ch',
        },
       
    date: {
      width: '50ch',
      
    },
        upload: {
          marginRight: '350px',
          marginTop:'28px',
        }
   
    },
  }));



const AddNotice = () => {

  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleDateChange = (d) => {
    setSelectedDate(d);
  };
    

  const createdAt = selectedDate; //selectedDate.getFullYear() + '-' + selectedDate.getMonth() + '-' + selectedDate.getDay();

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const  createdBy = getUserId();
    const Notice = { createdAt, createdBy, topic, content};
    console.log(Notice);

    fetch(`${BASE_URL}/notice`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
        body: JSON.stringify(Notice)
    }).then(() => {
      console.log("New Notice added!!!");
      setIsSubmitted(true);  })

  

}





    const classes = useStyles();
    
  return (
    <div>  
      <div className="formhead">
      <h3 style={{fontSize:'18px',textAlign:'left',margin:'0px 200px 50px 15px',fontWeight:'lighter'}}>Add a New Notice</h3>
     </div>
    <div className="AddNotice">
     
      <form className={classes.root} onSubmit={handleSubmit} >
    
        <TextField label="Notice Topic" value={topic} style={{ backgroundColor: "white" }} onChange={(e)=>setTopic(e.target.value) } variant="outlined" />

        <TextField  label="Content" style={{ backgroundColor: "white" }} value={content} onChange={(e)=>setContent(e.target.value) }  multiline rows={8}variant="outlined" />

            
          <div className={classes.date} >
              <p style={{marginBottom:'8px',marginTop:'28px',marginRight:'130px',width:'25%',float:'left'}}>Date to be post  :</p>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}  style={{backgroundColor: 'white',float:'right',width:'75%'}}>
                    <KeyboardDatePicker margin="normal"  l id="date-picker-dialog" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{  'aria-label': 'change date', }} />
                    </MuiPickersUtilsProvider>
                   
            </div>   
    
          <div style={{marginTop:'50px'}}>
            <p className={ classes.upload}>Select a image: <button className="upload"><CloudUploadRoundedIcon color="action" /></button> </p>
                  </div>
           
            
            <button  className="input_submit" type="submit" >Submit</button>
    
            </form>
            </div>  
    </div>  );
}
 
export default AddNotice;