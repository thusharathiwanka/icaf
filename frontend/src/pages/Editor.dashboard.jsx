import React, { useState } from "react";
import AddNotice from "../components/Editor.dashboard/AddNotice";
import NoticeList from "../components/Editor.dashboard/NoticesList";
import NoticesChart from "../components/Editor.dashboard/Chart";
import { getUserType, checkUserAuth } from "../auth/userAuth";
import '../pages/styles/Editor.css';
import Update from '../components/Editor.dashboard/UpdateNotice';
import UpdateConferenceDate from '../components/Editor.dashboard/UpdateConferenceDate';

const Editor_dash = () => {
	

	const editor = getUserType();
	const login = checkUserAuth();
	const [view, setView] = useState(true);
	const handleclick = () => {
		setView(false);
	}
	
	return (
		<div className="editor">
			{view ?
				<div className="welcome_div">
					<button style={{color:'whitesmoke',width:'0px',marginBottom:'5px'}} onClick={handleclick}>x</button>
			<center>
						<h1 style={{ marginBottom: '20px' }}>Welcome Back  {editor}  !!!</h1>
						
					</center>
					
				</div> :
		'' }
			
			<div className="AddNotice_chart_conf">
				<div>
				<AddNotice />
				<UpdateConferenceDate/>
				</div>
				
				<NoticesChart />
				

				
			
			
             
			</div>
			<div >
				
				<NoticeList />
				
				
			</div>
			
			
			
		</div>
	);
};

export default Editor_dash;
