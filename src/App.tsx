import { useState } from "react";
import "./App.css";
import Learner from "./components/Learner.tsx";

import data from "./assets/learnerData.ts";

function App() {
  const [learnerData, setLearnerData] = useState([...data]);

  return (
    <div className="App">
      <h1>Learner Data</h1>

      {learnerData.length !== 0 ? (
        learnerData.map((learner) => {
          return (
            <div
              style={{ border: "1px solid lightgray", borderRadius: "10px" }}
            >
              <Learner
                name={learner.name}
                bio={learner.bio}
                scores={learner.scores}
                key={learner.name}
              />
              <div style={{ margin: "1rem" }}>
                <button
                  onClick={() =>
                    setLearnerData(
                      learnerData.filter(
                        (learner) => learner.name !== learnerData[0].name
                      )
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <button onClick={() => setLearnerData([...data])}>Reset</button>
      )}
    </div>
  );
}

export default App;
