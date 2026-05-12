import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Participants from "./pages/Participants";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {

  const [events, setEvents] = useState(() => {
    const saved =
      localStorage.getItem("events");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [participants, setParticipants] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "participants"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    localStorage.setItem(
      "events",
      JSON.stringify(events)
    );

  }, [events]);

  useEffect(() => {

    localStorage.setItem(
      "participants",
      JSON.stringify(participants)
    );

  }, [participants]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={
        darkMode
          ? "app-layout dark"
          : "app-layout"
      }
    >

      <Sidebar />

      <div className="main-content">

        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard
                events={events}
                participants={participants}
              />
            }
          />

          <Route
            path="/events"
            element={
              <Events
                events={events}
                setEvents={setEvents}
              />
            }
          />

          <Route
            path="/participants"
            element={
              <Participants
                participants={participants}
                setParticipants={
                  setParticipants
                }
                events={events}
              />
            }
          />

          <Route
            path="/analytics"
            element={
              <Analytics
                events={events}
                participants={
                  participants
                }
              />
            }
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;