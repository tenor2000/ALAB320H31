import { useState } from "react";
import "./App.css";
import Learner from "./components/Learner.tsx";

import data from "./assets/learnerData.ts";

function App() {
  const [learnerData, setLearnerData] = useState([...data]);

  return (
    <div className="App">
      <h1>Learner Data</h1>
      <h2>React + TypeScript + Vite</h2>
      {learnerData.map((learner) => {
        return (
          <Learner
            name={learner.name}
            bio={learner.bio}
            scores={learner.scores}
            key={learner.name}
          />
        );
      })}
    </div>
  );
}

export default App;
