import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import Auth from "./containers/Auth/Auth";
import Teams from "./containers/Teams/Teams";
import Players from "./containers/Players/Players";
import DetailPlayer from "./containers/DetailPlayer/DetailPlayer";
import AddTeam from "./containers/AddTeam/AddTeam";
import AddPlayer from "./containers/AddPlayer/AddPlayer";
import NotFound from "./containers/NotFound/NotFound";
import "./App.css";
import "antd/dist/antd.css";
import AuthRouter from "./router/AuthRouter";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRouter component={<Auth />} />} />
          <Route
            path="/teams"
            element={<PrivateRoute component={<Teams />} />}
          />
          <Route
            path="/players"
            element={<PrivateRoute component={<Players />} />}
          />
          <Route
            path="/players/:id"
            element={<PrivateRoute component={<DetailPlayer />} />}
          />
          <Route
            path="/add-team"
            element={<PrivateRoute component={<AddTeam />} />}
          />
          <Route
            path="/add-player"
            element={<PrivateRoute component={<AddPlayer />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
