import React, { useState } from "react";
import AddNotice from "../components/Editor.dashboard/AddNotice";
import NoticeList from "../components/Editor.dashboard/NoticesList";
import NoticesChart from "../components/Editor.dashboard/Chart";
import { getUserType, checkUserAuth } from "../auth/userAuth";
import '../pages/styles/Editor.css';
import Update from '../components/Editor.dashboard/UpdateNotice';


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
			<div className="welcome">
			<center>
				<h1>Welcome Back  {editor}  !!!</h1>
					</center>
					<button onClick={handleclick}>x</button>
				</div> :
		'' }
			
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
