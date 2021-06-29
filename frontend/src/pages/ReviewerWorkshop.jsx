import React from "react";
import WorkshopApproval from "../components/reviwer/reviewerApproval/WorkshopApproval";
import WorkshopDelete from "../components/reviwer/reviewerDelete/WorkshopDelete";
import WorkshopRequest from "../components/reviwer/reviewerRequest/WorkshopRequest";

import "./styles/Reviewer.css";
import "./styles/ReviewerTable.css";

const ReviewerWorkshop = () => {
  document.title = "ICAF | Reviewer";
  return (
    <>
      <WorkshopApproval />
      <WorkshopDelete />
      <WorkshopRequest />
    </>
  );
};

export default ReviewerWorkshop;
