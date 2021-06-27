import React from "react";
import ReactDOM from "react-dom";

import App from "./src/components/App";
import Context from "./src/context/Context";

ReactDOM.render(
	<Context>
		<App />
	</Context>,
	document.getElementById("root")
);
