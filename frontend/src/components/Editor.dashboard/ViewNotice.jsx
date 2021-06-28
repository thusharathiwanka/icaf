import React, { useState,useEffect} from "react";



const ViewNotice = ({Notices,id}) => {

  notice = Notices.filter((notice) => notice._id === id);
  console.log(notice);
  console.log(Notices);

   
  
   
  
  
  
  
  return (<div>
  
      
   <h1 className="ViewNotice_head">{notice[0].topic}</h1>
     
       
          <div className="ViewNotice_Body">
           <p className="ViewNotice_paragraph">{notice[0].content}</p> 
          </div>
         <button className="ViewNotice_delete">Delete</button>
    </div>);
}
 
export default ViewNotice;