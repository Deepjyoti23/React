import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div >
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
    <ul className="skill-list">
      <Skill skill="HTML + CSS💪" style={{ backgroundColor: "Blue" }} />
      <Skill skill="JavaScript💪" style={{ backgroundColor: "yellow" }} />
      <Skill skill="Web Design💪" style={{ backgroundColor: "lightGreen" }} />
      <Skill skill="Git and Github 💪" style={{ backgroundColor: "Red" }} />
      <Skill skill="React💪" style={{ backgroundColor: "lightblue" }} />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={props.style}>
      {props.skill}
    </li>
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
