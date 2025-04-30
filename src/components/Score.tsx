import type { ScoreType } from "../assets/learnerData.ts";

type ScoreProps = {
  scoreObj: ScoreType;
};

export default function Score({ scoreObj }: ScoreProps) {
  return (
    <li>
      <p>Date: {scoreObj.date}</p>
      <p>Score: {scoreObj.score}</p>
    </li>
  );
}
