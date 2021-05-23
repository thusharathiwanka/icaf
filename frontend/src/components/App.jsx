import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
