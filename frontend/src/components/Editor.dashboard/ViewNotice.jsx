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
      notice[0] == [''];
    })
    .catch((error) => {
      toast.error(error);
    });
}
   
  
  
  
  
  return (<div>
    {IsDelete ? <div style={{ width: '500px',margin: '90px 50px 5px 150px',boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)',paddingTop: '10px',paddingBbottom: '25px',backgroundColor: '#f5f5f5d0',textAlign: 'center',height:'150px'} }><h3 style={{color:'red',textAlign:'center',margin:'50px 50px' } }>This Notice has been deleted !!!!</h3></div> :
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
    
        <h1 className="ViewNotice_head"> { notice[0].topic}</h1>
     
        
        <div className="ViewNotice_Body">
          <div className="ViewNotice_paragraph">
          
            <p >{ notice[0].content}</p>
          </div>
        </div>
        <button type="submit" className="ViewNotice_delete">Delete</button>
      </form>}
    </div>);
}
 
export default ViewNotice;