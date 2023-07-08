import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="nsn.jpg" alt="profile-img" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Deepjyoti</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores in
        qui, aspernatur ipsam nihil explicabo nesciunt repudiandae molestiae
        natus culpa!
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill skill={skills.skill} color={skills.color} level={skills.level} />
      ))}
      {/* <Skill skill="JavaScript💪" style={{ backgroundColor: "yellow" }} />
      <Skill skill="Web Design💪" style={{ backgroundColor: "lightGreen" }} />
      <Skill skill="Git and Github 💪" style={{ backgroundColor: "Red" }} />
      <Skill skill="React💪" style={{ backgroundColor: "lightblue" }} /> */}
    </div>
  );
}

function Skill({skill, color,level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
     <span>{skill}</span> 
     <span>{level==="advanced" && '💪'}</span>
     <span>{level==="intermediate" && '👍'}</span>
     <span>{level==="beginner" && '🥱'}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
