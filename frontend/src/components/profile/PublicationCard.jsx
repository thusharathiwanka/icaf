import React from "react";
import { Link } from "react-router-dom";

const UserItemCard = ({ publication }) => {
	return (
		<div className="item-card">
			<div className="item-text-content">
				<h2>{publication.topic}</h2>
				<p>Payment Status - {!publication.isPaid ? "Not Paid" : "Paid"}</p>
				<p>Approval Status - {publication.isApproved}</p>
				<p className="light">
					Submitted on - {new Date(publication.createdAt).toDateString()}
				</p>
			</div>
			<div className="item-action-content">
				{publication.isApproved === "approved" && (
					<Link className="pay">Pay</Link>
				)}
				<Link
					to={{
						pathname: publication.src,
					}}
					target="blank"
				>
					Download
				</Link>
			</div>
		</div>
	);
};

export default UserItemCard;
