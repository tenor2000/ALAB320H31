import type { ScoreType } from "../assets/learnerData.ts";

export default function Score({ date, score }: ScoreType) {
  return (
    <li>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </li>
  );
}
