import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import Admin from "./admin/admin";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<PrivateRoute exact path="/workshops">
					<Home />
				</PrivateRoute>
				<PrivateRoute exact path="/publications">
					<Home />
				</PrivateRoute>
				<PrivateRoute exact path="/downloads">
					<Home />
				</PrivateRoute>
				<Route exact path="/about">
					<About />
				</Route>
				<PrivateRoute exact path="/blogs">
					<About />
				</PrivateRoute>
				<Route exact path="/auth/login">
					<Login />
				</Route>
				<Route exact path ="/adminprofile">
					<Admin/>
				</Route>
				<Route exact path="/auth/register">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
