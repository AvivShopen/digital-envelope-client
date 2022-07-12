import "./App.css";
import GenerateQr from "./pages/GenerateQr";
import ShowBlessings from "./pages/show-blessings/ShowBlessings";
import { Routes, Route, Link } from "react-router-dom";
import ShowEvents from "./pages/show-events/ShowEvents";
import CreateBlessing from "./pages/create-blessing/CreateBlessing";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateEvent from "./pages/create-event/CreateEvent";

const App = () => {
  return (
    <Routes>
      <Route path="/events" element={<ShowEvents />} />
      <Route path="/blessings" element={<ShowBlessings />} />
      <Route path="/create-blessing" element={<CreateBlessing />} />
      <Route path="/qr" element={<GenerateQr />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="blessings/:eventid" element={<CreateBlessing />} />
      <Route path="event/create" element={<CreateEvent />} />
    </Routes>
  );
};

export default App;
