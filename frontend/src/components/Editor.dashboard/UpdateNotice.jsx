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
  const [isSubmit, setSubmit] = useState(false);


  
  useEffect(() => {
    SetTopic(notice[0].topic);
    SetContent(notice[0].content);
  }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

const Notice = { topic, content };
console.log(Notice);

if ((notice[0].topic === Notice.topic) && (notice[0].content === Notice.content)) {
        
  toast.warning("Same data please update!!!");
}
else {

    fetch(`${BASE_URL}/notice/${id}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
        body: JSON.stringify(Notice)
    }).then(() => {
      console.log("updated");
      setSubmit(true);
        toast.success("Notice updated !!");
      
    })
    .catch((error) => {
      toast.error(error);
    });
      }
    
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
        {isSubmit ? <h3 style={{ textAlign: 'center', color: 'green' }}>Sucessfully Updated !!!!</h3> :
          
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField value={topic} placeholder={notice[0].topic} label="Notice Topic" onChange={(e) => SetTopic(e.target.value)} style={{ backgroundColor: "white" }} variant="outlined" />
          <TextField value={content} label="Content" onChange={(e) => SetContent(e.target.value)} style={{ backgroundColor: "white" }} multiline rows={5} variant="outlined" />
          <button className="NoticeUpdate_submit" type="submit" >Update</button>
        </form>}
          
        </div>
      );
}

export default NoticeUpdate;
