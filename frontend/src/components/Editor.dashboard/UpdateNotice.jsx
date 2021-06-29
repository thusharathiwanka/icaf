import React, { useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL } from "../../config/config";


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

const NoticeUpdate = ({ Notices, id }) => {
  notice = Notices.filter((notice) => notice._id === id);
  const [topic, SetTopic] = useState(" ");
  const [content, SetContent] = useState(" ");


  
 
  useEffect(() => {
    SetTopic(notice[0].topic);
    SetContent(notice[0].content);
   }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    
    const Notice = {topic, content};
    console.log(Notice);

    fetch(`${BASE_URL}/notice/${id}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
        body: JSON.stringify(Notice)
    }).then(() => {
      toast.success("Notice updated !!");
    })
    .catch((error) => {
      toast.error("Notice not updated !!");
    });
}
    
    const classes = useStyles();
    return (
        <div className="NoticeUpdate">
         <ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
        <form className={classes.root} onSubmit={handleSubmit}>
    
          <TextField value={topic} placeholder={notice[0].topic} label="Notice Topic" onChange={(e)=>SetTopic(e.target.value) }  style={{ backgroundColor: "white" }} variant="outlined" />

                <TextField   value={content} label="Content" onChange={(e)=>SetContent(e.target.value) } style={{ backgroundColor: "white" }} multiline rows={5} variant="outlined" />

                          
                <button className="NoticeUpdate_submit" type="submit" >Update</button>
    
            </form>
          
        </div>
      );
}

export default NoticeUpdate;
