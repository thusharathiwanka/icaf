import React,{useEffect,useState} from 'react'
import './style/noticeacception'
import { BASE_URL } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoticeAccept = () => {

let [Notices, setNotices] = useState([])
const [Click,setClick] = useState("")

useEffect(async()=>{
    const resNotice = await fetch(`${BASE_URL}/admin/notice/pending`);
    const notice = await resNotice.json()
    setNotices(notice)
},[Click])

const Approvehandle = async(id)=>{
        const res = await fetch(`${BASE_URL}/admin/accept/${id}`,{
            method : "PATCH",
            headers:{
          "Content-Type": "application/json",
				
            }
        })

        if(res.ok){
            toast.success("Successfully Approved")
            setClick(id)
        }
}

const Rejecthandle = async(id)=>{
    const res = await fetch(`${BASE_URL}/admin/reject/${id}`,{
            method : "PATCH",
            headers:{
          "Content-Type": "application/json",
				
            }
        })
        if(res.ok){
            toast.success("Successfully Rejected")
            setClick(id)
        }
}
    return (
        <div >

            {Notices.map((notice)=>(
                    <div className="NoticeCard" key = {notice._id} >
                    <h3 className="topics">{notice.topic}</h3>
                    <h3 className="date">{new Date(notice.createdAt).toDateString()}</h3>
                    <h3 className="contents">{notice.content}</h3>
                    <button className="approve" onClick={()=>Approvehandle(notice._id)}>Approve</button>
                    <button className="reject" onClick={()=>Rejecthandle(notice._id)}>Reject</button>
                    </div> )
            )}


            <ToastContainer position="top-center" />
        </div>
    )
}

export default NoticeAccept
