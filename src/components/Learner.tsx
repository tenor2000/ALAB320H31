import Score from "./Score.tsx";
import type { LearnerType } from "../assets/learnerData.tsx";

export default function Learner({ name, bio, scores }: LearnerType) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {scores.map((scoreObj) => (
          <Score scoreObj={scoreObj} key={scoreObj.date + scoreObj.score} />
        ))}
      </ul>
    </div>
  );
}
