import "./App.css";
import GenerateQr from "./pages/generate-qr";
import ShowBlessings from "./pages/dashboard/components/show-blessings";
import { Routes, Route } from "react-router-dom";
import ShowEvents from "./pages/show-events";
import CreateBlessing from "./pages/create-blessing";
import Dashboard from "./pages/dashboard";
import CreateEvent from "./pages/create-event";
import HomePage from "./pages/home";
import Header from "./components/header";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        {/* for guests */}
        <Route path="/" element={<HomePage />} />
        <Route path="/qr" element={<GenerateQr />} />
        <Route path="blessings/:eventid" element={<CreateBlessing />} />

        {/* for users */}
        {/* <Route path="/events" element={<ShowEvents />} /> */}
        <Route path="/blessings" element={<ShowBlessings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="event/create" element={<CreateEvent />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
