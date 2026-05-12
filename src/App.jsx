import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Participants from "./pages/Participants";
import Analytics from "./pages/Analytics";

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

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

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

        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;