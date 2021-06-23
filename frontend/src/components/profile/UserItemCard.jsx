import React from "react";
import { Link } from "react-router-dom";

const UserItemCard = ({ publication }) => {
	return (
		<div className="item-card">
			<div className="item-text-content">
				<h2>{publication.topic}</h2>
				<p>Submitted At - {new Date(publication.createdAt).toDateString()}</p>
				<p className="paid">{!publication.isPaid ? "Not Paid" : "Paid"}</p>
			</div>
			<div className="item-action-content">
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
