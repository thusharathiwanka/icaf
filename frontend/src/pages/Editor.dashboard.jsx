import React, { useState } from "react";
import AddNotice from "../components/Editor.dashboard/AddNotice";
import NoticeList from "../components/Editor.dashboard/NoticesList";
import NoticesChart from "../components/Editor.dashboard/Chart";
import { getUserType, checkUserAuth } from "../auth/userAuth";
import '../pages/styles/Editor.css';
import UpdateConferenceDate from '../components/Editor.dashboard/UpdateConferenceDate';
import Welcome from '../components/Editor.dashboard/welcome';

const Editor_dash = () => {
	

	
	return (
		<div className="editor">
	     	<Welcome/>
			
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
