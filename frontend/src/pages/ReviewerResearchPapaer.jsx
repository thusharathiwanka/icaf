import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BASE_URL } from "../config/config";

import ResearchPaperApproval from "../components/reviwer/reviewerApproval/ResearchPaperApproval";
import ResearchPaperDelete from "../components/reviwer/reviewerDelete/ResearchPaperDelete";
import ResearchPaperRequest from "../components/reviwer/reviewerRequest/ResearchPaperRequest";

import "./styles/Reviewer.css";
import "./styles/ReviewerTable.css";

const ReviewerResearchpaper = () => {
  return (
    <>
      <ResearchPaperApproval />
      <ResearchPaperDelete />
      <ResearchPaperRequest />
    </>
  );
};

export default ReviewerResearchpaper;
