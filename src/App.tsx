import "./App.css";
import GenerateQr from "./pages/GenerateQr";
import ShowBlessings from "./pages/show-blessings/ShowBlessings";
import { Routes, Route, Link } from "react-router-dom";
import ShowEvents from "./pages/show-events/ShowEvents";
import CreateBlessing from "./pages/create-blessing/CreateBlessing";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateEvent from "./pages/create-event/CreateEvent";
import HomePage from "./pages/home/HomePage";
import React from "react";

const App = () => {
  return (
    <Routes>
      {/* for guests */}
      <Route path="/" element={<HomePage />} />
      <Route path="/qr" element={<GenerateQr />} />
      <Route path="blessings/:eventid" element={<CreateBlessing />} />

      {/* for users */}
      <Route path="/events" element={<ShowEvents />} />
      <Route path="/blessings" element={<ShowBlessings />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="event/create" element={<CreateEvent />} />
    </Routes>
  );
};

export default App;
