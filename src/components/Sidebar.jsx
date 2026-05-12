import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Dashboard</h2>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "active-link"
            : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive
            ? "active-link"
            : ""
        }
      >
        Events
      </NavLink>

      <NavLink
        to="/participants"
        className={({ isActive }) =>
          isActive
            ? "active-link"
            : ""
        }
      >
        Participants
      </NavLink>

      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          isActive
            ? "active-link"
            : ""
        }
      >
        Analytics
      </NavLink>
    </div>
  );
}

export default Sidebar;