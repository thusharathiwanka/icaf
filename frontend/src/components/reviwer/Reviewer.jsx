import React from "react";
import { Link } from "react-router-dom";

const Reviewer = () => {
	return (
		<div className="btncontainer" data-testid="div-tag">
			<div>
				<Link className="button" data-testid="button" to={`/auth/user/reviewer/research`}>
					Reasearch Paper
				</Link>
			</div>
			<div>
				<Link className="button1" data-testid="button1-tag" to={`/auth/user/reviewer/workshop`}>
					Workshop
				</Link>
			</div>
		</div>
	);
};

export default Reviewer;
