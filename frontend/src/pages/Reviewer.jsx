import React, { useState, useEffect } from "react";

import ReviewerResearchPapers from "../components/reviwer/ReviewerResearchPapers";
import ReviwerWorkshopCard from "../components/reviwer/ReviwerWorkshopCard";
import "./styles/Reviewer.css";

const Reviewer = () => {
  document.title = "ICAF | Reviewer";
  return (
    <>
      <ReviewerResearchPapers />
      <ReviwerWorkshopCard />
    </>
  );
};

export default Reviewer;
