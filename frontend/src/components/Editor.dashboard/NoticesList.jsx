import React, { useState,useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ViewNotice from "../Editor.dashboard/ViewNotice";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from "../../config/config";
const AllNotices = () => {

	const[Notices, setNotices] = useState(null);
	

	useEffect(() => {
		fetch(`${BASE_URL}/notice`).then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setNotices(data);
		  });
	}, []);
	
	console.log(Notices);
	return (
		<div>
		<div className="Listhead"></div>
		<div className="NoticesList">
			{/*<div className="Search">
			<button style={{backgroundColor:"white",float:'right',marginBottom:'0'}}><SearchIcon color ="action" /></button>
				<TextField id="standard-search"  type="search" style={{width:'60ch',float:'right',marginRight:'10px'}}/>
				
	</div>*/}
			<TableContainer >
				
			<Table className="table">
					<TableHead >
					<TableRow style={{backgroundColor:'rgb(229, 228, 226)'}} >
						<TableCell style={{textAlign:'center',width:'250px'}}>ID</TableCell>
						<TableCell style={{textAlign:'center',width:'250px'}}>Topic</TableCell>
                        <TableCell style={{textAlign:'center',width:'250px'}}>Approval</TableCell>
						<TableCell style={{textAlign:'center',width:'250px'}}>Date</TableCell>
						<TableCell  style={{width:"30px" ,textAlign:'center',width:'250px'}}> </TableCell>
						
					</TableRow>
				</TableHead>
				<TableBody >

					
						<TableRow >
								<TableCell style={{textAlign:'center',width:'250px'}}>hi</TableCell>
								<TableCell style={{textAlign:'center',width:'250px'}}>ho</TableCell>
                                <TableCell style={{textAlign:'center',width:'250px'}}>hd</TableCell>
                                <TableCell style={{textAlign:'center',width:'250px'}}>hc</TableCell>
						<TableCell style={{width:"30px", textAlign:'center'}} ><ViewNotice/></TableCell>
						
					</TableRow>
					<TableRow >
								<TableCell style={{textAlign:'center',width:'250px'}}>hi</TableCell>
								<TableCell style={{textAlign:'center',width:'250px'}}>ho</TableCell>
                                <TableCell style={{textAlign:'center',width:'250px'}}>hd</TableCell>
                                <TableCell style={{textAlign:'center',width:'250px'}}>hc</TableCell>
							<TableCell style={{ width: "30px", textAlign:'center' }}><ViewNotice/></TableCell>
						
				   </TableRow>
					
				</TableBody>
				</Table>
				</TableContainer>
				</div>
		</div>
    );
}
 
export default AllNotices;