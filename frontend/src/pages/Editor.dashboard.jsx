import React from "react";
import AddNotice from "../components/Editor.dashboard/AddNotice";
import NoticeList from "../components/Editor.dashboard/NoticesList";

const Editor_dash = () => {
	return (
		<div>
			<div>
			<AddNotice />
		
			
			<NoticeList/>
			</div>
			
		</div>
	);
};

export default Editor_dash;
