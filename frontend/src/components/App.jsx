import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import Admin from "./admin/admin";
import Editor from "../pages/Editor.dashboard";
import Researcher from "../pages/Researcher";
import Attendee from "../pages/Attendee";
import Presenter from "../pages/Presenter";
import Download from "../pages/Download";
import Reviewer from "../pages/Reviewer";
import ReviewerResearchPapaer from "../pages/ReviewerResearchPapaer";
import ReviewerWorkshop from "../pages/ReviewerWorkshop";

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
        <Route exact path="/downloads">
          <Download />
        </Route>
        <PrivateRoute exact path="/auth/user/editor/dashboard">
          <Editor />
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
        <PrivateRoute exact path="/auth/user/presenter/dashboard">
          <Presenter />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/reviewer/dashboard">
          <Reviewer />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/reviewerReasearchPaper/dashboard">
          <ReviewerResearchPapaer />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/reviewerWorkshop/dashboard">
          <ReviewerWorkshop />
        </PrivateRoute>
        <Route exact path="/auth/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
