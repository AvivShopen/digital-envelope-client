import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateBlessing from "./pages/create-blessing";
import HomePage from "./pages/home";
import { CircularProgress, LinearProgress, ThemeProvider } from "@mui/material";
import theme from "./theme";
import useApi from "./hooks/useApi";
import { Suspense, useEffect } from "react";
import { useUserStore } from "./states/user-store";
import React from "react";

const App = () => {
  const ShowEvents = React.lazy(() => import("./pages/show-events"));
  const ShowBlessings = React.lazy(() => import("./pages/show-blessings"));
  const GenerateQr = React.lazy(() => import("./pages/generate-qr"));
  const Dashboard = React.lazy(() => import("./pages/dashboard"));
  const CreateEvent = React.lazy(() => import("./pages/create-event"));
  const EditEvent = React.lazy(() => import("./pages/edit-event"));

  const { setUser } = useUserStore();

  const fetchUser = async () => {
    const { data } = await useApi.auth().getUser();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blessings/:eventid",
      element: <CreateBlessing />,
    },
    {
      path: "/events",
      element: <ShowEvents />,
    },
    {
      path: "/qr",
      element: <GenerateQr />,
    },
    {
      path: "/event/edit",
      element: <EditEvent />,
    },
    {
      path: "/blessings",
      element: <ShowBlessings />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/event/create",
      element: <CreateEvent />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map(({ path, element }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<LinearProgress />}>{element}</Suspense>
              }
            />
          );
        })}
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/blessings/:eventid" element={<CreateBlessing />} />

        <Route path="/events" element={<ShowEvents />} />
        <Route path="/qr" element={<GenerateQr />} />
        <Route path="/event/edit" element={<EditEvent />} />
        <Route path="/blessings" element={<ShowBlessings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event/create" element={<CreateEvent />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
