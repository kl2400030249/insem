import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const students = [
    { name: "Yasaswi Kondaveti", email: "yasaswi@example.com", course: "B.Tech CSE" },
    { name: "John Doe", email: "john@example.com", course: "B.Tech ECE" },
    { name: "Jane Smith", email: "jane@example.com", course: "B.Tech ME" },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Student Info Dashboard</h1>
      </header>

      <main className="main-content">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            email={student.email}
            course={student.course}
          />
        ))}
      </main>

      <footer className="footer">
        <p>© 2025 College Name</p>
      </footer>
    </div>
  );
}

export default App;
