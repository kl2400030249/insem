import React, { useState, useEffect } from "react";
import "./StudentCard.css";

const StudentCard = ({ name, email, course }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`student-card ${isMobile ? "vertical" : "horizontal"}`}>
      <div className="student-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Course:</strong> {course}</p>
      </div>
    </div>
  );
};

export default StudentCard;
