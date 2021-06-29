import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./private/PrivateRoute";
import PrivateAdminRoute from "./private/PrivateAdminRoute";
import PrivateEditorRoute from "./private/PrivateEditorRoute";
import PrivateReviewerRoute from "./private/PrivateReviewerRoute";
import PrivateResearcherRoute from "./private/PrivateResearcherRoute";
import PrivatePresenterRoute from "./private/PrivatePresenterRoute";
import PrivateAttendeeRoute from "./private/PrivateAttendeeRoute";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "./admin/Admin";
import Editor from "../pages/Editor.dashboard";
import Researcher from "../pages/Researcher";
import Attendee from "../pages/Attendee";
import Presenter from "../pages/Presenter";
import Download from "../pages/Download";
import Workshop from "../pages/Workshop";
import Publication from "../pages/Publication";
import EventForm from "./common/EventForm";
import Blog from "../pages/Blog";
import BlogForm from "./blog/BlogForm";
import ReadBlog from "./blog/ReadBlog";
import Noticeacception from "./admin/Noticeacception";
import Payment from "./Payment/payment";
import Reviewer from "../pages/Reviewer";
import ResearchCard from "../pages/ReviewerResearchCard";
import WorkshopCard from "../pages/ReviewerWorksopCard";
import ReviewerResearchPapaer from "../pages/ReviewerResearchPapaer";
import ReviewerWorkshop from "../pages/ReviewerWorkshop";
import ErrorPage from "./error/404";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/downloads">
          <Download />
        </Route>
        <PrivateRoute exact path="/workshops">
          <Workshop />
        </PrivateRoute>
        <PrivateRoute exact path="/publications">
          <Publication />
        </PrivateRoute>
        <PrivateRoute exact path="/blogs">
          <Blog />
        </PrivateRoute>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/auth/register">
          <Register />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <PrivateAdminRoute exact path="/auth/user/admin/dashboard">
          <Admin />
        </PrivateAdminRoute>
        <PrivateRoute exact path="/auth/user/admin/notices">
          <Noticeacception />
        </PrivateRoute>
        <PrivateEditorRoute exact path="/auth/user/editor/dashboard">
          <Editor />
        </PrivateEditorRoute>
        <PrivateResearcherRoute exact path="/auth/user/researcher/dashboard">
          <Researcher />
        </PrivateResearcherRoute>
        <PrivatePresenterRoute exact path="/auth/user/presenter/dashboard">
          <Presenter />
        </PrivatePresenterRoute>
        <PrivateAttendeeRoute exact path="/auth/user/attendee/dashboard">
          <Attendee />
        </PrivateAttendeeRoute>
        <PrivatePresenterRoute exact path="/workshop/create">
          <EventForm title="Workshop" />
        </PrivatePresenterRoute>
        <PrivateResearcherRoute exact path="/publication/create">
          <EventForm title="Publication" />
        </PrivateResearcherRoute>
        <PrivateResearcherRoute exact path="/blogs/create">
          <BlogForm />
        </PrivateResearcherRoute>
        <PrivateRoute exact path="/blogs/:id">
          <ReadBlog />
        </PrivateRoute>
        <PrivateResearcherRoute
          exact
          path="/auth/user/researcher/publication/pay/:id"
        >
          <Payment />
        </PrivateResearcherRoute>
        <PrivateReviewerRoute exact path="/auth/user/reviewer/dashboard">
          <Reviewer />
        </PrivateReviewerRoute>
        <PrivateReviewerRoute exact path="/auth/user/reviewer/reasearch/card">
          <ResearchCard />
        </PrivateReviewerRoute>
        <PrivateReviewerRoute exact path="/auth/user/reviewer/workshop/card">
          <WorkshopCard />
        </PrivateReviewerRoute>
        <PrivateReviewerRoute exact path="/auth/user/reviewer/research">
          <ReviewerResearchPapaer />
        </PrivateReviewerRoute>
        <PrivateReviewerRoute exact path="/auth/user/reviewer/workshop">
          <ReviewerWorkshop />
        </PrivateReviewerRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
