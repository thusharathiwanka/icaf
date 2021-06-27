import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import TextField from '@material-ui/core/TextField';

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

const NoticeUpdate = () => {


    const classes = useStyles();
    return (
        <div className="AddNotice">
        
            <form className={classes.root} >
    
                <TextField  label="Notice Topic" style={{ backgroundColor: "white" }} variant="outlined" />

                <TextField  label="Content" style={{ backgroundColor: "white" }} multiline rows={5} variant="outlined" />

                <div >
                    <div className={classes.date_upload} >
                   
                        <p className={classes.date}>Select a image: <button className="upload"><CloudUploadRoundedIcon color="action" /></button> </p>
                    </div>
    
                
                </div>
            
                <button className="input_submit" type="submit" style={{backgroundColor:'red'}} >Update</button>
    
            </form>
          
        </div>
      );
}

export default NoticeUpdate;
