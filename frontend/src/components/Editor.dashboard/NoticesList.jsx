import React, { useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ViewNotice from "../Editor.dashboard/ViewNotice";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BASE_URL } from "../../config/config";
import Dialog from '@material-ui/core/Dialog';
import NoticeUpdate from '../Editor.dashboard/UpdateNotice';
const AllNotices = () => {

	const [open, setOpen] = React.useState(false);
	const[Notices, setNotices] = useState(null);
	const [id, setId] = useState(null);
	const [view, SetView] = useState(true);
	const [update, SetUpdate] = useState(false);

	

	const handleClose = () => {
		setOpen(false);
	  };

	const handleId = (id) => {
		setId(id);
		console.log(id);
	}

	
	
	
    const handleClickOpen = () => {
		setOpen(true);
		SetView(true)
		
     
    };

	useEffect(() => {
		fetch(`${BASE_URL}/notice`, {
			method: 'GET',
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Headers": "*", }
		}).then((res) => {return res.json();
		  })
		  .then((data) => {
			setNotices(data);
		  });
	}, []);
	

	return (
		<div>
			<div className="NoticesList_head">
				<h2 style={{fontSize:'20px',textAlign:'center',marginLeft:'20px',fontWeight:'lighter'}}>All Notices Added by Editor</h2>
		</div>
		<div className="NoticesList">
			{/*<div className="Search">
			<button style={{backgroundColor:"white",float:'right',marginBottom:'0'}}><SearchIcon color ="action" /></button>
				<TextField id="standard-search"  type="search" style={{width:'60ch',float:'right',marginRight:'10px'}}/>
				
	</div>*/}
			<TableContainer >
				
			<Table className="NoticesList_table">
					<TableHead >
							<TableRow style={{ backgroundColor: 'rgb(229, 228, 226)' }} >
								<TableCell style={{ textAlign: 'center', width: '250px' }}>ID</TableCell>
								<TableCell style={{ textAlign: 'center', width: '250px' }}>Topic</TableCell>
								<TableCell style={{ textAlign: 'center', width: '250px' }}>Approval</TableCell>
								<TableCell style={{ textAlign: 'center', width: '250px' }}>Created Date</TableCell>
								<TableCell style={{ textAlign: 'center', width: '250px' }}>To Be Post Date </TableCell>
						        <TableCell style={{ width: "130px" }}> </TableCell> 
						
					</TableRow>
						</TableHead>
						{Notices && (
				<TableBody >
							{Notices.map((notice) =>  
							
								<TableRow key={notice._id}>
									<TableCell style={{ textAlign: 'center', width: '250px' }}>{ notice._id}</TableCell>
									<TableCell style={{ textAlign: 'center', width: '250px' }}>{notice.topic }</TableCell>
									<TableCell style={{ textAlign: 'center', width: '250px' }}>{notice.isApproved}</TableCell>
									<TableCell style={{ textAlign: 'center', width: '300px' }}>{new Date(notice.createdAt).toDateString()}</TableCell>
									<TableCell style={{ textAlign: 'center', width: '300px' }}>{new Date(notice.tobePost).toDateString()}</TableCell>
									<TableCell style={{ width: "130px", textAlign: 'right' }} onClick={() => { handleId(notice._id);SetView(true); SetUpdate(false)  }}> <Button variant="outlined" color="primary" onClick={handleClickOpen}> <MoreVertIcon color="action" />
									</Button></TableCell>
					
								</TableRow>
						 )}
							</TableBody>
							) }
				
				</Table>
				</TableContainer>
			</div>
			<Dialog open={open} onClose={handleClose} maxWidth={'lg'} aria-labelledby="customized-dialog-title">
				<nav>
					<div className="navB">
						<button className="NoticesList_Dialog_update_view" onClick={() => { SetView(false); SetUpdate(true) }}>Update Notice</button>
						<button className="NoticesList_Dialog_update_view" onClick={() => { SetView(true); SetUpdate(false) }}>View Notice</button>
					</div>
				</nav>
				<div className="NoticesList_Dialog">
					{view ? id && <ViewNotice id={id} Notices={Notices} /> : ''}
					{update ? <NoticeUpdate id={id} Notices={Notices} /> : ''}
				</div>
			</Dialog>
		</div>
    );
}
 
export default AllNotices;