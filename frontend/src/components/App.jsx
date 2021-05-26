import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/workshops">
					<Home />
				</Route>
				<Route exact path="/presentations">
					<Home />
				</Route>
				<Route exact path="/publications">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/auth/login">
					<Login />
				</Route>
				<Route exact path="/auth/register">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
