import React from "react";
import { useNavigate } from "react-router-dom";
import "./Announcements.css";
import bgVideo from "../assets/bg.mp4/bgvideo.mp4";

function Announcements() {
  const navigate = useNavigate();

  const announcements = [
    {
      title: "Enrollment for New Batch",
      date: "12 Feb 2026",
      message: "Enrollment for new courses started."
    },
    {
      title: "New Course Added",
      date: "08 Feb 2026",
      message: "AI & Machine Learning course is now available."
    },
    {
      title: "IMP Notice",
      date: "02 Feb 2026",
      message: "MERN stack course enrollment is being closed."
    }
  ];

  return (
    <div className="announce-wrapper">

      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="video-overlay"></div>

      <div className="announce-page">

        {/* BACK BUTTON */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2 className="announce-title">📢 Announcements</h2>

        <div className="announce-grid">
          {announcements.map((a, i) => (
            <div key={i} className="announce-card">
              <h3>{a.title}</h3>
              <p className="announce-date">{a.date}</p>
              <p>{a.message}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Announcements;
