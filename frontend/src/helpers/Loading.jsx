import React, { useEffect } from "react";

import useStorage from "../hooks/useStorage";

import "./Loading.css";

const Loading = ({ file, setFile }) => {
	const { url, progress } = useStorage(file);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<div className="loading-container">
			<div className="loading"></div>
			<h2>{`Uploading... ${progress}%`}</h2>
		</div>
	);
};

export default Loading;
