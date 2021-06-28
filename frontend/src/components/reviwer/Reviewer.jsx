import React from "react";
import { Link } from "react-router-dom";
const Reviewer = () => {
  return (
    <div>
      <div>
        <Link to="/auth/user/reviewerReasearchPaper/dashboard">
          <button type="button" className="button">
            Reasearch Paper
          </button>
        </Link>
      </div>
      <div>
        <Link to="/auth/user/reviewerWorkshop/dashboard">
          <button type="button" className="button1">
            Workshop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reviewer;
