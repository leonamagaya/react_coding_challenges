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
  return <img className="avatar" src="./IMG_9377.jpg" alt="Leona Magaya" />;
}

function Intro() {
  return (
    <div>
      <h1>Leona Magaya</h1>
      <p>
        Hi there, I'm Leona👋. I'm a passionate tech enthusiast aspiring to be a
        Web developer 💻. Web development is like the ultimate puzzle, where
        every line of code is a piece that fits perfectly into a bigger picture.
        I relish the challenge, the constant learning, and the joy of building
        digital experiences that have the ability to connect with users around
        the globe. 🔭 I’m currently working on: Building my portfolio.~
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#F273B3" />
      <Skill skill="HTML+CSS" emoji="💪" color="#B498EC" />
      <Skill skill="JavaScript" emoji="💪" color="#FFB9AD" />
      <Skill skill="C programming" emoji="💪" color="#A34BAE" />
      <Skill skill="AWS" emoji="👶" color="#FB86F6" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
