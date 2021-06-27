import React from "react";
import AddNotice from "../components/Editor.dashboard/AddNotice";
import NoticeList from "../components/Editor.dashboard/NoticesList";
import NoticesChart from "../components/Editor.dashboard/Chart";
import ViewNotice from "../components/Editor.dashboard/ViewNotice";
import '../pages/styles/Editor.css';
import Update from '../components/Editor.dashboard/UpdateNotice';


const Editor_dash = () => {
	return (
		<div className="editor">
			
			{/*<div className="welcome">
				<center>
					<h1>Welcome Back MR EDITOR !!!</h1>
				</center>
	</div>*/}
			<div className="main">
		    <AddNotice />		
			<NoticesChart />
			
			
             
			</div>
			<div >
				
				<NoticeList />
				<Update/>
				
			</div>
			
			
			
		</div>
	);
};

export default Editor_dash;
