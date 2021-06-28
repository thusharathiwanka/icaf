import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ResearchPaperApproval from "../components/reviwer/reviewerApproval/ResearchPaperApproval";
import ResearchPaperDelete from "../components/reviwer/reviewerDelete/ResearchPaperDelete";
import ResearchPaperRequest from "../components/reviwer/reviewerRequest/ResearchPaperRequest";

import "./styles/Reviewer.css";
import "./styles/ReviewerTable.css";

const ReviewerResearchpaper = () => {
  document.title = "ICAF | Reviewer";
  return (
    <>
      <ResearchPaperApproval />
      <ResearchPaperDelete />
      <ResearchPaperRequest />
    </>
  );
};

export default ReviewerResearchpaper;
