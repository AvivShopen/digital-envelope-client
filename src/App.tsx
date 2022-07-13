import "./App.css";
import GenerateQr from "./pages/generate-qr/GenerateQr";
import ShowBlessings from "./pages/show-blessings/ShowBlessings";
import { Routes, Route } from "react-router-dom";
import ShowEvents from "./pages/show-events/ShowEvents";
import CreateBlessing from "./pages/create-blessing/CreateBlessing";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateEvent from "./pages/create-event/CreateEvent";
import HomePage from "./pages/home/HomePage";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
