import React from 'react';

import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';




const AddNotice = () => {
   
    
    return (<div className ="AddNotice">
        <form className="notice_form">

            <div >
                <label className="label_text">Topic: </label>
                <input className="input_text" type="text" name="topic" placeholder="Add topic"  />
            </div>
            <div  >
                <label className="label_text" style={{ marginTop: "10px" }}>Content: </label>
                <input className="input_text" style={{ height: "150px" }} type="text" name="Content" placeholder="Add Content" />
            </div>
            <div >
                <label className="label_date"> Date: </label>
                <input className="input_date" type="date" name="date"/>
            </div>
            <div >
                <p className="label_text">Select a image: <button><CloudUploadRoundedIcon color="action"/></button> </p>
            </div>
            <input  className="input_submit" type="submit" value="Submit"/>
    
        </form>
    </div>  );
}
 
export default AddNotice;