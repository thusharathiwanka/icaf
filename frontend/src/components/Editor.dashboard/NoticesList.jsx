import React from 'react';

const AllNotices = () => {
    return (
		<div className="NoticesList">
			<div className="Search" >
			<input type="text" />
			<button>Search</button>
			</div>
			<table className="table">
				<thead>
					<tr className="head_row">
						<th>ID</th>
						<th>Topic</th>
                        <th>Content</th>
                        <th>Approval</th>
						<th>Date</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					
							<tr className="rw" >
								<td>hi</td>
								<td>ho</td>
                                <td>he</td>
                                <td>hd</td>
                                <td>hc</td>
						<td><button className="view">View</button></td>
						<td><button className="Update">Update</button></td>
					</tr>
					<tr className="rw" >
								<td>hi</td>
								<td>ho</td>
                                <td>he</td>
                                <td>hd</td>
                                <td>hc</td>
						<td><button className="view">View</button></td>
						<td><button className="Update">Update</button></td>
							</tr>
					
				</tbody>
			</table>
		</div>
    );
}
 
export default AllNotices;