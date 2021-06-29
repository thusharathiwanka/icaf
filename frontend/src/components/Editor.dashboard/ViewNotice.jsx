import React, { useState,useEffect} from "react";
import { BASE_URL } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ViewNotice = ({Notices,id}) => {

  let [IsDelete, setDelete] = useState(false);
  notice = Notices.filter((notice) => notice._id === id);
  console.log(notice);
  console.log(Notices);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDelete(true);
    

    fetch(`${BASE_URL}/notice/delete/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*", },
       
    }).then(() => {
      toast.success("Notice Deleted");
      notice = Notices.filter((notice) => notice._id !== id);
      
    })
    .catch((error) => {
      toast.error("Notice not Deleted !!");
    });
}
   
  
  
  
  
  return (<div>
  
    <form onSubmit={handleSubmit}>
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
   <h1 className="ViewNotice_head"> {IsDelete ? ' ' : notice[0].topic}</h1>
     
       
      <div className="ViewNotice_Body">
        <div className="ViewNotice_paragraph">
          
        <p >{IsDelete ? ' ' : notice[0].content}</p> 
        </div>
          </div>
      <button type="submit" className="ViewNotice_delete">Delete</button>
      </form>  
    </div>);
}
 
export default ViewNotice;