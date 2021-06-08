import React from 'react';

const AllNotices = () => {
    return (
        <div className="orderList">
			<table className="table">
				<thead>
					<tr className="head">
						<th>ID</th>
						<th>Topic</th>
                        <th>Content</th>
                        <th>Approval</th>
                        <th>Date</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => {
						return (
							<tr className="rw" >
								<td></td>
								<td></td>
                                <td></td>
                                <td></td>
                                <td></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
    );
}
 
export default ALlNotices;