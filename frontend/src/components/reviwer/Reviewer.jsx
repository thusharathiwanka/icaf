import React from "react";
import { Link } from "react-router-dom";
const Reviewer = () => {
  return (
    <div>
      <div>
        <Link className="button" to={`/auth/user/reviewer/research`}>
          Reasearch Paper
        </Link>
      </div>
      <div>
        <Link className="button1" to={`/auth/user/reviewer/workshop`}>
          Workshop
        </Link>
      </div>
    </div>
  );
};

export default Reviewer;
