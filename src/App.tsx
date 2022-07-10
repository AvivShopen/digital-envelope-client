import "./App.css";
import GenerateQr from "./pages/generate-qr";
import ShowBlessings from "./pages/show-blessings";
import { Routes, Route, Link } from "react-router-dom";
import ShowEvents from "./pages/show-events";

const App = () => {
  return ( 
  <Routes>
      <Route path="/events" element={<ShowEvents/>}/>
     <Route path="/:eventId/blessings" element={<ShowBlessings/>}/>
  </Routes>
  )
};

export default App;
