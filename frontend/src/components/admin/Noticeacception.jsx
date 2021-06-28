import React,{useEffect,useState} from 'react'
import './style/noticeacception'
import { BASE_URL } from "../../config/config";

const Noticeacception = () => {

let [Notices, setNotices] = useState([])

useEffect(async()=>{
    const resNotice = await fetch(`${BASE_URL}/admin/notice/pending`);
    const notice = await resNotice.json()
    setNotices(notice)
    console.log(notice);
},[])


    return (
        <div >

            {Notices.map((notice)=>(
                    <div className="NoticeCard" key = {notice._id} >
                    <h3 className="topics">{notice.topic}</h3>
                  <h3 className="date">{new Date(notice.createdAt).toDateString()}</h3>
                  <h3 className="contents">{notice.content}</h3>
                  <button className="approve">Approve</button>
                  <button className="reject">Reject</button>
                  </div>)
            )}

            
          
        </div>
    )
}

export default Noticeacception
