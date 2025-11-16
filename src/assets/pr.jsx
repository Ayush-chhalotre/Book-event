import React, { useContext } from "react";
import eventdata from "./assets/Eventsdata";
import "./Profile.css";

export default function Profile() {
  const { user, logout } = useContext(eventdata);

  return (
    <div className="profile-container">
      <div className="profile-card">

        <img
          src={user?.image || "https://i.pravatar.cc/150"}
          alt="profile"
          className="profile-img"
        />

        <h2>{user?.name || "User Name"}</h2>
        <p>{user?.email || "email@example.com"}</p>

        <div className="profile-stats">
          <div>
            <h3>12</h3>
            <p>Events Booked</p>
          </div>
          <div>
            <h3>3</h3>
            <p>Hosted Events</p>
          </div>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
