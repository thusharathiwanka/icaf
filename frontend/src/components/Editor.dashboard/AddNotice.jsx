import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from "../../config/config";
import { getUserId } from "../../auth/userAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
      width: '50ch',
      
    },
        upload: {
          marginRight: '350px',
          marginTop:'28px',
        }
   
    },
  }));



const AddNotice = () => {
  const [topic, setTopic] = useState(" ");
  const [content, setContent] = useState(" ");
 
  
  const [selectedDate, setSelectedDate] = useState(Date.now());
  
  const handleDateChange = (d) => {
    setSelectedDate(d);
  };
    

  const tobePost = selectedDate; //selectedDate.getFullYear() + '-' + selectedDate.getMonth() + '-' + selectedDate.getDay();

  const reset_Submit = () => {
    setTopic(" ");
    setContent(" ");
    setSelectedDate(Date.now());
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const  createdBy = getUserId();
    const Notice = { tobePost, createdBy, topic, content};
    console.log(Notice);

    fetch(`${BASE_URL}/notice`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
        body: JSON.stringify(Notice)
    }).then(() => {
      toast.success(" New Notice Added succesfully !!");
      setTopic(" ");
      setContent(" ");
      setSelectedDate(Date.now());
     
    })
    .catch((error) => {
      toast.error("Error occurred!!");
    })
  

}





    const classes = useStyles();
    
  return (
    <div>  
      <div className="AddNotice_formhead">
      <h2 style={{fontSize:'18px',textAlign:'left',margin:'0px 200px 80px 15px',fontWeight:'lighter'}}>Add a New Notice</h2>
     </div>
    <div className="AddNotice">
    <ToastContainer
				position="top-center"
				autoClose={3000}
				showProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
        <form className={classes.root} id="ADD_Form" onSubmit={handleSubmit} onReset={reset_Submit} >
    
        <TextField label="Notice Topic" value={topic} style={{ backgroundColor: "white" }} onChange={(e)=>setTopic(e.target.value) } variant="outlined" />

        <TextField  label="Content" style={{ backgroundColor: "white" }} value={content} onChange={(e)=>setContent(e.target.value) }  multiline rows={8}variant="outlined" />

            
          <div className={classes.date} >
              <p style={{marginBottom:'8px',marginTop:'28px',marginRight:'130px',width:'25%',float:'left'}}>Date to be post  :</p>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}  style={{backgroundColor: 'white',float:'right',width:'75%'}}>
                    <KeyboardDatePicker margin="normal"  l id="date-picker-dialog" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{  'aria-label': 'change date', }} />
                    </MuiPickersUtilsProvider>
                   
            </div>   
    
        
            
          <button className="AddNotice_submit" type="submit" >Submit</button>
    
            </form>
            </div>  
    </div>  );
}
 
export default AddNotice;