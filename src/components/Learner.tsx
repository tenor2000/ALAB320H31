import Score from "./Score.tsx";
import type { LearnerType } from "../assets/learnerData.tsx";

const cardStyle = {
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  maxWidth: "600px",
};

export default function Learner({ name, bio, scores }: LearnerType) {
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 2,
            textAlign: "left",
            paddingLeft: "10px",
          }}
        >
          <p>{bio}</p>
        </div>
        <div style={{ flex: 1, textAlign: "left", paddingLeft: "10px" }}>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {scores.map((scoreObj) => (
              <Score
                date={scoreObj.date}
                score={scoreObj.score}
                key={scoreObj.date + scoreObj.score}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
