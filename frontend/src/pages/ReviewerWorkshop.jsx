import React, { useState, useEffect } from "react";

import WorkshopApproval from "../components/reviwer/reviewerApproval/WorkshopApproval";
import WorkshopDelete from "../components/reviwer/reviewerDelete/WorkshopDelete";
import WorkshopRequest from "../components/reviwer/reviewerRequest/WorkshopRequest";

import "./styles/Reviewer.css";

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
