import React, { useState, useEffect } from "react";

import { BASE_URL } from "../config/config";
import { getUserToken } from "../auth/userAuth";
import ResearcherProfile from "../components/profile/ResearcherProfile";

import "./styles/Researcher.css";

const Researcher = () => {
	return <ResearcherProfile />;
};

export default Researcher;
