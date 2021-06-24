import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import Admin from "./admin/admin";
import Researcher from "../pages/Researcher";
import Attendee from "../pages/Attendee";

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
				<PrivateRoute exact path="/auth/user/admin/dashboard">
					<Admin />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/researcher/dashboard">
					<Researcher />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/attendee/dashboard">
					<Attendee />
				</PrivateRoute>
				<Route exact path="/auth/register">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
